import { useEffect, useState } from 'react';

import GitRecentProjects from '../../components/sections/projects/recent';
import OtherProjects from '../../components/sections/projects/others';
import Color from '../../components/utils/page.colors.util';

import settings from '../../content/_settings.json';
import colors from '../../content/projects/_colors.json';

export default function Projects() {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadGitHub() {
      try {
        setLoading(true);

        const [gitUserRes, gitReposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${settings.username.github}`),
          fetch(`https://api.github.com/users/${settings.username.github}/repos`),
        ]);

        const userData = await gitUserRes.json();
        const reposData = await gitReposRes.json();

        if (!isMounted) return;

        const cleanedUser = userData?.login
          ? [{
              login: userData.login,
              name: userData.name,
              avatar_url: userData.avatar_url,
              html_url: userData.html_url,
            }]
          : [];

        let cleanedRepos = Array.isArray(reposData)
          ? reposData.map((repo) => {
              const timestamp = Math.floor(new Date(repo.pushed_at) / 1000);

              return {
                name: repo.name,
                fork: repo.fork,
                description: repo.description,
                forks_count: repo.forks_count,
                html_url: repo.html_url,
                language: repo.language,
                watchers: repo.watchers,
                default_branch: repo.default_branch,
                homepage: repo.homepage,
                timestamp,
                topics: repo.topics || [],
                pushed_at: repo.pushed_at,
              };
            })
          : [];

        cleanedRepos.sort((a, b) => b.timestamp - a.timestamp);

        cleanedRepos = cleanedRepos.filter((e, i) => {
          if (i < 8 && !e.topics.includes('github-config')) return true;
          return false;
        });

        setUser(cleanedUser);
        setRepos(cleanedRepos);
      } catch (err) {
        console.error('GitHub fetch failed:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadGitHub();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Color colors={colors} />

      <OtherProjects />

      {/* instant render, no blocking */}
      <GitRecentProjects
        user={user}
        repos={repos}
        loading={loading}
      />
    </>
  );
}