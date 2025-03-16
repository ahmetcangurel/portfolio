// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="With expertise in React Native, full-stack development, system architecture, and branding, I am a versatile software developer and consultant dedicated to creating high-quality digital experiences."
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src="/img/can_profile.jpg" alt="Nelson family photo" />
            {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Softskills That Drive Success"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="Beyond my technical expertise in React Native and full-stack development, I have strong leadership, time management, and problem-solving skills—sharpened through my experience as a consultant, entrepreneur, and open-source contributor. Outside of work, I enjoy staying active and continuously exploring new technologies. I am confident in my ability to bring innovation and value to any project."
            />
            <BadgesBlock
              title="Reasearch and planning"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "React Native Development", type: "fad" },
  { key: "qrcode", name: "Full-Stack Development", type: "fad" },
  { key: "window", name: "System Architecture", type: "far" },
  { key: "cubes", name: "Consulting & Strategy", type: "fad" },
  { key: "layer-plus", name: "Open-Source Contribution", type: "fad" },
  { key: "solar-system", name: "App Development", type: "fad" },
];
