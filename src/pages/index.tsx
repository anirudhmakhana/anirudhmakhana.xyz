import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Contact from "@/components/Contact";
import Card from "@/components/Card";
import SkillCard from "@/components/Skillcard";

import skills from "../data/skills.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
  return (
    <>
      <div id="home" className="p-7 md:p-5" />
      <header>
        <h1 className="text-center ml-3 mr-3 mt-12 text-4xl font-extrabold tracking-tight text-white m-auto">
          <span className="block bg-gradient-to-r from-sky-500 via-purple-700 to-pink-400 bg-clip-text text-6xl md:text-8xl text-transparent">
            Hi, I&apos;m Anirudh Makhana
          </span>
          <span className="block mt-3 text-4xl md:text-6xl text-slate-100">
            Software Engineer
          </span>
        </h1>
        <div className="flex flex-row items-center justify-center mt-1 space-x-4">
          <Link
            href="https://github.com/anirudhmakhana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="hover:bg-gray-800 py-2 pl-3 pr-3 pb-2"
              size="3x"
              color="white"
              icon={faGithub}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anirudh-m-678284170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="hover:bg-gray-800 py-2 pl-3 pr-3 pb-2"
              size="3x"
              color="white"
              icon={faLinkedin}
            />
          </Link>
          <Link href="mailto:makhana.anirudh@gmail.com">
            <FontAwesomeIcon
              className="hover:bg-gray-800 py-2 pl-3 pr-3 pb-2"
              size="3x"
              color="white"
              icon={faEnvelope}
            />
          </Link>
        </div>
      </header>
      <main>
        <div id="about" className="p-7" />
        <h1 className="block mt-12 text-3xl md:text-5xl text-slate-100 text-center font-extrabold">
          About me
        </h1>

        <section>
          <div className="flex text-l md:text-xl flex-col items-center justify-center mt-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-center w-1/3 text-slate-200 font-semibold">
                I&apos;m a software engineer with a passion for collaboration
                and learning. I&apos;m an avid photographer, cinematographer,
                reader, and love to play basketball.
              </p>
              <p className="text-center w-1/3 text-slate-200 font-semibold">
                I&apos;m currently working at:{" "}
                <Link
                  href="https://www.defiblue.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
                    DeFi Blue
                  </span>
                </Link>{" "}
                as Junior Software Engineer.
              </p>
              <p className="text-sm text-center w-1/3 text-slate-100 font-semibold">
                Previously: LINE Corp. (Thailand), Advanced Info Services
                (Thailand)
              </p>
            </div>
          </div>
        </section>
        <h1 className="block mt-12 text-5xl text-slate-100 text-center font-extrabold">
          Projects
        </h1>
        <div className="overflow-x-auto">
          <div className="flex justify-center gap-4 mt-12 flex-no-wrap overflow-x-auto p-4 min-w-full">
            <Card
              href="medium.com"
              title="Iter - Founder / CEO"
              description="Designed and developed the backend for an AI-powered travel itinerary generator that simplifies trip planning by
            creating personalized and efficient itineraries based on user preferences and travel details. Continuously working on
            improving the project and adding new features."
            />
            <Card
              href="medium.com"
              title="Project Yoru"
              description="Led the development of a blockchain-based supply chain prototype, focused primarily on designing and
              implementing the backend."
            />
          </div>
        </div>
        <div id="skills" className="p-7">
          <h1 className="block mt-12 text-5xl text-slate-100 text-center font-extrabold">
            Skills
          </h1>
          <div className="flex flex-wrap justify-center mt-12">
            <div>
              <h3 className="block mt-12 text-3xl text-slate-100 text-center font-extrabold">
                Programming languages
              </h3>
              <div className="flex justify-center gap-4 mt-12 flex-wrap overflow-x-auto p-4">
                {skills["Programming languages"].map((skill) => (
                  <SkillCard
                    key={skill.title}
                    title={skill.title}
                    level={skill.level}
                    category="Programming languages"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-12">
            <div>
              <h3 className="block mt-12 text-3xl text-slate-100 text-center font-extrabold">
                Frameworks and libraries
              </h3>
              <div className="flex justify-center gap-4 mt-12 flex-wrap overflow-x-auto p-4 min-w-full">
                {skills["Frameworks and libraries"].map((skill) => (
                  <SkillCard
                    key={skill.title}
                    title={skill.title}
                    level={skill.level}
                    category="Frameworks and libraries"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-12">
            <div>
              <h3 className="block mt-12 text-3xl text-slate-100 text-center font-extrabold">
                Servers, Databases and Cloud Hosting
              </h3>
              <div className="flex justify-center gap-4 mt-12 flex-wrap overflow-x-auto p-4">
                {skills["Servers, Databases and Cloud Hosting"].map((skill) => (
                  <SkillCard
                    key={skill.title}
                    title={skill.title}
                    level={skill.level}
                    category="Servers, Databases and Cloud Hosting"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="contact">{/* <Contact /> */}</div>
      </main>
    </>
  );
};

export default Home;
