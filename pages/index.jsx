import Hero from "../components/sections/index/hero";
import Looking from "../components/sections/index/looking";
import About from "../components/sections/index/about";
import Technical from "../components/sections/index/technical";
import Career from "../components/sections/index/career";
import FeaturedProjects from "../components/sections/projects/featured";
import GitProjects from "../components/sections/projects/recent";
import RecentArticles from "../components/sections/articles/recent";

import Color from "../components/utils/page.colors.util";
import settings from "../content/_settings.json";

import colors from "../content/index/_colors.json";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

export async function getStaticProps() {
  try {
    // Medium makaleleri için
    const mediumUsername = "cangurel.dev";
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
    );

    if (!response.ok) {
      throw new Error(`Medium API error: ${response.statusText}`);
    }

    const mediumArticles = await response.json();
    console.log("Medium Articles:", mediumArticles);

    // GitHub kullanıcı bilgileri için
    const githubUsername = "ahmetcangurel";
    const userResponse = await fetch(
      `https://api.github.com/users/${githubUsername}`
    );

    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.statusText}`);
    }

    const userData = await userResponse.json();

    // GitHub projeleri için
    const githubResponse = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc&per_page=6`
    );

    if (!githubResponse.ok) {
      throw new Error(`GitHub API error: ${githubResponse.statusText}`);
    }

    const githubProjects = await githubResponse.json();

    return {
      props: {
        mediumArticles: mediumArticles || { items: [] },
        githubProjects: Array.isArray(githubProjects) ? githubProjects : [],
        githubUser: userData || {},
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        mediumArticles: { items: [] },
        githubProjects: [],
        githubUser: {
          avatar_url: "https://avatars.githubusercontent.com/u/91556629?v=4",
          name: "Can Gürel",
          html_url: "https://github.com/ahmetcangurel",
        },
      },
      revalidate: 3600,
    };
  }
}

export default function HomePage({
  mediumArticles,
  githubProjects,
  githubUser,
}) {
  return (
    <>
      <Navbar />
      <Color colors={colors} />
      <Hero />
      {/* <Looking /> */}
      {/* <FeaturedProjects /> */}
      <About />
      <RecentArticles mediumArticles={mediumArticles} />
      <GitProjects repos={githubProjects} user={[githubUser]} />
      {/* <Technical /> */}
      {/* <Career /> */}
      <Footer />
    </>
  );
}
