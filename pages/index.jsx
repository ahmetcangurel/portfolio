import Hero from "../components/sections/index/hero";
import Looking from "../components/sections/index/looking";
import About from "../components/sections/index/about";
import Technical from "../components/sections/index/technical";
import Career from "../components/sections/index/career";
import FeaturedProjects from "../components/sections/projects/featured";
import RecentArticles from "../components/sections/articles/recent";

import Color from "../components/utils/page.colors.util";

import colors from "../content/index/_colors.json";

export async function getStaticProps() {
  const mediumUsername = "cangurel.dev"; // Medium kullanıcı adınızı buraya yazın
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
  );
  const mediumArticles = await response.json();

  return {
    props: {
      mediumArticles,
    },
    revalidate: 3600, // Her saat başı yeniden oluştur
  };
}

export default function HomePage({ mediumArticles }) {
  return (
    <>
      <Color colors={colors} />
      <Hero />
      {/* <Looking /> */}
      {/* <FeaturedProjects /> */}
      <About />
      <RecentArticles mediumArticles={mediumArticles} />
      {/* <Technical /> */}
      {/* <Career /> */}
    </>
  );
}
