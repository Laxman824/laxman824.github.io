import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Line, Doughnut, Bar, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  RadialLinearScale,
  Filler,
} from "chart.js";
import axios from "axios";
import { format, subDays, parseISO, differenceInDays } from "date-fns";
import CountUp from "react-countup";
import toast, { Toaster } from "react-hot-toast";
import "./GithubStats.css";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaCode,
  FaFire,
  FaTrophy,
  FaChartLine,
  FaCircle,
  FaDownload,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import { BiGitRepoForked, BiGitCommit } from "react-icons/bi";
import { MdTrendingUp, MdTimeline } from "react-icons/md";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

const GithubStats = ({ theme }) => {
  const [githubData, setGithubData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [contributionData, setContributionData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState("year");
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState("all");
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerRef = useRef(null);

  const GITHUB_USERNAME = "Laxman824";
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    fetchGithubData();
  }, []);

  const fetchGithubData = async () => {
    setLoading(true);
    setError(null);

    const headers = GITHUB_TOKEN
      ? { Authorization: `token ${GITHUB_TOKEN}` }
      : {};

    try {
      const [userResponse, reposResponse, eventsResponse] = await Promise.all([
        axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          headers,
        }),
        axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          { headers }
        ),
        axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`,
          { headers }
        ),
      ]);

      setGithubData(userResponse.data);
      setRepos(reposResponse.data);
      processContributionData(eventsResponse.data);
      setLoading(false);
      setHasAnimated(true);

      toast.success("Data loaded successfully!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (err) {
      console.error("Error fetching GitHub data:", err);
      setError(err.message);
      setLoading(false);
      toast.error("Failed to load GitHub data");
    }
  };

  const processContributionData = (events) => {
    const contributions = {};
    if (Array.isArray(events)) {
      events.forEach((event) => {
        if (event.created_at) {
          const date = format(parseISO(event.created_at), "yyyy-MM-dd");
          contributions[date] = (contributions[date] || 0) + 1;
        }
      });
    }
    setContributionData(contributions);
  };

  const stats = useMemo(() => {
    if (!repos.length) return null;

    const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
    const totalWatchers = repos.reduce(
      (sum, repo) => sum + repo.watchers_count,
      0
    );

    const languages = {};
    repos.forEach((repo) => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    const topLanguage = Object.entries(languages).sort(
      (a, b) => b[1] - a[1]
    )[0];

    // Calculate streak
    const dates = Object.keys(contributionData).sort();
    let currentStreak = 0;
    let tempStreak = 0;

    for (let i = dates.length - 1; i >= 0; i--) {
      const today = format(new Date(), "yyyy-MM-dd");
      const daysDiff = differenceInDays(parseISO(today), parseISO(dates[i]));

      if (daysDiff === tempStreak) {
        currentStreak++;
        tempStreak++;
      } else {
        break;
      }
    }

    const thisYearRepos = repos.filter(
      (r) => new Date(r.created_at).getFullYear() === new Date().getFullYear()
    ).length;

    return {
      totalStars,
      totalForks,
      totalWatchers,
      totalRepos: repos.length,
      publicRepos: repos.filter((r) => !r.private).length,
      languages,
      topLanguage: topLanguage ? topLanguage[0] : "N/A",
      avgStarsPerRepo: (totalStars / repos.length).toFixed(1),
      currentStreak,
      thisYearRepos,
      totalContributions: Object.values(contributionData).reduce(
        (a, b) => a + b,
        0
      ),
    };
  }, [repos, contributionData]);

  const languageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    React: "#61dafb",
    Vue: "#42b883",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Go: "#00ADD8",
    Rust: "#dea584",
    Swift: "#ffac45",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#178600",
    Shell: "#89e051",
    Other: "#858585",
  };

  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description || "")
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      const matchesLanguage =
        languageFilter === "all" || repo.language === languageFilter;
      return matchesSearch && matchesLanguage;
    });
  }, [repos, searchQuery, languageFilter]);

  const getLanguageDistribution = useCallback(() => {
    if (!stats) return null;

    const sortedLanguages = Object.entries(stats.languages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);

    return {
      labels: sortedLanguages.map(([lang]) => lang),
      datasets: [
        {
          data: sortedLanguages.map(([, count]) => count),
          backgroundColor: sortedLanguages.map(
            ([lang]) => languageColors[lang] || languageColors.Other
          ),
          borderWidth: 0,
          hoverOffset: 8,
        },
      ],
    };
  }, [stats]);

  const getCommitActivity = useCallback(() => {
    const days = timeRange === "week" ? 7 : timeRange === "month" ? 30 : 365;
    const labels = [];
    const data = [];

    for (let i = days - 1; i >= 0; i--) {
      const date = format(subDays(new Date(), i), "yyyy-MM-dd");
      labels.push(
        timeRange === "year"
          ? format(subDays(new Date(), i), "MMM dd")
          : format(subDays(new Date(), i), "dd")
      );
      data.push(contributionData[date] || 0);
    }

    return {
      labels,
      datasets: [
        {
          label: "Contributions",
          data,
          fill: true,
          borderColor: theme?.accentColor || "#0366d6",
          backgroundColor: `${theme?.accentColor || "#0366d6"}20`,
          tension: 0.4,
          pointRadius: 2,
          pointHoverRadius: 6,
          pointBackgroundColor: theme?.accentColor || "#0366d6",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
        },
      ],
    };
  }, [contributionData, timeRange, theme]);

  const getRepoStarsChart = useCallback(() => {
    const topRepos = [...repos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 8);

    return {
      labels: topRepos.map((repo) => repo.name),
      datasets: [
        {
          label: "Stars",
          data: topRepos.map((repo) => repo.stargazers_count),
          backgroundColor: `${theme?.accentColor || "#0366d6"}80`,
          borderColor: theme?.accentColor || "#0366d6",
          borderWidth: 2,
          borderRadius: 8,
        },
        {
          label: "Forks",
          data: topRepos.map((repo) => repo.forks_count),
          backgroundColor: `${theme?.text || "#24292e"}40`,
          borderColor: theme?.text || "#24292e",
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    };
  }, [repos, theme]);

  const getLanguageExpertiseRadar = useCallback(() => {
    if (!stats) return null;

    const topLanguages = Object.entries(stats.languages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);

    return {
      labels: topLanguages.map(([lang]) => lang),
      datasets: [
        {
          label: "Repository Count",
          data: topLanguages.map(([, count]) => count),
          backgroundColor: `${theme?.accentColor || "#0366d6"}30`,
          borderColor: theme?.accentColor || "#0366d6",
          borderWidth: 2,
          pointBackgroundColor: theme?.accentColor || "#0366d6",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: theme?.accentColor || "#0366d6",
        },
      ],
    };
  }, [stats, theme]);

  const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: theme?.text || "#24292e",
          padding: 16,
          font: {
            family:
              "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            size: 12,
            weight: "500",
          },
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleFont: { size: 13, weight: "600" },
        bodyFont: { size: 12 },
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  if (loading) {
    return (
      <div
        className="github-stats-container"
        style={{ backgroundColor: theme?.body }}
      >
        <motion.div
          className="loading-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaGithub className="loading-icon" style={{ color: theme?.text }} />
          </motion.div>
          <h2 style={{ color: theme?.text }}>Analyzing GitHub Profile...</h2>
          <div className="loading-bar">
            <motion.div
              className="loading-progress"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ background: theme?.accentColor }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="github-stats-container"
        style={{ backgroundColor: theme?.body }}
      >
        <motion.div
          className="error-state"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaGithub className="error-icon" style={{ color: theme?.text }} />
          <h2 style={{ color: theme?.text }}>Unable to Load GitHub Data</h2>
          <p style={{ color: `${theme?.text}99` }}>{error}</p>
          <button onClick={fetchGithubData} className="retry-button">
            Retry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="github-stats-container"
      style={{ backgroundColor: theme?.body, color: theme?.text }}
      ref={containerRef}
    >
      <Toaster position="top-right" />

      {/* Export Button */}

      {/* Hero Section */}
      <motion.section
        className="stats-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            whileHover={{ scale: 1.05, rotate: 5 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaGithub />
          </motion.div>
          <h1 className="hero-title">GitHub Analytics</h1>
          <p className="hero-subtitle">
            Real-time insights into my open-source contributions and development
            activity
          </p>

          {stats?.currentStreak > 0 && (
            <motion.div
              className="streak-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              <FaFire className="fire-icon" />
              <span>
                {hasAnimated ? (
                  <CountUp end={stats.currentStreak} duration={2} />
                ) : (
                  stats.currentStreak
                )}{" "}
                day streak!
              </span>
            </motion.div>
          )}
        </div>

        <div className="tab-navigation">
          {["overview", "repositories", "activity", "languages"].map((tab) => (
            <motion.button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Metrics Cards */}
      <motion.section
        className="metrics-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          {
            icon: FaStar,
            label: "Total Stars",
            value: stats?.totalStars || 0,
            trend: "+12%",
            color: "#ffd700",
          },
          {
            icon: BiGitRepoForked,
            label: "Total Forks",
            value: stats?.totalForks || 0,
            trend: "+8%",
            color: "#0366d6",
          },
          {
            icon: FaCode,
            label: "Public Repos",
            value: stats?.publicRepos || 0,
            trend: `+${stats?.thisYearRepos || 0}`,
            color: "#28a745",
          },
          {
            icon: FaFire,
            label: "Top Language",
            value: stats?.topLanguage || "N/A",
            subtitle: `${stats?.languages[stats?.topLanguage] || 0} repos`,
            color: languageColors[stats?.topLanguage] || "#858585",
          },
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            className="metric-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -8,
              // boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="metric-icon"
              style={{ color: metric.color }}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <metric.icon />
            </motion.div>
            <div className="metric-content">
              <span className="metric-label">{metric.label}</span>
              <h3 className="metric-value">
                {typeof metric.value === "number" && hasAnimated ? (
                  <CountUp end={metric.value} duration={2} />
                ) : (
                  metric.value
                )}
              </h3>
              {metric.trend && (
                <span className="metric-trend positive">
                  <MdTrendingUp /> {metric.trend}
                </span>
              )}
              {metric.subtitle && (
                <span className="metric-subtitle">{metric.subtitle}</span>
              )}
            </div>
            <motion.div
              className="metric-decoration"
              style={{ backgroundColor: `${metric.color}15` }}
            />
          </motion.div>
        ))}
      </motion.section>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <section className="chart-section">
              <div className="section-header">
                <div>
                  <h2 className="section-title">
                    <BiGitCommit /> Contribution Activity
                  </h2>
                  <p className="section-subtitle">
                    Your GitHub activity over time
                  </p>
                </div>
                <div className="time-range-selector">
                  {["week", "month", "year"].map((range) => (
                    <motion.button
                      key={range}
                      className={timeRange === range ? "active" : ""}
                      onClick={() => setTimeRange(range)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {range.charAt(0).toUpperCase() + range.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="chart-container">
                <Line
                  data={getCommitActivity()}
                  options={{
                    ...commonChartOptions,
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: { color: `${theme?.text}10`, drawBorder: false },
                        ticks: {
                          color: `${theme?.text}80`,
                          font: { size: 11 },
                          padding: 8,
                        },
                      },
                      x: {
                        grid: { display: false, drawBorder: false },
                        ticks: {
                          color: `${theme?.text}80`,
                          font: { size: 11 },
                          maxRotation: 0,
                          padding: 8,
                        },
                      },
                    },
                  }}
                />
              </div>
            </section>

            <div className="two-column-layout">
              <section className="chart-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <FaCode /> Language Distribution
                  </h2>
                </div>
                <div className="chart-container chart-container-small">
                  <Doughnut
                    data={getLanguageDistribution()}
                    options={{
                      ...commonChartOptions,
                      cutout: "65%",
                      plugins: {
                        ...commonChartOptions.plugins,
                        legend: {
                          ...commonChartOptions.plugins.legend,
                          position: "right",
                        },
                      },
                    }}
                  />
                </div>
              </section>

              <section className="chart-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <FaTrophy /> Language Expertise
                  </h2>
                </div>
                <div className="chart-container chart-container-small">
                  <Radar
                    data={getLanguageExpertiseRadar()}
                    options={{
                      ...commonChartOptions,
                      scales: {
                        r: {
                          beginAtZero: true,
                          grid: { color: `${theme?.text}15` },
                          angleLines: { color: `${theme?.text}15` },
                          pointLabels: {
                            color: theme?.text,
                            font: { size: 12, weight: "600" },
                          },
                          ticks: {
                            color: `${theme?.text}60`,
                            backdropColor: "transparent",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </section>
            </div>
          </motion.div>
        )}

        {activeTab === "repositories" && (
          <motion.div
            key="repositories"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <section className="chart-section">
              <div className="section-header">
                <h2 className="section-title">
                  <FaChartLine /> Top Repositories Performance
                </h2>
              </div>
              <div className="chart-container">
                <Bar
                  data={getRepoStarsChart()}
                  options={{
                    ...commonChartOptions,
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: { color: `${theme?.text}10`, drawBorder: false },
                        ticks: {
                          color: `${theme?.text}80`,
                          font: { size: 11 },
                        },
                      },
                      x: {
                        grid: { display: false, drawBorder: false },
                        ticks: {
                          color: `${theme?.text}80`,
                          font: { size: 11 },
                        },
                      },
                    },
                  }}
                />
              </div>
            </section>

            <div className="repo-controls">
              <div className="search-bar">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search repositories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="filter-dropdown">
                <FaFilter />
                <select
                  value={languageFilter}
                  onChange={(e) => setLanguageFilter(e.target.value)}
                >
                  <option value="all">All Languages</option>
                  {Object.keys(stats?.languages || {}).map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <section className="repos-section">
              <h2 className="section-title">
                Featured Repositories
                <span className="count-badge">{filteredRepos.length}</span>
              </h2>
              <div className="repos-grid">
                {filteredRepos
                  .sort((a, b) => b.stargazers_count - a.stargazers_count)
                  .slice(0, 12)
                  .map((repo, index) => (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        y: -8,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                      }}
                    >
                      <div className="repo-header">
                        <h3 className="repo-name">{repo.name}</h3>
                        {repo.language && (
                          <span
                            className="repo-language"
                            style={{
                              backgroundColor: `${
                                languageColors[repo.language] ||
                                languageColors.Other
                              }20`,
                              color:
                                languageColors[repo.language] ||
                                languageColors.Other,
                            }}
                          >
                            <FaCircle /> {repo.language}
                          </span>
                        )}
                      </div>
                      <p className="repo-description">
                        {repo.description || "No description available"}
                      </p>
                      <div className="repo-stats">
                        <span>
                          <FaStar /> {repo.stargazers_count}
                        </span>
                        <span>
                          <BiGitRepoForked /> {repo.forks_count}
                        </span>
                        {repo.open_issues_count > 0 && (
                          <span>
                            <FaCircle className="issue-dot" />{" "}
                            {repo.open_issues_count}
                          </span>
                        )}
                      </div>
                    </motion.a>
                  ))}
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === "activity" && (
          <motion.div
            key="activity"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <section className="activity-section">
              <h2 className="section-title">
                <MdTimeline /> Contribution Heatmap
              </h2>
              <div className="heatmap-container">
                {Array.from({ length: 365 }, (_, i) => {
                  const date = format(
                    subDays(new Date(), 364 - i),
                    "yyyy-MM-dd"
                  );
                  const count = contributionData[date] || 0;
                  const intensity = Math.min(count / 5, 1);

                  return (
                    <motion.div
                      key={date}
                      className="heatmap-cell"
                      style={{
                        backgroundColor:
                          count > 0
                            ? `${theme?.accentColor || "#0366d6"}${Math.round(
                                intensity * 255
                              )
                                .toString(16)
                                .padStart(2, "0")}`
                            : `${theme?.text}15`,
                      }}
                      whileHover={{
                        scale: 1.8,
                        zIndex: 10,
                        transition: { duration: 0.1 },
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.001 }}
                      title={`${date}: ${count} contributions`}
                    />
                  );
                })}
              </div>
              <div className="heatmap-legend">
                <span>Less</span>
                <div className="legend-scale">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className="legend-cell"
                      style={{
                        backgroundColor:
                          level === 0
                            ? `${theme?.text}15`
                            : `${theme?.accentColor || "#0366d6"}${Math.round(
                                (level / 4) * 255
                              )
                                .toString(16)
                                .padStart(2, "0")}`,
                      }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === "languages" && (
          <motion.div
            key="languages"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <section className="languages-section">
              <h2 className="section-title">Technology Stack</h2>
              <div className="languages-grid">
                {Object.entries(stats?.languages || {})
                  .sort((a, b) => b[1] - a[1])
                  .map(([language, count], index) => {
                    const percentage = (
                      (count / stats.totalRepos) *
                      100
                    ).toFixed(1);
                    return (
                      <motion.div
                        key={language}
                        className="language-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        }}
                      >
                        <div className="language-header">
                          <div
                            className="language-color"
                            style={{
                              backgroundColor:
                                languageColors[language] ||
                                languageColors.Other,
                            }}
                          />
                          <h3>{language}</h3>
                        </div>
                        <div className="language-stats">
                          <span className="repo-count">
                            {hasAnimated ? (
                              <CountUp end={count} duration={1.5} />
                            ) : (
                              count
                            )}{" "}
                            repositories
                          </span>
                          <span className="percentage">{percentage}%</span>
                        </div>
                        <div className="language-bar">
                          <motion.div
                            className="language-progress"
                            style={{
                              backgroundColor:
                                languageColors[language] ||
                                languageColors.Other,
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.05 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Summary */}
      {githubData && (
        <motion.section
          className="profile-summary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="summary-content">
            <motion.img
              src={githubData.avatar_url}
              alt={githubData.name}
              className="profile-avatar"
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            <div className="summary-info">
              <h2>{githubData.name}</h2>
              <p className="bio">{githubData.bio}</p>
              <div className="profile-stats">
                <div>
                  <strong>
                    {hasAnimated ? (
                      <CountUp end={githubData.followers} duration={2} />
                    ) : (
                      githubData.followers
                    )}
                  </strong>
                  <span>Followers</span>
                </div>
                <div>
                  <strong>
                    {hasAnimated ? (
                      <CountUp end={githubData.following} duration={2} />
                    ) : (
                      githubData.following
                    )}
                  </strong>
                  <span>Following</span>
                </div>
                <div>
                  <strong>
                    {hasAnimated ? (
                      <CountUp
                        end={stats?.totalContributions || 0}
                        duration={2}
                      />
                    ) : (
                      stats?.totalContributions || 0
                    )}
                  </strong>
                  <span>Contributions</span>
                </div>
              </div>
              <motion.a
                href={githubData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> View Full Profile
              </motion.a>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default GithubStats;
