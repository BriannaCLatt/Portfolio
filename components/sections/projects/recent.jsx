// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

import Image from 'next/image';
import Icon from '../../utils/icon.util';

import css from '../../../styles/sections/projects/recent.module.scss';

export default function GitProjects({ repos = [], user = [] }) {
  const profile = user?.[0];

  return (
    <Section classProp={css.section}>
      <Container classProp={css.container} spacing={'verticalXXXLrg'}>

        <h3>Recent Projects</h3>

        {/* PROFILE */}
        {profile && (
          <section className={css.profile}>
            <Image
              className={css.profilePhoto}
              src={profile.avatar_url || '/img/fallback.png'}
              alt="Github Profile Photo"
              height={60}
              width={60}
            />

            <span className={css.details}>
              <p>{profile.name || 'Unknown user'}</p>

              <a
                href={profile.html_url}
                rel="noreferrer"
                target="_blank"
              >
                {profile.html_url}
                <Icon icon={['far', 'arrow-up-right-from-square']} />
              </a>
            </span>
          </section>
        )}

        {/* PROJECTS */}
        <div className={css.projects}>
          {repos?.length > 0 &&
            repos.map(
              (
                {
                  name,
                  description,
                  topics = [],
                  forks_count,
                  html_url,
                  language,
                  watchers,
                  homepage,
                  pushed_at,
                },
                index
              ) => {
                const date = pushed_at
                  ? new Date(pushed_at).toDateString()
                  : 'Unknown date';

                return (
                  <article key={index} className={css.project}>
                    <span className={css.header}>
                      <a href={html_url} rel="noreferrer" target="_blank">
                        {name}
                        <Icon icon={['fad', 'arrow-up-right-from-square']} />
                      </a>

                      {homepage && (
                        <p className={css.homepage}>{homepage}</p>
                      )}
                    </span>

                    <span className={css.descriptionContainer}>
                      <p className={css.description}>
                        {description || 'No description provided.'}
                      </p>
                    </span>

                    <span className={css.details}>
                      <p>
                        {language && (
                          <>
                            <i
                              className={`devicon-${language.toLowerCase()}-plain colored`}
                            />{' '}
                            {language}
                          </>
                        )}
                      </p>

                      <p>
                        <Icon icon={['fad', 'star']} /> {watchers || 0}
                      </p>

                      <p>
                        <Icon icon={['fad', 'code-branch']} /> {forks_count || 0}
                      </p>

                      <p className={css.pushedAt}>{date}</p>
                    </span>

                    <span className={css.topicsContainer}>
                      {topics.map((topic, i) => (
                        <span key={i} className={css.topics}>
                          <i className="devicon-github-plain"></i> {topic}
                        </span>
                      ))}
                    </span>
                  </article>
                );
              }
            )}
        </div>

      </Container>
    </Section>
  );
}