// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

import Image from "next/image";

import Icon from "../../utils/icon.util";

import css from "../../../styles/sections/projects/recent.module.scss";

export default function GitProjects({ repos = [], user = [{}] }) {
  const avatarUrl = user[0]?.avatar_url || "/img/github-default.png";
  const userName = user[0]?.name || "GitHub User";
  const userUrl = user[0]?.html_url || "https://github.com";

  return (
    <Section classProp={css.section}>
      <Container classProp={css.container} spacing={"verticalXXXLrg"}>
        <h3>Recent Projects</h3>
        <section className={css.profile}>
          <Image
            className={css.profilePhoto}
            src={avatarUrl}
            alt="Github Profile Photo"
            height={60}
            width={60}
          />
          <span className={css.details}>
            <p>{userName}</p>
            <a href={userUrl} rel="noreferrer" target="_blank">
              {userUrl} <Icon icon={["far", "arrow-up-right-from-square"]} />
            </a>
          </span>
        </section>
        <div className={css.projects}>
          {Array.isArray(repos) &&
            repos.map(
              (
                {
                  name = "",
                  description = "",
                  topics = [],
                  forks_count = 0,
                  html_url = "",
                  language = "",
                  watchers = 0,
                  homepage = "",
                  pushed_at = "",
                },
                index
              ) => {
                const date = pushed_at
                  ? new Date(pushed_at).toDateString()
                  : "";
                return (
                  <article key={index} className={css.project}>
                    <span className={css.header}>
                      <a href={html_url} rel="noreferrer" target="_blank">
                        {name}{" "}
                        <Icon icon={["fad", "arrow-up-right-from-square"]} />
                      </a>
                      {homepage && <p className={css.homepage}>{homepage}</p>}
                    </span>
                    {description && (
                      <span className={css.descriptionContainer}>
                        <p className={css.description}>{description}</p>
                      </span>
                    )}
                    <span className={css.details}>
                      {language && (
                        <p>
                          <i
                            className={`devicon-${language.toLowerCase()}-plain colored`}
                          />{" "}
                          {language}
                        </p>
                      )}
                      <p>
                        <Icon icon={["fad", "star"]} /> {watchers}
                      </p>
                      <p>
                        <Icon icon={["fad", "code-branch"]} /> {forks_count}
                      </p>
                      {date && <p className={css.pushedAt}>{date}</p>}
                    </span>
                    {topics.length > 0 && (
                      <span className={css.topicsContainer}>
                        {topics.map((e, index) => (
                          <span key={index} className={css.topics}>
                            <i className="devicon-github-plain" /> {e}
                          </span>
                        ))}
                      </span>
                    )}
                  </article>
                );
              }
            )}
        </div>
        {/*
				<pre>{ JSON.stringify(user, undefined, 2) }</pre>
				<pre>{ JSON.stringify(repos, undefined, 2) }</pre>
				*/}
      </Container>
    </Section>
  );
}
