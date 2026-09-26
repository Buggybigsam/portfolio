"use client";

import { useEffect, useState } from "react";

interface RepoItem {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
}

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  "C#": "#178600",
  Java: "#b07219",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
};

const FALLBACK_REPOS: RepoItem[] = [
  {
    id: 1,
    name: "CraftConnect",
    description: "A smart booking platform for local Artisans and customers.",
    html_url: "https://github.com/Buggybigsam/CraftConnect",
    language: "TypeScript",
    stargazers_count: 5,
    forks_count: 1,
    pushed_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 2,
    name: "Apartment-Booking-Platform",
    description: "Booking platform for apartment owners and clients.",
    html_url: "https://github.com/Buggybigsam/Apartment-Booking-Platform",
    language: "TypeScript",
    stargazers_count: 4,
    forks_count: 1,
    pushed_at: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
  {
    id: 3,
    name: "Smart-Booking-System-for-local-Artisans-",
    description: "Capstone project smart booking management system for local Ghanaian artisans and clients.",
    html_url: "https://github.com/Buggybigsam/Smart-Booking-System-for-local-Artisans-",
    language: "TypeScript",
    stargazers_count: 6,
    forks_count: 2,
    pushed_at: new Date(Date.now() - 86400000 * 6).toISOString(),
  },
  {
    id: 4,
    name: "nova-stitch-studio",
    description: "Modern web studio platform for custom fashion, tailoring, and creative apparel.",
    html_url: "https://github.com/Buggybigsam/nova-stitch-studio",
    language: "TypeScript",
    stargazers_count: 3,
    forks_count: 1,
    pushed_at: new Date(Date.now() - 86400000 * 10).toISOString(),
  },
  {
    id: 5,
    name: "Smart-Booking-system",
    description: "Automated booking and scheduling management system.",
    html_url: "https://github.com/Buggybigsam/Smart-Booking-system",
    language: "TypeScript",
    stargazers_count: 3,
    forks_count: 1,
    pushed_at: new Date(Date.now() - 86400000 * 14).toISOString(),
  },
  {
    id: 6,
    name: "test",
    description: "Developer testbed and experimental interactive components.",
    html_url: "https://github.com/Buggybigsam/test",
    language: "TypeScript",
    stargazers_count: 2,
    forks_count: 1,
    pushed_at: new Date(Date.now() - 86400000 * 20).toISOString(),
  },
];

export default function GitHubRepos() {
  const [repos, setRepos] = useState<RepoItem[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);

  const timeAgo = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / 86400000);
    if (days <= 0) return "today";
    if (days === 1) return "1 day ago";
    if (days < 30) return `${days} days ago`;
    if (days < 365) return `${Math.floor(days / 30)} mo ago`;
    return `${Math.floor(days / 365)}y ago`;
  };

  useEffect(() => {
    fetch("https://api.github.com/users/Buggybigsam/repos?sort=pushed&per_page=100&type=public")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const filtered = data
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .filter((r: any) => !r.fork)
            .slice(0, 6);
          if (filtered.length > 0) {
            setRepos(filtered);
          }
        }
      })
      .catch(() => {
        // Keeps fallback repos
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="github" className="panel github-repos">
      <div className="section__header">
        <p className="section__eyebrow">Open Source</p>
        <h2 className="section__title">Code in the wild.</h2>
      </div>
      <p className="section__sub">Live from my GitHub — updated automatically.</p>

      <div className="repos__grid" id="repos-grid" aria-live="polite">
        {loading && (
          <div className="repos__loading" id="repos-loading">
            <span className="repos__spinner"></span> Fetching repositories…
          </div>
        )}

        {repos.map((repo) => {
          const color = (repo.language && LANG_COLORS[repo.language]) || "#8b949e";
          return (
            <a
              key={repo.id}
              className="repo-card"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repo: ${repo.name}`}
            >
              <div className="repo-card__name">
                <i className="bx bx-git-repo-forked"></i>
                {repo.name}
              </div>
              <p className="repo-card__desc">
                {repo.description || "No description provided."}
              </p>
              <div className="repo-card__meta">
                {repo.language && (
                  <span>
                    <span
                      className="repo-card__lang-dot"
                      style={{ background: color }}
                    ></span>
                    {repo.language}
                  </span>
                )}
                <span>
                  <i className="bx bx-star"></i> {repo.stargazers_count}
                </span>
                <span>
                  <i className="bx bx-git-branch"></i> {repo.forks_count}
                </span>
                <span>Updated {timeAgo(repo.pushed_at)}</span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="repos__footer">
        <a
          className="button button--ghost"
          href="https://github.com/Buggybigsam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i> View all on GitHub ↗
        </a>
      </div>
    </section>
  );
}
