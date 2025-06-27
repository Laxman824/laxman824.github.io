require("dotenv").config();
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: "Laxman824",
};

const query_pr = {
  query: `
    query {
      user(login: "${openSource.githubUserName}") {
        pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          totalCount
          nodes {
            id
            title
            url
            state
            mergedBy {
              avatarUrl
              url
              login
            }
            createdAt
            number
            changedFiles
            additions
            deletions
            baseRepository {
              name
              url
              owner {
                avatarUrl
                login
                url
              }
            }
          }
        }
      }
    }
  `,
};

const query_issue = {
  query: `
    query {
      user(login: "${openSource.githubUserName}") {
        issues(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          totalCount
          nodes {
            id
            title
            url
            state
            createdAt
            number
            repository {
              name
              url
              owner {
                login
                avatarUrl
                url
              }
            }
          }
        }
      }
    }
  `,
};

const query_org = {
  query: `
    query {
      user(login: "${openSource.githubUserName}") {
        repositoriesContributedTo(last: 100) {
          totalCount
          nodes {
            id
            name
            url
            owner {
              login
              avatarUrl
              url
            }
          }
        }
      }
    }
  `,
};

const query_pinned = {
  query: `
    query { 
      user(login: "${openSource.githubUserName}") { 
        pinnedItems(first: 6, types: REPOSITORY) {
          totalCount
          nodes {
            ... on Repository {
              id
              name
              url
              description
              primaryLanguage {
                name
                color
              }
              owner {
                login
                avatarUrl
                url
              }
              stargazers {
                totalCount
              }
              forkCount
            }
          }
        }
      }
    }
  `,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: `bearer ${openSource.githubConvertedToken}`,
};

const fetchGitHubData = async () => {
  if (!openSource.githubConvertedToken) {
    console.error(
      "Error: GitHub token not found. Please add your token to .env file"
    );
    process.exit(1);
  }

  console.log("Fetching GitHub data...");

  try {
    const responses = await Promise.all([
      fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(query_pr),
      }),
      fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(query_issue),
      }),
      fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(query_org),
      }),
      fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(query_pinned),
      }),
    ]);

    const [prData, issueData, orgData, pinnedData] = await Promise.all(
      responses.map((response) => response.json())
    );

    const outputDir = path.join(__dirname, "src", "shared", "opensource");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(outputDir, "pull_requests.json"),
      JSON.stringify(prData, null, 2)
    );
    fs.writeFileSync(
      path.join(outputDir, "issues.json"),
      JSON.stringify(issueData, null, 2)
    );
    fs.writeFileSync(
      path.join(outputDir, "organizations.json"),
      JSON.stringify(orgData, null, 2)
    );
    fs.writeFileSync(
      path.join(outputDir, "pinned_projects.json"),
      JSON.stringify(pinnedData, null, 2)
    );

    console.log("GitHub data fetched and saved successfully!");
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    process.exit(1);
  }
};

fetchGitHubData();
