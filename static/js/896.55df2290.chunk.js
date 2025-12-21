"use strict";
(self.webpackChunkLaxman_portfolio =
  self.webpackChunkLaxman_portfolio || []).push([
  [896],
  {
    896: (e, t, a) => {
      a.r(t), a.d(t, { default: () => w });
      var s = a(5043),
        o = a(3565),
        i = a(7473),
        n = a(9379),
        l = a(1605),
        r = a(3576),
        c = a(411),
        d = a(7304),
        u = a(6263),
        h = a(6648),
        m = a(4653),
        x = a(1662),
        p = a(8210),
        v = a(5751),
        g = a(3768),
        j = a(5369),
        y = a(7805),
        b = a(7149),
        N = a(579);
      d.t1.register(
        d.PP,
        d.kc,
        d.FN,
        d.No,
        d.E8,
        d.pr,
        d.hE,
        d.m_,
        d.s$,
        d.Bs,
        d.dN
      );
      const f = (e) => {
        let { theme: t } = e;
        const [a, o] = (0, s.useState)(null),
          [i, d] = (0, s.useState)([]),
          [f, C] = (0, s.useState)({}),
          [w, A] = (0, s.useState)(!0),
          [k, _] = (0, s.useState)(null),
          [S, E] = (0, s.useState)("year"),
          [P, R] = (0, s.useState)("overview"),
          [L, F] = (0, s.useState)(""),
          [T, M] = (0, s.useState)("all"),
          [B, I] = (0, s.useState)(!1),
          D = (0, s.useRef)(null),
          H = "Laxman824",
          z = {
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_FIREBASE_API_KEY:
              "AIzaSyCL4frlIj7jJvCiQ_xg8WxfzE0lZerbits",
            REACT_APP_FIREBASE_AUTH_DOMAIN: "portfolio-142b7.firebaseapp.com",
            REACT_APP_FIREBASE_PROJECT_ID: "portfolio-142b7",
            REACT_APP_FIREBASE_STORAGE_BUCKET:
              "portfolio-142b7.firebasestorage.app",
            REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "1091649303594",
            REACT_APP_FIREBASE_APP_ID:
              "1:1091649303594:web:e8f48f020259d93978ff53",
            REACT_APP_FIREBASE_MEASUREMENT_ID: "G-N70K6V0RS0",
            REACT_APP_ADMIN_EMAIL: "riderogue971@gmail.com",
            REACT_APP_GEMINI_API_KEY: "AIzaSyCBDJsqgohGLi6R2c7X3IXE6tozlYcO5-4",
          }.REACT_APP_GITHUB_TOKEN;
        (0, s.useEffect)(() => {
          O();
        }, []);
        const O = async () => {
            A(!0), _(null);
            const e = z ? { Authorization: "token ".concat(z) } : {};
            try {
              const [t, a, s] = await Promise.all([
                u.A.get("https://api.github.com/users/".concat(H), {
                  headers: e,
                }),
                u.A.get(
                  "https://api.github.com/users/".concat(
                    H,
                    "/repos?sort=updated&per_page=100"
                  ),
                  { headers: e }
                ),
                u.A.get(
                  "https://api.github.com/users/".concat(
                    H,
                    "/events/public?per_page=100"
                  ),
                  { headers: e }
                ),
              ]);
              o(t.data),
                d(a.data),
                G(s.data),
                A(!1),
                I(!0),
                g.Ay.success("Data loaded successfully!", {
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
            } catch (t) {
              console.error("Error fetching GitHub data:", t),
                _(t.message),
                A(!1),
                g.Ay.error("Failed to load GitHub data");
            }
          },
          G = (e) => {
            const t = {};
            Array.isArray(e) &&
              e.forEach((e) => {
                if (e.created_at) {
                  const a = (0, h.GP)((0, m.H)(e.created_at), "yyyy-MM-dd");
                  t[a] = (t[a] || 0) + 1;
                }
              }),
              C(t);
          },
          W = (0, s.useMemo)(() => {
            if (!i.length) return null;
            const e = i.reduce((e, t) => e + t.stargazers_count, 0),
              t = i.reduce((e, t) => e + t.forks_count, 0),
              a = i.reduce((e, t) => e + t.watchers_count, 0),
              s = {};
            i.forEach((e) => {
              e.language && (s[e.language] = (s[e.language] || 0) + 1);
            });
            const o = Object.entries(s).sort((e, t) => t[1] - e[1])[0],
              n = Object.keys(f).sort();
            let l = 0,
              r = 0;
            for (let i = n.length - 1; i >= 0; i--) {
              const e = (0, h.GP)(new Date(), "yyyy-MM-dd");
              if ((0, x.c)((0, m.H)(e), (0, m.H)(n[i])) !== r) break;
              l++, r++;
            }
            const c = i.filter(
              (e) =>
                new Date(e.created_at).getFullYear() ===
                new Date().getFullYear()
            ).length;
            return {
              totalStars: e,
              totalForks: t,
              totalWatchers: a,
              totalRepos: i.length,
              publicRepos: i.filter((e) => !e.private).length,
              languages: s,
              topLanguage: o ? o[0] : "N/A",
              avgStarsPerRepo: (e / i.length).toFixed(1),
              currentStreak: l,
              thisYearRepos: c,
              totalContributions: Object.values(f).reduce((e, t) => e + t, 0),
            };
          }, [i, f]),
          Y = {
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
          },
          U = (0, s.useMemo)(
            () =>
              i.filter((e) => {
                const t =
                    e.name.toLowerCase().includes(L.toLowerCase()) ||
                    (e.description || "")
                      .toLowerCase()
                      .includes(L.toLowerCase()),
                  a = "all" === T || e.language === T;
                return t && a;
              }),
            [i, L, T]
          ),
          K = (0, s.useCallback)(() => {
            if (!W) return null;
            const e = Object.entries(W.languages)
              .sort((e, t) => t[1] - e[1])
              .slice(0, 6);
            return {
              labels: e.map((e) => {
                let [t] = e;
                return t;
              }),
              datasets: [
                {
                  data: e.map((e) => {
                    let [, t] = e;
                    return t;
                  }),
                  backgroundColor: e.map((e) => {
                    let [t] = e;
                    return Y[t] || Y.Other;
                  }),
                  borderWidth: 0,
                  hoverOffset: 8,
                },
              ],
            };
          }, [W]),
          V = (0, s.useCallback)(() => {
            const e = [],
              a = [];
            for (
              let t = ("week" === S ? 7 : "month" === S ? 30 : 365) - 1;
              t >= 0;
              t--
            ) {
              const s = (0, h.GP)((0, p.e)(new Date(), t), "yyyy-MM-dd");
              e.push(
                "year" === S
                  ? (0, h.GP)((0, p.e)(new Date(), t), "MMM dd")
                  : (0, h.GP)((0, p.e)(new Date(), t), "dd")
              ),
                a.push(f[s] || 0);
            }
            return {
              labels: e,
              datasets: [
                {
                  label: "Contributions",
                  data: a,
                  fill: !0,
                  borderColor:
                    (null === t || void 0 === t ? void 0 : t.accentColor) ||
                    "#0366d6",
                  backgroundColor: "".concat(
                    (null === t || void 0 === t ? void 0 : t.accentColor) ||
                      "#0366d6",
                    "20"
                  ),
                  tension: 0.4,
                  pointRadius: 2,
                  pointHoverRadius: 6,
                  pointBackgroundColor:
                    (null === t || void 0 === t ? void 0 : t.accentColor) ||
                    "#0366d6",
                  pointBorderColor: "#fff",
                  pointBorderWidth: 2,
                },
              ],
            };
          }, [f, S, t]),
          J = (0, s.useCallback)(() => {
            const e = [...i]
              .sort((e, t) => t.stargazers_count - e.stargazers_count)
              .slice(0, 8);
            return {
              labels: e.map((e) => e.name),
              datasets: [
                {
                  label: "Stars",
                  data: e.map((e) => e.stargazers_count),
                  backgroundColor: "".concat(
                    (null === t || void 0 === t ? void 0 : t.accentColor) ||
                      "#0366d6",
                    "80"
                  ),
                  borderColor:
                    (null === t || void 0 === t ? void 0 : t.accentColor) ||
                    "#0366d6",
                  borderWidth: 2,
                  borderRadius: 8,
                },
                {
                  label: "Forks",
                  data: e.map((e) => e.forks_count),
                  backgroundColor: "".concat(
                    (null === t || void 0 === t ? void 0 : t.text) || "#24292e",
                    "40"
                  ),
                  borderColor:
                    (null === t || void 0 === t ? void 0 : t.text) || "#24292e",
                  borderWidth: 2,
                  borderRadius: 8,
                },
              ],
            };
          }, [i, t]),
          Z = (0, s.useCallback)(() => {
            if (!W) return null;
            const e = Object.entries(W.languages)
              .sort((e, t) => t[1] - e[1])
              .slice(0, 6);
            return {
              labels: e.map((e) => {
                let [t] = e;
                return t;
              }),
              datasets: [
                {
                  label: "Repository Count",
                  data: e.map((e) => {
                    let [, t] = e;
                    return t;
                  }),
                  backgroundColor: "".concat(
                    (null === t || void 0 === t ? void 0 : t.accentColor) ||
                      "#0366d6",
                    "30"
                  ),
                  borderColor:
                    (null === t || void 0 === t ? void 0 : t.accentColor) ||
                    "#0366d6",
                  borderWidth: 2,
                  pointBackgroundColor:
                    (null === t || void 0 === t ? void 0 : t.accentColor) ||
                    "#0366d6",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor:
                    (null === t || void 0 === t ? void 0 : t.accentColor) ||
                    "#0366d6",
                },
              ],
            };
          }, [W, t]),
          Q = {
            responsive: !0,
            maintainAspectRatio: !1,
            plugins: {
              legend: {
                display: !0,
                position: "bottom",
                labels: {
                  color:
                    (null === t || void 0 === t ? void 0 : t.text) || "#24292e",
                  padding: 16,
                  font: {
                    family:
                      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    size: 12,
                    weight: "500",
                  },
                  usePointStyle: !0,
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
                displayColors: !0,
              },
            },
            interaction: { mode: "index", intersect: !1 },
          };
        return w
          ? (0, N.jsx)("div", {
              className: "github-stats-container",
              style: {
                backgroundColor: null === t || void 0 === t ? void 0 : t.body,
              },
              children: (0, N.jsxs)(l.P.div, {
                className: "loading-state",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                children: [
                  (0, N.jsx)(l.P.div, {
                    animate: { scale: [1, 1.2, 1], rotate: [0, 360] },
                    transition: {
                      duration: 2,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                    },
                    children: (0, N.jsx)(j.hL4, {
                      className: "loading-icon",
                      style: {
                        color: null === t || void 0 === t ? void 0 : t.text,
                      },
                    }),
                  }),
                  (0, N.jsx)("h2", {
                    style: {
                      color: null === t || void 0 === t ? void 0 : t.text,
                    },
                    children: "Analyzing GitHub Profile...",
                  }),
                  (0, N.jsx)("div", {
                    className: "loading-bar",
                    children: (0, N.jsx)(l.P.div, {
                      className: "loading-progress",
                      animate: { width: ["0%", "100%"] },
                      transition: { duration: 1.5, repeat: 1 / 0 },
                      style: {
                        background:
                          null === t || void 0 === t ? void 0 : t.accentColor,
                      },
                    }),
                  }),
                ],
              }),
            })
          : k
          ? (0, N.jsx)("div", {
              className: "github-stats-container",
              style: {
                backgroundColor: null === t || void 0 === t ? void 0 : t.body,
              },
              children: (0, N.jsxs)(l.P.div, {
                className: "error-state",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                children: [
                  (0, N.jsx)(j.hL4, {
                    className: "error-icon",
                    style: {
                      color: null === t || void 0 === t ? void 0 : t.text,
                    },
                  }),
                  (0, N.jsx)("h2", {
                    style: {
                      color: null === t || void 0 === t ? void 0 : t.text,
                    },
                    children: "Unable to Load GitHub Data",
                  }),
                  (0, N.jsx)("p", {
                    style: {
                      color: "".concat(
                        null === t || void 0 === t ? void 0 : t.text,
                        "99"
                      ),
                    },
                    children: k,
                  }),
                  (0, N.jsx)("button", {
                    onClick: O,
                    className: "retry-button",
                    children: "Retry",
                  }),
                ],
              }),
            })
          : (0, N.jsxs)("div", {
              className: "github-stats-container",
              style: {
                backgroundColor: null === t || void 0 === t ? void 0 : t.body,
                color: null === t || void 0 === t ? void 0 : t.text,
              },
              ref: D,
              children: [
                (0, N.jsx)(g.l$, { position: "top-right" }),
                (0, N.jsxs)(l.P.section, {
                  className: "stats-hero",
                  initial: { opacity: 0, y: -20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  children: [
                    (0, N.jsxs)("div", {
                      className: "hero-content",
                      children: [
                        (0, N.jsx)(l.P.div, {
                          className: "hero-badge",
                          whileHover: { scale: 1.05, rotate: 5 },
                          animate: { y: [0, -10, 0] },
                          transition: {
                            duration: 2,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                          children: (0, N.jsx)(j.hL4, {}),
                        }),
                        (0, N.jsx)("h1", {
                          className: "hero-title",
                          children: "GitHub Analytics",
                        }),
                        (0, N.jsx)("p", {
                          className: "hero-subtitle",
                          children:
                            "Real-time insights into my open-source contributions and development activity",
                        }),
                        (null === W || void 0 === W
                          ? void 0
                          : W.currentStreak) > 0 &&
                          (0, N.jsxs)(l.P.div, {
                            className: "streak-badge",
                            initial: { scale: 0 },
                            animate: { scale: 1 },
                            transition: { type: "spring", delay: 0.5 },
                            children: [
                              (0, N.jsx)(j.Itl, { className: "fire-icon" }),
                              (0, N.jsxs)("span", {
                                children: [
                                  B
                                    ? (0, N.jsx)(v.Ay, {
                                        end: W.currentStreak,
                                        duration: 2,
                                      })
                                    : W.currentStreak,
                                  " ",
                                  "day streak!",
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, N.jsx)("div", {
                      className: "tab-navigation",
                      children: [
                        "overview",
                        "repositories",
                        "activity",
                        "languages",
                      ].map((e) =>
                        (0, N.jsx)(
                          l.P.button,
                          {
                            className: "tab-button ".concat(
                              P === e ? "active" : ""
                            ),
                            onClick: () => R(e),
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                            children: e.charAt(0).toUpperCase() + e.slice(1),
                          },
                          e
                        )
                      ),
                    }),
                  ],
                }),
                (0, N.jsx)(l.P.section, {
                  className: "metrics-grid",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.2 },
                  children: [
                    {
                      icon: j.gt3,
                      label: "Total Stars",
                      value:
                        (null === W || void 0 === W ? void 0 : W.totalStars) ||
                        0,
                      trend: "+12%",
                      color: "#ffd700",
                    },
                    {
                      icon: y.DdQ,
                      label: "Total Forks",
                      value:
                        (null === W || void 0 === W ? void 0 : W.totalForks) ||
                        0,
                      trend: "+8%",
                      color: "#0366d6",
                    },
                    {
                      icon: j.FSj,
                      label: "Public Repos",
                      value:
                        (null === W || void 0 === W ? void 0 : W.publicRepos) ||
                        0,
                      trend: "+".concat(
                        (null === W || void 0 === W
                          ? void 0
                          : W.thisYearRepos) || 0
                      ),
                      color: "#28a745",
                    },
                    {
                      icon: j.Itl,
                      label: "Top Language",
                      value:
                        (null === W || void 0 === W ? void 0 : W.topLanguage) ||
                        "N/A",
                      subtitle: "".concat(
                        (null === W || void 0 === W
                          ? void 0
                          : W.languages[
                              null === W || void 0 === W
                                ? void 0
                                : W.topLanguage
                            ]) || 0,
                        " repos"
                      ),
                      color:
                        Y[
                          null === W || void 0 === W ? void 0 : W.topLanguage
                        ] || "#858585",
                    },
                  ].map((e, t) =>
                    (0, N.jsxs)(
                      l.P.div,
                      {
                        className: "metric-card",
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.1 * t },
                        whileHover: { y: -8, transition: { duration: 0.2 } },
                        children: [
                          (0, N.jsx)(l.P.div, {
                            className: "metric-icon",
                            style: { color: e.color },
                            whileHover: { rotate: 360, scale: 1.2 },
                            transition: { duration: 0.5 },
                            children: (0, N.jsx)(e.icon, {}),
                          }),
                          (0, N.jsxs)("div", {
                            className: "metric-content",
                            children: [
                              (0, N.jsx)("span", {
                                className: "metric-label",
                                children: e.label,
                              }),
                              (0, N.jsx)("h3", {
                                className: "metric-value",
                                children:
                                  "number" === typeof e.value && B
                                    ? (0, N.jsx)(v.Ay, {
                                        end: e.value,
                                        duration: 2,
                                      })
                                    : e.value,
                              }),
                              e.trend &&
                                (0, N.jsxs)("span", {
                                  className: "metric-trend positive",
                                  children: [
                                    (0, N.jsx)(b.imn, {}),
                                    " ",
                                    e.trend,
                                  ],
                                }),
                              e.subtitle &&
                                (0, N.jsx)("span", {
                                  className: "metric-subtitle",
                                  children: e.subtitle,
                                }),
                            ],
                          }),
                          (0, N.jsx)(l.P.div, {
                            className: "metric-decoration",
                            style: {
                              backgroundColor: "".concat(e.color, "15"),
                            },
                          }),
                        ],
                      },
                      e.label
                    )
                  ),
                }),
                (0, N.jsxs)(r.N, {
                  mode: "wait",
                  children: [
                    "overview" === P &&
                      (0, N.jsxs)(
                        l.P.div,
                        {
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: 20 },
                          transition: { duration: 0.3 },
                          children: [
                            (0, N.jsxs)("section", {
                              className: "chart-section",
                              children: [
                                (0, N.jsxs)("div", {
                                  className: "section-header",
                                  children: [
                                    (0, N.jsxs)("div", {
                                      children: [
                                        (0, N.jsxs)("h2", {
                                          className: "section-title",
                                          children: [
                                            (0, N.jsx)(y.hMc, {}),
                                            " Contribution Activity",
                                          ],
                                        }),
                                        (0, N.jsx)("p", {
                                          className: "section-subtitle",
                                          children:
                                            "Your GitHub activity over time",
                                        }),
                                      ],
                                    }),
                                    (0, N.jsx)("div", {
                                      className: "time-range-selector",
                                      children: [
                                        "week",
                                        "month",
                                        "year",
                                      ].map((e) =>
                                        (0, N.jsx)(
                                          l.P.button,
                                          {
                                            className: S === e ? "active" : "",
                                            onClick: () => E(e),
                                            whileHover: { scale: 1.05 },
                                            whileTap: { scale: 0.95 },
                                            children:
                                              e.charAt(0).toUpperCase() +
                                              e.slice(1),
                                          },
                                          e
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                                (0, N.jsx)("div", {
                                  className: "chart-container",
                                  children: (0, N.jsx)(c.N1, {
                                    data: V(),
                                    options: (0, n.A)(
                                      (0, n.A)({}, Q),
                                      {},
                                      {
                                        scales: {
                                          y: {
                                            beginAtZero: !0,
                                            grid: {
                                              color: "".concat(
                                                null === t || void 0 === t
                                                  ? void 0
                                                  : t.text,
                                                "10"
                                              ),
                                              drawBorder: !1,
                                            },
                                            ticks: {
                                              color: "".concat(
                                                null === t || void 0 === t
                                                  ? void 0
                                                  : t.text,
                                                "80"
                                              ),
                                              font: { size: 11 },
                                              padding: 8,
                                            },
                                          },
                                          x: {
                                            grid: {
                                              display: !1,
                                              drawBorder: !1,
                                            },
                                            ticks: {
                                              color: "".concat(
                                                null === t || void 0 === t
                                                  ? void 0
                                                  : t.text,
                                                "80"
                                              ),
                                              font: { size: 11 },
                                              maxRotation: 0,
                                              padding: 8,
                                            },
                                          },
                                        },
                                      }
                                    ),
                                  }),
                                }),
                              ],
                            }),
                            (0, N.jsxs)("div", {
                              className: "two-column-layout",
                              children: [
                                (0, N.jsxs)("section", {
                                  className: "chart-section",
                                  children: [
                                    (0, N.jsx)("div", {
                                      className: "section-header",
                                      children: (0, N.jsxs)("h2", {
                                        className: "section-title",
                                        children: [
                                          (0, N.jsx)(j.FSj, {}),
                                          " Language Distribution",
                                        ],
                                      }),
                                    }),
                                    (0, N.jsx)("div", {
                                      className:
                                        "chart-container chart-container-small",
                                      children: (0, N.jsx)(c.nu, {
                                        data: K(),
                                        options: (0, n.A)(
                                          (0, n.A)({}, Q),
                                          {},
                                          {
                                            cutout: "65%",
                                            plugins: (0, n.A)(
                                              (0, n.A)({}, Q.plugins),
                                              {},
                                              {
                                                legend: (0, n.A)(
                                                  (0, n.A)(
                                                    {},
                                                    Q.plugins.legend
                                                  ),
                                                  {},
                                                  { position: "right" }
                                                ),
                                              }
                                            ),
                                          }
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, N.jsxs)("section", {
                                  className: "chart-section",
                                  children: [
                                    (0, N.jsx)("div", {
                                      className: "section-header",
                                      children: (0, N.jsxs)("h2", {
                                        className: "section-title",
                                        children: [
                                          (0, N.jsx)(j.SBv, {}),
                                          " Language Expertise",
                                        ],
                                      }),
                                    }),
                                    (0, N.jsx)("div", {
                                      className:
                                        "chart-container chart-container-small",
                                      children: (0, N.jsx)(c.Vd, {
                                        data: Z(),
                                        options: (0, n.A)(
                                          (0, n.A)({}, Q),
                                          {},
                                          {
                                            scales: {
                                              r: {
                                                beginAtZero: !0,
                                                grid: {
                                                  color: "".concat(
                                                    null === t || void 0 === t
                                                      ? void 0
                                                      : t.text,
                                                    "15"
                                                  ),
                                                },
                                                angleLines: {
                                                  color: "".concat(
                                                    null === t || void 0 === t
                                                      ? void 0
                                                      : t.text,
                                                    "15"
                                                  ),
                                                },
                                                pointLabels: {
                                                  color:
                                                    null === t || void 0 === t
                                                      ? void 0
                                                      : t.text,
                                                  font: {
                                                    size: 12,
                                                    weight: "600",
                                                  },
                                                },
                                                ticks: {
                                                  color: "".concat(
                                                    null === t || void 0 === t
                                                      ? void 0
                                                      : t.text,
                                                    "60"
                                                  ),
                                                  backdropColor: "transparent",
                                                },
                                              },
                                            },
                                          }
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        "overview"
                      ),
                    "repositories" === P &&
                      (0, N.jsxs)(
                        l.P.div,
                        {
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: 20 },
                          transition: { duration: 0.3 },
                          children: [
                            (0, N.jsxs)("section", {
                              className: "chart-section",
                              children: [
                                (0, N.jsx)("div", {
                                  className: "section-header",
                                  children: (0, N.jsxs)("h2", {
                                    className: "section-title",
                                    children: [
                                      (0, N.jsx)(j.YYR, {}),
                                      " Top Repositories Performance",
                                    ],
                                  }),
                                }),
                                (0, N.jsx)("div", {
                                  className: "chart-container",
                                  children: (0, N.jsx)(c.yP, {
                                    data: J(),
                                    options: (0, n.A)(
                                      (0, n.A)({}, Q),
                                      {},
                                      {
                                        scales: {
                                          y: {
                                            beginAtZero: !0,
                                            grid: {
                                              color: "".concat(
                                                null === t || void 0 === t
                                                  ? void 0
                                                  : t.text,
                                                "10"
                                              ),
                                              drawBorder: !1,
                                            },
                                            ticks: {
                                              color: "".concat(
                                                null === t || void 0 === t
                                                  ? void 0
                                                  : t.text,
                                                "80"
                                              ),
                                              font: { size: 11 },
                                            },
                                          },
                                          x: {
                                            grid: {
                                              display: !1,
                                              drawBorder: !1,
                                            },
                                            ticks: {
                                              color: "".concat(
                                                null === t || void 0 === t
                                                  ? void 0
                                                  : t.text,
                                                "80"
                                              ),
                                              font: { size: 11 },
                                            },
                                          },
                                        },
                                      }
                                    ),
                                  }),
                                }),
                              ],
                            }),
                            (0, N.jsxs)("div", {
                              className: "repo-controls",
                              children: [
                                (0, N.jsxs)("div", {
                                  className: "search-bar",
                                  children: [
                                    (0, N.jsx)(j.KSO, {}),
                                    (0, N.jsx)("input", {
                                      type: "text",
                                      placeholder: "Search repositories...",
                                      value: L,
                                      onChange: (e) => F(e.target.value),
                                    }),
                                  ],
                                }),
                                (0, N.jsxs)("div", {
                                  className: "filter-dropdown",
                                  children: [
                                    (0, N.jsx)(j.YsJ, {}),
                                    (0, N.jsxs)("select", {
                                      value: T,
                                      onChange: (e) => M(e.target.value),
                                      children: [
                                        (0, N.jsx)("option", {
                                          value: "all",
                                          children: "All Languages",
                                        }),
                                        Object.keys(
                                          (null === W || void 0 === W
                                            ? void 0
                                            : W.languages) || {}
                                        ).map((e) =>
                                          (0, N.jsx)(
                                            "option",
                                            { value: e, children: e },
                                            e
                                          )
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, N.jsxs)("section", {
                              className: "repos-section",
                              children: [
                                (0, N.jsxs)("h2", {
                                  className: "section-title",
                                  children: [
                                    "Featured Repositories",
                                    (0, N.jsx)("span", {
                                      className: "count-badge",
                                      children: U.length,
                                    }),
                                  ],
                                }),
                                (0, N.jsx)("div", {
                                  className: "repos-grid",
                                  children: U.sort(
                                    (e, t) =>
                                      t.stargazers_count - e.stargazers_count
                                  )
                                    .slice(0, 12)
                                    .map((e, t) =>
                                      (0, N.jsxs)(
                                        l.P.a,
                                        {
                                          href: e.html_url,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className: "repo-card",
                                          initial: { opacity: 0, y: 20 },
                                          animate: { opacity: 1, y: 0 },
                                          transition: { delay: 0.05 * t },
                                          whileHover: {
                                            y: -8,
                                            boxShadow:
                                              "0 20px 40px rgba(0,0,0,0.2)",
                                          },
                                          children: [
                                            (0, N.jsxs)("div", {
                                              className: "repo-header",
                                              children: [
                                                (0, N.jsx)("h3", {
                                                  className: "repo-name",
                                                  children: e.name,
                                                }),
                                                e.language &&
                                                  (0, N.jsxs)("span", {
                                                    className: "repo-language",
                                                    style: {
                                                      backgroundColor: "".concat(
                                                        Y[e.language] ||
                                                          Y.Other,
                                                        "20"
                                                      ),
                                                      color:
                                                        Y[e.language] ||
                                                        Y.Other,
                                                    },
                                                    children: [
                                                      (0, N.jsx)(j.Qp1, {}),
                                                      " ",
                                                      e.language,
                                                    ],
                                                  }),
                                              ],
                                            }),
                                            (0, N.jsx)("p", {
                                              className: "repo-description",
                                              children:
                                                e.description ||
                                                "No description available",
                                            }),
                                            (0, N.jsxs)("div", {
                                              className: "repo-stats",
                                              children: [
                                                (0, N.jsxs)("span", {
                                                  children: [
                                                    (0, N.jsx)(j.gt3, {}),
                                                    " ",
                                                    e.stargazers_count,
                                                  ],
                                                }),
                                                (0, N.jsxs)("span", {
                                                  children: [
                                                    (0, N.jsx)(y.DdQ, {}),
                                                    " ",
                                                    e.forks_count,
                                                  ],
                                                }),
                                                e.open_issues_count > 0 &&
                                                  (0, N.jsxs)("span", {
                                                    children: [
                                                      (0, N.jsx)(j.Qp1, {
                                                        className: "issue-dot",
                                                      }),
                                                      " ",
                                                      e.open_issues_count,
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e.id
                                      )
                                    ),
                                }),
                              ],
                            }),
                          ],
                        },
                        "repositories"
                      ),
                    "activity" === P &&
                      (0, N.jsx)(
                        l.P.div,
                        {
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: 20 },
                          transition: { duration: 0.3 },
                          children: (0, N.jsxs)("section", {
                            className: "activity-section",
                            children: [
                              (0, N.jsxs)("h2", {
                                className: "section-title",
                                children: [
                                  (0, N.jsx)(b.bwo, {}),
                                  " Contribution Heatmap",
                                ],
                              }),
                              (0, N.jsx)("div", {
                                className: "heatmap-container",
                                children: Array.from(
                                  { length: 365 },
                                  (e, a) => {
                                    const s = (0, h.GP)(
                                        (0, p.e)(new Date(), 364 - a),
                                        "yyyy-MM-dd"
                                      ),
                                      o = f[s] || 0,
                                      i = Math.min(o / 5, 1);
                                    return (0, N.jsx)(
                                      l.P.div,
                                      {
                                        className: "heatmap-cell",
                                        style: {
                                          backgroundColor:
                                            o > 0
                                              ? ""
                                                  .concat(
                                                    (null === t || void 0 === t
                                                      ? void 0
                                                      : t.accentColor) ||
                                                      "#0366d6"
                                                  )
                                                  .concat(
                                                    Math.round(255 * i)
                                                      .toString(16)
                                                      .padStart(2, "0")
                                                  )
                                              : "".concat(
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.text,
                                                  "15"
                                                ),
                                        },
                                        whileHover: {
                                          scale: 1.8,
                                          zIndex: 10,
                                          transition: { duration: 0.1 },
                                        },
                                        initial: { scale: 0 },
                                        animate: { scale: 1 },
                                        transition: { delay: 0.001 * a },
                                        title: ""
                                          .concat(s, ": ")
                                          .concat(o, " contributions"),
                                      },
                                      s
                                    );
                                  }
                                ),
                              }),
                              (0, N.jsxs)("div", {
                                className: "heatmap-legend",
                                children: [
                                  (0, N.jsx)("span", { children: "Less" }),
                                  (0, N.jsx)("div", {
                                    className: "legend-scale",
                                    children: [0, 1, 2, 3, 4].map((e) =>
                                      (0, N.jsx)(
                                        "div",
                                        {
                                          className: "legend-cell",
                                          style: {
                                            backgroundColor:
                                              0 === e
                                                ? "".concat(
                                                    null === t || void 0 === t
                                                      ? void 0
                                                      : t.text,
                                                    "15"
                                                  )
                                                : ""
                                                    .concat(
                                                      (null === t ||
                                                      void 0 === t
                                                        ? void 0
                                                        : t.accentColor) ||
                                                        "#0366d6"
                                                    )
                                                    .concat(
                                                      Math.round((e / 4) * 255)
                                                        .toString(16)
                                                        .padStart(2, "0")
                                                    ),
                                          },
                                        },
                                        e
                                      )
                                    ),
                                  }),
                                  (0, N.jsx)("span", { children: "More" }),
                                ],
                              }),
                            ],
                          }),
                        },
                        "activity"
                      ),
                    "languages" === P &&
                      (0, N.jsx)(
                        l.P.div,
                        {
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: 20 },
                          transition: { duration: 0.3 },
                          children: (0, N.jsxs)("section", {
                            className: "languages-section",
                            children: [
                              (0, N.jsx)("h2", {
                                className: "section-title",
                                children: "Technology Stack",
                              }),
                              (0, N.jsx)("div", {
                                className: "languages-grid",
                                children: Object.entries(
                                  (null === W || void 0 === W
                                    ? void 0
                                    : W.languages) || {}
                                )
                                  .sort((e, t) => t[1] - e[1])
                                  .map((e, t) => {
                                    let [a, s] = e;
                                    const o = (
                                      (s / W.totalRepos) *
                                      100
                                    ).toFixed(1);
                                    return (0, N.jsxs)(
                                      l.P.div,
                                      {
                                        className: "language-card",
                                        initial: { opacity: 0, scale: 0.9 },
                                        animate: { opacity: 1, scale: 1 },
                                        transition: { delay: 0.05 * t },
                                        whileHover: {
                                          scale: 1.05,
                                          boxShadow:
                                            "0 10px 30px rgba(0,0,0,0.2)",
                                        },
                                        children: [
                                          (0, N.jsxs)("div", {
                                            className: "language-header",
                                            children: [
                                              (0, N.jsx)("div", {
                                                className: "language-color",
                                                style: {
                                                  backgroundColor:
                                                    Y[a] || Y.Other,
                                                },
                                              }),
                                              (0, N.jsx)("h3", { children: a }),
                                            ],
                                          }),
                                          (0, N.jsxs)("div", {
                                            className: "language-stats",
                                            children: [
                                              (0, N.jsxs)("span", {
                                                className: "repo-count",
                                                children: [
                                                  B
                                                    ? (0, N.jsx)(v.Ay, {
                                                        end: s,
                                                        duration: 1.5,
                                                      })
                                                    : s,
                                                  " ",
                                                  "repositories",
                                                ],
                                              }),
                                              (0, N.jsxs)("span", {
                                                className: "percentage",
                                                children: [o, "%"],
                                              }),
                                            ],
                                          }),
                                          (0, N.jsx)("div", {
                                            className: "language-bar",
                                            children: (0, N.jsx)(l.P.div, {
                                              className: "language-progress",
                                              style: {
                                                backgroundColor:
                                                  Y[a] || Y.Other,
                                              },
                                              initial: { width: 0 },
                                              animate: {
                                                width: "".concat(o, "%"),
                                              },
                                              transition: {
                                                duration: 1,
                                                delay: 0.05 * t,
                                              },
                                            }),
                                          }),
                                        ],
                                      },
                                      a
                                    );
                                  }),
                              }),
                            ],
                          }),
                        },
                        "languages"
                      ),
                  ],
                }),
                a &&
                  (0, N.jsx)(l.P.section, {
                    className: "profile-summary",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.5 },
                    children: (0, N.jsxs)("div", {
                      className: "summary-content",
                      children: [
                        (0, N.jsx)(l.P.img, {
                          src: a.avatar_url,
                          alt: a.name,
                          className: "profile-avatar",
                          whileHover: { scale: 1.1, rotate: 5 },
                        }),
                        (0, N.jsxs)("div", {
                          className: "summary-info",
                          children: [
                            (0, N.jsx)("h2", { children: a.name }),
                            (0, N.jsx)("p", {
                              className: "bio",
                              children: a.bio,
                            }),
                            (0, N.jsxs)("div", {
                              className: "profile-stats",
                              children: [
                                (0, N.jsxs)("div", {
                                  children: [
                                    (0, N.jsx)("strong", {
                                      children: B
                                        ? (0, N.jsx)(v.Ay, {
                                            end: a.followers,
                                            duration: 2,
                                          })
                                        : a.followers,
                                    }),
                                    (0, N.jsx)("span", {
                                      children: "Followers",
                                    }),
                                  ],
                                }),
                                (0, N.jsxs)("div", {
                                  children: [
                                    (0, N.jsx)("strong", {
                                      children: B
                                        ? (0, N.jsx)(v.Ay, {
                                            end: a.following,
                                            duration: 2,
                                          })
                                        : a.following,
                                    }),
                                    (0, N.jsx)("span", {
                                      children: "Following",
                                    }),
                                  ],
                                }),
                                (0, N.jsxs)("div", {
                                  children: [
                                    (0, N.jsx)("strong", {
                                      children: B
                                        ? (0, N.jsx)(v.Ay, {
                                            end:
                                              (null === W || void 0 === W
                                                ? void 0
                                                : W.totalContributions) || 0,
                                            duration: 2,
                                          })
                                        : (null === W || void 0 === W
                                            ? void 0
                                            : W.totalContributions) || 0,
                                    }),
                                    (0, N.jsx)("span", {
                                      children: "Contributions",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, N.jsxs)(l.P.a, {
                              href: a.html_url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "github-link",
                              whileHover: { scale: 1.05 },
                              whileTap: { scale: 0.95 },
                              children: [
                                (0, N.jsx)(j.hL4, {}),
                                " View Full Profile",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              ],
            });
      };
      function C(e) {
        let { theme: t } = e;
        const [a, o] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            const e = () => {
              window.scrollY > 300 ? o(!0) : o(!1);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, N.jsx)(N.Fragment, {
            children:
              a &&
              (0, N.jsx)("div", {
                onClick: () => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                },
                className: "top-btn-position top-btn-style ".concat(
                  a ? "visible" : ""
                ),
                style: {
                  backgroundColor: t.text,
                  color: t.body,
                  border: "1px solid ".concat(t.text),
                },
                title: "Go up",
                role: "button",
                "aria-label": "Go to top",
                tabIndex: 0,
                children: (0, N.jsx)("i", {
                  className: "fas fa-arrow-up",
                  "aria-hidden": "true",
                }),
              }),
          })
        );
      }
      const w = function (e) {
        return (0, N.jsxs)("div", {
          className: "github-page-main",
          children: [
            (0, N.jsx)(o.A, { theme: e.theme, setTheme: e.setTheme }),
            (0, N.jsx)("div", {
              className: "github-page-body",
              children: (0, N.jsx)(f, { theme: e.theme, setTheme: e.setTheme }),
            }),
            (0, N.jsx)(i.A, { theme: e.theme }),
            (0, N.jsx)(C, { theme: e.theme }),
          ],
        });
      };
    },
    3565: (e, t, a) => {
      a.d(t, { A: () => u });
      var s = a(5043),
        o = a(1688),
        i = a(2582),
        n = a(468),
        l = a(162),
        r = a(3751),
        c = a(6166),
        d = a(579);
      const u = (e) => {
        const [t, a] = (0, s.useState)(!1),
          [u, h] = (0, s.useState)(window.innerWidth <= 768),
          [m, x] = (0, s.useState)(!1),
          [p, v] = (0, s.useState)(!1),
          g = (0, o.zy)(),
          j = (e) => {
            const t = g.pathname.replace(/^\//, "");
            return t === e.replace(/^\//, "") || ("" === t && "/home" === e);
          };
        (0, s.useEffect)(() => {
          let e = window.scrollY,
            t = !1,
            a = null;
          const s = () => {
            (e = window.scrollY),
              t ||
                (window.requestAnimationFrame(() => {
                  x(e > 50),
                    Math.abs(e % 100) < 5 &&
                      (v(!0),
                      clearTimeout(a),
                      (a = setTimeout(() => {
                        v(!1);
                      }, 600))),
                    (t = !1);
                }),
                (t = !0));
          };
          return (
            window.addEventListener("scroll", s, { passive: !0 }),
            () => {
              window.removeEventListener("scroll", s), clearTimeout(a);
            }
          );
        }, []),
          (0, s.useEffect)(() => {
            const e = () => {
              h(window.innerWidth <= 768), window.innerWidth > 768 && a(!1);
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, s.useEffect)(() => {
            a(!1);
          }, [g]);
        const y =
          "dark" === e.theme.name
            ? (0, d.jsx)(r.Zt5, {
                strokeWidth: 1,
                size: 20,
                color: "light" === e.theme.name ? "#F9D784" : "#A7A7A7",
              })
            : (0, d.jsx)(l.XM6, {
                strokeWidth: 1,
                size: 20,
                color: "light" === e.theme.name ? "#F9D784" : "#A7A7A7",
              });
        return (0, d.jsxs)("div", {
          className: "header-container",
          children: [
            t &&
              (0, d.jsx)("div", {
                className: "menu-overlay ".concat(t ? "active" : ""),
                onClick: () => a(!1),
              }),
            (0, d.jsxs)("header", {
              className: "header "
                .concat(m ? "scrolled" : "", " ")
                .concat(p ? "pulse" : ""),
              children: [
                (0, d.jsx)(i.N_, {
                  to: "/home",
                  className: "logo",
                  children: (0, d.jsx)("span", {
                    className: "logo-name",
                    style: { color: e.theme.text },
                    children: n.O$.logo_name,
                  }),
                }),
                u &&
                  (0, d.jsxs)("div", {
                    className: "menu-icon ".concat(t ? "open" : ""),
                    onClick: () => {
                      a(!t);
                    },
                    style: { color: e.theme.text },
                    children: [
                      (0, d.jsx)("span", {
                        style: { backgroundColor: e.theme.text },
                      }),
                      (0, d.jsx)("span", {
                        style: { backgroundColor: e.theme.text },
                      }),
                      (0, d.jsx)("span", {
                        style: { backgroundColor: e.theme.text },
                      }),
                    ],
                  }),
                (0, d.jsxs)("nav", {
                  className: "menu ".concat(t ? "open" : ""),
                  children: [
                    (0, d.jsx)(i.N_, {
                      to: "/home",
                      className: "homei ".concat(j("/home") ? "active" : ""),
                      style: { color: e.theme.text },
                      onClick: () => a(!1),
                      children: "Home",
                    }),
                    (0, d.jsx)(i.N_, {
                      to: "/education",
                      className: "ec ".concat(j("/education") ? "active" : ""),
                      style: { color: e.theme.text },
                      onClick: () => a(!1),
                      children: "Education",
                    }),
                    (0, d.jsx)(i.N_, {
                      to: "/experience",
                      className: "xp ".concat(j("/experience") ? "active" : ""),
                      style: { color: e.theme.text },
                      onClick: () => a(!1),
                      children: "Experience",
                    }),
                    (0, d.jsx)(i.N_, {
                      to: "/projects",
                      className: "projects ".concat(
                        j("/projects") ? "active" : ""
                      ),
                      style: { color: e.theme.text },
                      onClick: () => a(!1),
                      children: "Projects",
                    }),
                    (0, d.jsx)(i.N_, {
                      to: "/contact",
                      className: "cr ".concat(j("/contact") ? "active" : ""),
                      style: { color: e.theme.text },
                      onClick: () => a(!1),
                      children: "Contact",
                    }),
                    (0, d.jsx)(i.N_, {
                      to: "/myspace",
                      className: "myspace ".concat(
                        j("/myspace") ? "active" : ""
                      ),
                      style: { color: e.theme.text },
                      onClick: () => a(!1),
                      children: "AI Space",
                    }),
                    (0, d.jsxs)("div", {
                      className: "header-actions",
                      children: [
                        (0, d.jsx)("button", {
                          className: "theme-toggle-btn",
                          onClick: function () {
                            "light" === e.theme.name
                              ? (e.setTheme("dark"),
                                localStorage.setItem("theme", "dark"))
                              : (e.setTheme("light"),
                                localStorage.setItem("theme", "light"));
                          },
                          children: y,
                        }),
                        (0, d.jsx)(c.A, { theme: e.theme }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    6166: (e, t, a) => {
      a.d(t, { A: () => l });
      var s = a(5043),
        o = a(2582),
        i = a(8729),
        n = a(579);
      const l = (e) => {
        var t, a, l;
        let { theme: r } = e;
        const { user: c, isAdmin: d, loginWithGoogle: u, logout: h } = (0,
          i.As)(),
          [m, x] = (0, s.useState)(!1),
          [p, v] = (0, s.useState)(!1),
          [g, j] = (0, s.useState)(!1),
          [y, b] = (0, s.useState)([]),
          [N, f] = (0, s.useState)({ x: 0, y: 0 }),
          [C, w] = (0, s.useState)([]),
          A = (0, s.useRef)(null),
          k = (0, s.useRef)(null),
          _ =
            (null === r || void 0 === r || null === (t = r.body) || void 0 === t
              ? void 0
              : t.toLowerCase().includes("#0")) ||
            (null === r || void 0 === r || null === (a = r.body) || void 0 === a
              ? void 0
              : a.toLowerCase().includes("#1")) ||
            (null === r || void 0 === r || null === (l = r.body) || void 0 === l
              ? void 0
              : l.toLowerCase().includes("black")) ||
            "#FFFFFF" === (null === r || void 0 === r ? void 0 : r.text);
        (0, s.useEffect)(() => {
          const e = (e) => {
            k.current && !k.current.contains(e.target) && x(!1);
          };
          return (
            document.addEventListener("mousedown", e),
            () => document.removeEventListener("mousedown", e)
          );
        }, []);
        const S = (0, s.useCallback)(
            (e) => {
              if (!A.current || !g) return;
              const t = A.current.getBoundingClientRect(),
                a = e.clientX - t.left - t.width / 2,
                s = e.clientY - t.top - t.height / 2;
              f({ x: 0.15 * a, y: 0.15 * s });
            },
            [g]
          ),
          E = async () => {
            await h(), x(!1);
          };
        return c
          ? (0, n.jsxs)("div", {
              className: "login-container",
              ref: k,
              style: { display: "flex", alignItems: "center", gap: "15px" },
              children: [
                (0, n.jsxs)("div", {
                  className: "user-avatar-wrapper ".concat(
                    d ? "admin-glow" : ""
                  ),
                  onClick: () => x(!m),
                  children: [
                    (0, n.jsx)("div", { className: "avatar-ring" }),
                    (0, n.jsx)("div", {
                      className: "user-avatar",
                      children: (0, n.jsx)("img", {
                        src: c.photoURL,
                        alt: "User",
                      }),
                    }),
                    d &&
                      (0, n.jsx)("span", {
                        className: "admin-badge",
                        children: (0, n.jsx)("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: (0, n.jsx)("path", {
                            d:
                              "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
                          }),
                        }),
                      }),
                    (0, n.jsx)("div", { className: "online-indicator" }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "user-dropdown "
                    .concat(m ? "show" : "", " ")
                    .concat(_ ? "dropdown-dark" : "dropdown-light"),
                  children: [
                    (0, n.jsx)("div", { className: "dropdown-backdrop" }),
                    (0, n.jsxs)("div", {
                      className: "user-header",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "header-avatar",
                          children: [
                            (0, n.jsx)("img", {
                              src: c.photoURL,
                              alt: "Avatar",
                            }),
                            (0, n.jsx)("div", { className: "avatar-shine" }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "user-info",
                          children: [
                            (0, n.jsx)("p", {
                              className: "user-name",
                              children: c.displayName,
                            }),
                            (0, n.jsx)("p", {
                              className: "user-email",
                              children: c.email,
                            }),
                            d &&
                              (0, n.jsx)("span", {
                                className: "role-badge",
                                children: "Admin",
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", { className: "dropdown-divider" }),
                    (0, n.jsxs)("div", {
                      className: "dropdown-menu",
                      children: [
                        c &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsxs)(o.N_, {
                                to: "/myspace",
                                className: "dropdown-item myspace-link",
                                style: {
                                  color: r.text,
                                  textDecoration: "none",
                                },
                                onClick: () => x(!1),
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "item-icon",
                                    children: "\ud83c\udfe0",
                                  }),
                                  (0, n.jsx)("span", { children: "My Space" }),
                                  (0, n.jsx)("div", {
                                    className: "item-arrow",
                                    children: "\u2192",
                                  }),
                                ],
                              }),
                              d &&
                                (0, n.jsxs)(o.N_, {
                                  to: "/admin",
                                  className: "dropdown-item admin-link",
                                  style: {
                                    color: r.text,
                                    textDecoration: "none",
                                  },
                                  onClick: () => x(!1),
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: "item-icon",
                                      children: "\u2699\ufe0f",
                                    }),
                                    (0, n.jsx)("span", {
                                      style: { color: "#10b981" },
                                      children: "Admin Dashboard",
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "item-arrow",
                                      children: "\u2192",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        (0, n.jsxs)("button", {
                          className: "dropdown-item logout-item",
                          onClick: E,
                          children: [
                            (0, n.jsx)("div", {
                              className: "item-icon logout-icon",
                              children: (0, n.jsxs)("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                  (0, n.jsx)("path", {
                                    d:
                                      "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
                                  }),
                                  (0, n.jsx)("polyline", {
                                    points: "16,17 21,12 16,7",
                                  }),
                                  (0, n.jsx)("line", {
                                    x1: "21",
                                    y1: "12",
                                    x2: "9",
                                    y2: "12",
                                  }),
                                ],
                              }),
                            }),
                            (0, n.jsx)("span", { children: "Sign Out" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : (0, n.jsxs)("div", {
              className: "google-btn-container",
              children: [
                C.map((e) =>
                  (0, n.jsx)(
                    "div",
                    {
                      className: "particle",
                      style: {
                        "--angle": "".concat(e.angle, "deg"),
                        "--color": e.color,
                      },
                    },
                    e.id
                  )
                ),
                (0, n.jsxs)("button", {
                  ref: A,
                  className: "google-login-btn "
                    .concat(p ? "loading" : "", " ")
                    .concat(_ ? "btn-dark" : "btn-light"),
                  onClick: async (e) => {
                    ((e) => {
                      const t = A.current;
                      if (!t) return;
                      const a = t.getBoundingClientRect(),
                        s = e.clientX - a.left,
                        o = e.clientY - a.top,
                        i = { id: Date.now(), x: s, y: o };
                      b((e) => [...e, i]),
                        setTimeout(() => {
                          b((e) => e.filter((e) => e.id !== i.id));
                        }, 800);
                    })(e),
                      v(!0);
                    try {
                      await u(),
                        (() => {
                          const e = Array.from({ length: 12 }, (e, t) => ({
                            id: Date.now() + t,
                            angle: 30 * t,
                            color: ["#4285F4", "#34A853", "#FBBC05", "#EA4335"][
                              t % 4
                            ],
                          }));
                          w(e), setTimeout(() => w([]), 1e3);
                        })();
                    } catch (t) {
                      console.error("Login failed", t);
                    } finally {
                      v(!1);
                    }
                  },
                  onMouseEnter: () => j(!0),
                  onMouseLeave: () => {
                    j(!1), f({ x: 0, y: 0 });
                  },
                  onMouseMove: S,
                  disabled: p,
                  style: {
                    transform: "translate("
                      .concat(N.x, "px, ")
                      .concat(N.y, "px)"),
                  },
                  children: [
                    (0, n.jsx)("div", { className: "btn-border" }),
                    (0, n.jsx)("div", { className: "btn-glow" }),
                    (0, n.jsx)("div", { className: "btn-shine" }),
                    y.map((e) =>
                      (0, n.jsx)(
                        "span",
                        { className: "ripple", style: { left: e.x, top: e.y } },
                        e.id
                      )
                    ),
                    (0, n.jsx)("div", {
                      className: "btn-content",
                      children: p
                        ? (0, n.jsxs)("div", {
                            className: "loading-spinner",
                            children: [
                              (0, n.jsx)("div", { className: "spinner-ring" }),
                              (0, n.jsxs)("div", {
                                className: "spinner-dots",
                                children: [
                                  (0, n.jsx)("span", {
                                    style: { "--i": 0, background: "#4285F4" },
                                  }),
                                  (0, n.jsx)("span", {
                                    style: { "--i": 1, background: "#34A853" },
                                  }),
                                  (0, n.jsx)("span", {
                                    style: { "--i": 2, background: "#FBBC05" },
                                  }),
                                  (0, n.jsx)("span", {
                                    style: { "--i": 3, background: "#EA4335" },
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("div", {
                                className: "google-icon-wrapper",
                                children: (0, n.jsxs)("svg", {
                                  className: "google-icon",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    (0, n.jsx)("path", {
                                      className: "google-path blue",
                                      d:
                                        "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                      fill: "#4285F4",
                                    }),
                                    (0, n.jsx)("path", {
                                      className: "google-path green",
                                      d:
                                        "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                      fill: "#34A853",
                                    }),
                                    (0, n.jsx)("path", {
                                      className: "google-path yellow",
                                      d:
                                        "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                      fill: "#FBBC05",
                                    }),
                                    (0, n.jsx)("path", {
                                      className: "google-path red",
                                      d:
                                        "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                      fill: "#EA4335",
                                    }),
                                  ],
                                }),
                              }),
                              (0, n.jsx)("span", {
                                className: "btn-text",
                                children: (0, n.jsx)("span", {
                                  className: "text-slide",
                                  children: "Sign in",
                                }),
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            });
      };
    },
    7473: (e, t, a) => {
      a.d(t, { A: () => n });
      a(5043);
      var s = a(2919),
        o = a(468),
        i = a(579);
      function n(e) {
        return (0, i.jsx)("div", {
          className: "footer-div",
          children: (0, i.jsx)(s.zW, {
            children: (0, i.jsxs)("p", {
              className: "footer-text",
              style: { color: e.theme.secondaryText },
              children: [
                "Made with ",
                (0, i.jsx)("span", { role: "img", children: "\u2764\ufe0f" }),
                " by ",
                o.O$.title2,
                ".",
              ],
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=896.55df2290.chunk.js.map
