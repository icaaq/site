import { Main } from "../components";
import Image from "next/image";

export default function CurriculumVitae() {
  return (
    <Main fullWidth>
      <h1>Isak Lagerblad</h1>
      <p>Frontend developer, architect and accessibility consultant.</p>
      <hr />
      <div id="about">
        <h2>About</h2>
        <p>
          Creating fast, minimal, semantic, and accessible markup is something I
          am deeply passionate about.
        </p>
        <p>
          I believe that understanding users&apos; diverse needs is key. For
          instance, if I can comprehend how a ten-year-old girl with athetoid
          cerebral palsy navigates her computer, I can contribute to making the
          web more inclusive for her and countless others.
        </p>
        <p>
          I strongly believe that the web should be interpretable by everyone,
          regardless of whether they use a standard browser, assistive
          technologies, or a mobile device.
        </p>
      </div>
      <hr />
      <div id="resume">
        <h2>Resume</h2>
        <dl>
          <dt>Name</dt>
          <dd>Isak Lagerblad</dd>
          <dt>Address</dt>
          <dd>
            Älvgatan 14E
            <br />
            792 32 Mora
          </dd>
          <dt>Date Of Birth</dt>
          <dd>Late December 1976</dd>
          <dt>Website</dt>
          <dd>
            <a href="http://www.icaaq.com">www.icaaq.com</a>
          </dd>
          <dt>Email</dt>
          <dd>
            <a href="mailto:info@icaaq.com">info@icaaq.com</a>
          </dd>
        </dl>
        <Image
          src="/img/isak.jpg"
          alt="photo of Isak"
          width={200}
          height={200}
        />
      </div>
      <hr />
      <div id="skills">
        <h2>Job skills</h2>
        <p>
          What I love to do, and have done, like, every day for the past 20
          years.
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>WCAG</li>
          <li>WAI-ARIA</li>
          <li>Screenreaders</li>
          <li>JavaScript/Typescript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Technical SEO</li>
          <li>Performance</li>
          <li>Git</li>
        </ul>
      </div>
      <hr />
      <div id="experience">
        <h2>Experience</h2>
        <p>Some of the projects over the years.</p>
        <dl>
          <dt>
            2024 <a href="https://www.fonus.se">Fonus.se</a>
          </dt>
          <dd>
            Frontend architect and developer with a focus on standardizing the
            structure of multiple Next.js applications, simplifying solutions to
            enhance stability and consistency across the platform. <br />
            #nextjs #typescript #react
          </dd>
          <dt>
            2022 - 2023 <a href="https://www.riksdagen.se">Riksdagen.se</a>
          </dt>
          <dd>
            Interface Developer focused on accessibility and standards as RDF
            developed the new external website for the parliament. <br />
            #accessibility #nextjs #typescript #react
          </dd>
          <dt>
            2022 <b>Intranet - Stockholms Stad</b>
          </dt>
          <dd>
            Interface Developer with a focus on accessibility and standards when
            we once again were entrusted with creating a new version of the
            city&apos;s intranet.
          </dd>
          <dt>
            2018 <a href="http://www.assaabloy.com">ASSA ABLOY</a>
          </dt>
          <dd>
            Interface architect, developer and technical accessibility
            consultant.
          </dd>
          <dt>
            2017 <b>Intranet - ASSA ABLOY</b>
          </dt>
          <dd>
            Interface architect, developer and technical accessibility
            consultant.
          </dd>
          <dt>
            2015: <a href="https://www.apoteksgruppen.se">apoteksgruppen.se</a>
          </dt>
          <dd>
            Interface architect and developer when apoteksgruppen new website
            and e-commerce was built.
          </dd>
          <dt>2012 - R&amp;D</dt>
          <dd>
            A member of the
            <abbr title="research and development">R&amp;D</abbr> team on Creuna
            Sweden, responsible for Frontend and accessibility issues.
          </dd>
          <dt>
            2012 - <a href="http://www.creuna.com">creuna.com</a>
          </dt>
          <dd>
            Lead interface developer when Creuna creates their own award winning
            company website. Really fun project with lots of good quality
            people. Words that define the project is responsive, a11y, Django,
            performance, mezzanine, github and IRC
          </dd>
          <dt>
            2011 - <a href="https://efn.se">EFN.se</a>
          </dt>
          <dd>
            Lead interface developer when Creuna creates a responsive economic
            news TV site for one of Swedens biggest banks.
          </dd>
          <dt>
            2007 - <a href="https://www.stockholm.se">www.stockholm.se</a>
          </dt>
          <dd>
            Lead interface web developer and technical accessibility consultant.
          </dd>
          <dt>
            2005 - <b>Intranet - Stockholms Stad</b>
          </dt>
          <dd>
            Interface web developer and technical accessibility consultant.
          </dd>
        </dl>
      </div>
      <hr />
      <div id="employment">
        <h2>Employment</h2>
        <dl>
          <dt>
            2018 – Present <b>Icaaq AB</b>
          </dt>
          <dd>
            Senior interface web developer and technical accessibility
            consultant
          </dd>
          <dt>
            August 2005 – 2018 <b>Creuna. Stockholm, Sweden</b>
          </dt>
          <dd>
            Senior interface web developer and technical accessibility
            consultant
          </dd>
          <dt>
            March 2004 – December 2004 <b>Spira studio. Mora, Sweden</b>
          </dt>
          <dd>web developer</dd>
          <dt>
            February 2002 – January 2004
            <b> ICA Matekonomen. Mora, Sweden</b>
          </dt>
          <dd>Butcher</dd>
        </dl>
      </div>
      <hr />
      <div id="education">
        <h2>Education</h2>
        <dl>
          <dt>
            1992-1994. <b>Hushagsgymnasiet, Borlänge Sweden</b>
          </dt>
          <dd>Food Technology and Nutrition programme - Butcher</dd>
        </dl>
      </div>
    </Main>
  );
}
