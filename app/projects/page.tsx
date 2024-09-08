import Link from "next/link";
import { Main } from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Icaaq AB - Projects",
  description: "Some of the projects over the years.",
};

const Projects = () => {
  return (
    <Main>
      <h1>Projects</h1>
      <p>Some of the projects over the years.</p>
      <ul className="project-list">
        <li>
          <h2>
            <Link href="//fonus.se">fonus.se</Link>
          </h2>
          <p>
            Frontend architect and developer with a focus on standardizing the
            structure of multiple Next.js applications, simplifying solutions to
            enhance stability and consistency across the platform.
          </p>
        </li>
        <li>
          <h2>
            <Link href="//riksdagen.se">riksdagen.se</Link>
          </h2>
          <p>
            Interface Developer focused on accessibility and standards as RDF
            developed the new external website for the parliament.
          </p>
        </li>
        <li>
          <h2>
            <Link href="//mozilla.org">mozilla.org</Link>
          </h2>
          <p>
            Volunteered with the Mozilla Foundation, focusing on testing,
            reporting, and resolving accessibility bugs within the Mozilla
            ecosystem.{" "}
          </p>
        </li>
      </ul>
    </Main>
  );
};

export default Projects;
