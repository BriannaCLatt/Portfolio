// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I have honed a comprehensive skill set including UI/UX Design, front-end, and backend development over the last four years. This period has been marked by a steadfast commitment to excellence and continuous improvement in these areas."
        />
        <section className={career.area}>

          {/* 2024 */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Rapid App Web Development</h3>
                <h4>Spring 2024</h4>
                <h5>University of Central Florida</h5>
              </span>
              <p>
                This program expanded my skills in asynchronous web development,
                focusing on advanced server-side and client-side scripting, and
                database technologies. The training emphasized building on
                existing platforms like WordPress and Webflow, highlighting the
                importance of communication, creative design, and managing
                expectations in web development.
              </p>
              <p>Achievements:</p>
              <ul className={career.list}>
                <li>
                  Understood the significance and potential of content
                  management systems, particularly WordPress, in web
                  development.
                </li>
                <li>
                  Crafted custom themes and plugins, showcasing my technical
                  creativity.
                </li>
                <li>
                  Leveraged AI tools within web development workflows for
                  innovative solutions.
                </li>
                <li>
                  Designed projects and defined requirements by effectively
                  communicating with stakeholders.
                </li>
              </ul>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Mobile Development</h3>
                <h4>Spring 2024</h4>
                <h5>University of Central Florida</h5>
              </span>
              <p>
                I enhanced my mobile app development skills, focusing on React
                and React Native. I developed a portfolio emphasizing key design
                principles. This prepared me for tech roles, from design to
                consultancy, by refreshing my JavaScript, mastering
                documentation, and creating applications.
              </p>
              <p>Key Insights Gained:</p>
              <ul className={career.list}>
                <li>
                  Revisiting JavaScript ES6: Through engaging object-oriented
                  projects, I refreshed and deepened my JavaScript skills,
                  understanding the language more profoundly.
                </li>
                <li>
                  Mastering Documentation: I learned the importance of
                  documentation in debugging and the software development
                  lifecycle, honing my ability to document work effectively.
                </li>
                <li>
                  Crafting React Projects: By applying React&#39;s component model,
                  I developed essential skills for modern web development,
                  creating robust web applications.
                </li>
                <li>
                  Exploring React Native: The program introduced me to React
                  Native&#39;s mobile-first design principles, enabling me to build
                  functional and user-friendly mobile apps.
                </li>
              </ul>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Web Design Workshop I & II</h3>
                <h4>Fall 2023 & Spring 2024</h4>
                <h5>University of Central Florida</h5>
              </span>
              <p>
                After completing this course, I gained a comprehensive
                understanding of developing professional websites, focusing on
                the nuances of information architecture and experience design
                across various platforms. This journey included learning about
                data-driven documents, interactive visualizations, user
                experience, information design, and web application development.
              </p>
              <p>Skills Gained:</p>
              <ul className={career.list}>
                <li>
                  Developed and presented case studies analyzing website design
                  successes and shortcomings.
                </li>
                <li>Crafted professional-quality websites.</li>
                <li>
                  Collaborated effectively within a design and development team,
                  managing and producing projects.
                </li>
                <li>
                  Applied best practices in tools, technologies, and methods for
                  web production.
                </li>
                <li>
                  Analyzed site designs through comprehensive case studies.
                </li>
                <li>
                  Implemented information architecture and experience design
                  principles.
                </li>
                <li>Enhanced my design and development creativity.</li>
                <li>
                  Created a portfolio piece showcasing my skills for potential
                  employers.
                </li>
              </ul>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          {/* 2023 */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>User Centered Design</h3>
                <h4>Spring 2023</h4>
                <h5>University of Central Florida</h5>
              </span>
              <p>
                My understanding of how cognition and behavior influence
                user-friendly interface and system creation significantly grew.
                Through practical experience, I fully embraced User-Centered
                Design (UCD) principles, aiming to elevate user experience (UX)
                in software development.
              </p>
              <p>I have improved on:</p>
              <ul className={career.list}>
                <li>Developing a mindset oriented towards User-Centered Design.</li>
                <li>Co-designing with team members and end users.</li>
                <li>Producing iterative design solutions.</li>
                <li>Gaining proficiency in UCD processes.</li>
                <li>Developing high-fidelity prototypes.</li>
                <li>Mastering usability improvements.</li>
              </ul>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Server Side Scripting</h3>
                  <h4>Spring 2023</h4>
                  <h5>University of Central Florida</h5>
                </span>
                <p>
                  Delving into back-end web development, I focused on PHP and
                  MySQL, gaining a solid understanding of server-side
                  scripting&#39;s crucial role in web applications. This experience
                  enhanced my practical skills in managing and manipulating data
                  across diverse web development architectures, equipping me
                  with the knowledge to tackle various digital projects
                  effectively.
                </p>
                <p>My skills now entail:</p>
                <ul className={career.list}>
                  <li>
                    Understanding NodeJS, SQL, and NoSQL&#39;s roles in web
                    development and their integration with HTML and CSS.
                  </li>
                  <li>
                    Developing various modules using JavaScript and Express.
                  </li>
                  <li>Managing MySQL and MongoDB databases.</li>
                  <li>
                    Using NodeJS to perform operations like creating, accessing,
                    updating, and deleting data on databases, whether they&#39;re
                    hosted locally or remotely.
                  </li>
                </ul>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Design for Access and Accessibility</h3>
                  <h4>Fall 2022</h4>
                  <h5>University of Central Florida</h5>
                </span>
                 <p>
                  In this course, I gained invaluable insights into designing
                  accessible and engaging digital solutions, emphasizing
                  inclusivity for a broad audience. My work involved hands-on
                  development of website prototypes that met diverse user needs
                  effectively.
                </p>
                <p>The skills that I acquired are:</p>
                <ul className={career.list}>
                  <li>
                    Evaluate unsuccessful design strategies for specific
                    populations.
                  </li>
                  <li>
                    Learn techniques for crafting compelling digital
                    experiences.
                  </li>
                  <li>Develop inclusive design competencies.</li>
                  <li>
                    Create targeted accessible solutions for varied user
                    requirements.
                  </li>
                </ul>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Front End Web Design</h3>
                  <h4>Spring 2022</h4>
                  <h5>University of Central Florida</h5>
                </span>
                <p>
                  I learned the importance of responsiveness, ensuring websites
                  adapt seamlessly across devices like mobile phones, tablets,
                  and computers, up to high-definition displays and projectors.
                  Through this course, I engaged with modern programming
                  languages to master responsive design principles and adapt to
                  changing user needs.
                </p>
                <p>
                  Through the course, I refined my abilities, enabling me to:
                </p>
                <ul className={career.list}>
                  <li>
                    Acquire a foundational understanding of HTML/CSS syntax and
                    prototyping methods.
                  </li>
                  <li>
                    Apply media queries and responsive design principles to
                    ensure optimal viewing across various devices.
                  </li>
                  <li>
                    Streamline my development process by incorporating SASS,
                    enhancing efficiency and workflow.
                  </li>
                </ul>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          {/* OLDEST */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Client Side Scripting</h3>
                <h4>Spring 2022</h4>
                <h5>University of Central Florida</h5>
              </span>
              <p>
                Completing this course equipped me with essential web
                development skills for professional websites, including
                data-driven content and interactive design. I learned to apply
                user experience principles and create sophisticated web
                applications, enhancing engagement across devices.
              </p>
              <p>
                The expertise I developed through the course equipped me with
                the ability to:
              </p>
              <ul className={career.list}>
                <li>
                  Master core scripting principles by utilizing contemporary
                  client-side scripting languages.
                </li>
                <li>
                  Address common web design challenges with a strategic,
                  programming-oriented mindset.
                </li>
                <li>
                  Utilize industry-standard tools to design web page layouts,
                  and effectively bring these designs to life on web servers.
                </li>
                <li>
                  Integrate JavaScript into web layouts to craft dynamic and
                  interactive user experiences.
                </li>
                <li>Extract and process user data with Regular Expressions.</li>
                <li>
                  Read, manipulate, and store information efficiently, adhering
                  to the latest best practices in web development.
                </li>
              </ul>
            </div>
            <div className={career.companyAlt}></div>
          </article>

        </section>
      </Container>
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];

const stack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];
