import React, { useState, useEffect } from "react";
import Section from "../components/structure/section";
import Container from "../components/structure/container";
import SectionTitle from "../components/blocks/section.title.block";
import css from "../styles/sections/projects/featured.module.scss";

export default function SuiteSpotPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This function now safely checks the window object
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run once to set initial state
    handleResize();

    // Set up event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const flexContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "20px",
  };

  const imageContainerStyle = isMobile
    ? {
        flexBasis: "100%",
        maxWidth: "100%",
        textAlign: "center",
        marginBottom: "20px",
      }
    : {
        flexBasis: "calc(50% - 10px)",
        maxWidth: "calc(50% - 10px)",
        textAlign: "center",
      };

  const imageStyle = { width: "80%", height: "auto", margin: "auto" };
  const imageStyled = { width: "120%", height: "auto", margin: "auto" };
  return (
    <>
      <Section classProp={css.hasBg}>
        <Container spacing={"verticalXXXXLrg"}>
          <SectionTitle
            title="The Suite Spot Case Study"
            preTitle="Where Beauty Finds its Home"
            subTitle="Web Design Workshop Fall &amp; Spring Project"
          />
          {/* Add a photo of the completed website */}
          <div style={flexContainerStyle}>
          <img
                    src="/img/Group 1.png"
                    alt="Collage of The Suite Spot's booking, homepage, and shop"
                    style={imageStyled}
                  />
                  <a
                  href="https://the-suite-spot.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >Click here to visit The Suite Spot!</a>
              </div>
          <section className="overview-section">
            <h2 className="tss-section-title">What is The Suite Spot?</h2>
            <br />
            <p>
              The Suite Spot is a user-friendly website designed primarily for
              mobile devices, catering to professionals renting salon suites and
              their clientele. Crafted exclusively by our team, it serves as a
              central platform where business owners and their customers can
              connect seamlessly.
            </p>
            <br />
            <h3>For the professionals: </h3>
            <ul className="list">
              <li>Manage their own enterprises within our salon suites.</li>
              <li>
                Showcase their expertise and services on personalized profiles.
              </li>
              <li>
                Access information on suite rentals and other relevant
                resources.
              </li>
              <li>
                Inform clients about offered services and special promotions for
                enhanced visibility.
              </li>
              <li>
                Highlight current promotions on the homepage to boost
                appointment bookings.
              </li>
            </ul>
            <br />
            <h3>For the clients:</h3>
            <ul className="list">
              <li>Stay informed about the latest trends in the industry.</li>
              <li>
                Shop for products from our online store and view past purchases.
              </li>
              <li>Easily manage appointments and update personal profiles.</li>
              <li>
                Discover more about our company, services, and product
                offerings.
              </li>
            </ul>
          </section>

          {/* Designing Section */}
          <section className="documentation-section">
            <h2 className="tss-section-title">The Grind: Designing</h2>
            <br />
            <p>Click on the image to view the documentation.</p>
            <br />
            <br />
            <div style={flexContainerStyle}>
              <div style={imageContainerStyle}>
                <h3>Final Designs, User Testing, and Development Plans</h3>
                <a
                  href="https://www.figma.com/proto/0Re8UoaQ2FkJxOzoKKgup0/Develop-Phase?page-id=0%3A1&type=design&node-id=454-47&viewport=28%2C430%2C0.11&t=E66Mw6xATjkovH0S-1&scaling=min-zoom&mode=design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/Design3.jpeg"
                    alt="Design documentation for The Suite Spot"
                    style={imageStyle}
                  />
                </a>
              </div>
              <div style={imageContainerStyle}>
                <h3>Testing Plan</h3>
                <a href="https://drive.google.com/file/d/17zNNnG1zUz1Rjs6Sp0rYCqv-Ov9AqxBd/view?usp=share_link">
                  <img
                    src="/img/testingPlan.jpeg"
                    alt="Development plans and final design guide for The Suite Spot"
                    style={imageStyle}
                  />
                </a>
              </div>
            </div>
          </section>

          {/* Challenges and Successes */}
          <section className="challenges-successes-section">
            <h2 className="tss-section-title">Challenges and Successes</h2>
            <br />
            <div>
              <h3>Challenge 1</h3>
              <p>
                Time constraints presented a significant challenge, particularly
                in ensuring consistency across our prototypes.
              </p>
            </div>
            <div>
              <h3>Success 1</h3>
              <p>
                Though we had a time constraint, we were still able to develop
                amazing prototypes for both web and mobile platforms. These
                prototypes included helpful features to guide users smoothly
                through the website.
              </p>
            </div>
            <br />
            <br />
            <div>
              <h3>Challenge 2</h3>
              <p>
                Initially, we underestimated the project&apos;s scale and
                expectations. However, our experiences from the first phase
                provided valuable insights, enabling us to create high-quality
                prototypes.
              </p>
            </div>
            <div>
              <h3>Success 2</h3>
              <p>
                Leveraging the lessons learned from our experiences, we
                conducted successful testing sessions with diverse users. Their
                feedback played a crucial role in refining our user interface
                and interactions, leading to improved prototypes.
              </p>
            </div>
          </section>

          {/* Low-Fi Prototypes/Sketches Section */}
          <section className="prototypes-section">
            <h2 className="tss-section-title">
              The Vision: Sketching and Prototyping
            </h2>
            <div className="screenshot-container">
              <br />
              <br />
              <h2 className="sketch-proto" style={{ fontSize: "25px" }}>
                UX Sketches
              </h2>
              <br />
              <p>Click on the image to view the sketches.</p>
              <br />
              <br />
              <h3>Mobile</h3>
              <br />
              <a
                href="https://app.uizard.io/p/39a0e03a/overview"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textAlign: "center" }}
              >
                <img
                  className="sketchM"
                  src="/img/SketchM.png"
                  alt="Mobile UX Sketch for The Suite Spot"
                  style={{ width: "80%", height: "auto", margin: "auto" }}
                />
              </a>
            </div>
            <div className="screenshot-container">
              <h3>Web</h3>
              <br />
              <a
                href="https://app.uizard.io/p/2173ec7c/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sketchW"
                  src="/img/SketchW.png"
                  alt="Web UX Sketch for The Suite Spot"
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            </div>
            <br />
            <div className="screenshot-container">
              <h2 className="sketch-proto" style={{ fontSize: "25px" }}>
                Lo-fi Prototypes
              </h2>
              <br />
              <p>Click on the image to view the prototypes.</p>
              <br />
              <br />
              <h3>Mobile</h3>
              <br />
              <a
                href="https://www.figma.com/proto/Tu8daAYiOE6THFlZO444jD/Mobile-LoFi-Prototype?page-id=0%3A1&type=design&node-id=1-2&viewport=372%2C346%2C0.16&t=f1a3r2ymO1uJrBgl-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <img
                  className="protoM"
                  src="/img/Lofi MP.png"
                  alt="Mobile Lo-fi prototype for The Suite Spot"
                  style={{ width: "80%", height: "auto", margin: "auto" }}
                />
              </a>
            </div>
            <div className="screenshot-container">
              <h3>Web</h3>
              <br />
              <a
                href="https://www.figma.com/proto/Q0MLRg0LbHp9RDmba8rk6f/Web-LoFi-Prototype?page-id=0%3A1&type=design&node-id=1-2&viewport=44%2C330%2C0.03&t=iK5anZQaSusYSbUT-1&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="protoW"
                  src="/img/Lofi WP.png"
                  alt="Web Lo-fi prototype for The Suite Spot"
                />
              </a>
            </div>
          </section>

          {/* Results and Impact */}
          <section className="results-section">
            <h2 className="tss-section-title">
              User Testing: Results and Impact
            </h2>
            <br />
            <p>
              After analyzing user testing outcomes, valuable insights were
              gained to enhance our prototype.
            </p>
            <br />
            <h3>Adjustments made:</h3>
            <ul className="list">
              <li>
                Enhanced engagement in footer and newsletter subscription.
              </li>
              <li>Revised mobile appointments overview and homepage.</li>
              <li>Refinements to booking process.</li>
              <li>Rectified navigation and page functionality.</li>
              <li>
                Ensured content alignment and mobile homepage consistency.
              </li>
              <li>Modified profile and account access.</li>
              <li>
                Improved interaction features for previous appointments and
                product purchases.
              </li>
              <li>Implemented page additions and pop-up features.</li>
              <li>Clarified booking process and form validation.</li>
              <li>Made organizational adjustments for enhanced navigation.</li>
              <li>
                Introduced visual enhancements, including button animations.
              </li>
            </ul>
            <br />
            <p>
              User testing and task analysis have refined specific aspects,
              guiding informed refinements as we transitioned from design to a
              functional website.
            </p>
          </section>

          {/* Hi-Fi Prototypes Section */}
          <section className="prototypes-section">
            <h2 className="tss-section-title">
              The Vision: The Final Countdown
            </h2>
            <br />
            <br />
            <div className="screenshot-container">
              <h2 className="sketch-proto" style={{ fontSize: "25px" }}>
                Hi-fi Prototypes
              </h2>
              <br />
              <p>Click on the image to view the prototypes.</p>
              <br />
              <br />
              <h3>Mobile</h3>
              <br />
              <a
                href="https://www.figma.com/proto/xBcWK5LhvhetgYrxEitJa4/Mobile-HiFi-Prototype?page-id=0%3A1&type=design&node-id=1-2&viewport=215%2C315%2C0.04&t=Q6ZCoICXgzRD0eL4-1&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <img
                  className="protoM"
                  src="/img/after mobile 1.png"
                  alt="Mobile Hi-fi prototype for The Suite Spot"
                  style={{ width: "80%", height: "auto", margin: "auto" }}
                />
              </a>
            </div>
            <div className="screenshot-container">
              <h3>Web</h3>
              <br />
              <a
                href="https://www.figma.com/proto/PBrgGbarppN9gmbtOgJ2SG/Web-HiFi-Prototype?page-id=0%3A1&type=design&node-id=1-2&viewport=331%2C107%2C0.44&t=hxhh319RSqf6Es8g-1&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="protoW"
                  src="/img/HiWeb.png"
                  alt="Web Hi-fi prototype for The Suite Spot"
                />
              </a>
            </div>
          </section>
          {/* Developing Section */}
          <section className="documentation-section">
            <h2 className="tss-section-title">The Grind: Developing</h2>
            <br />
            <p>Click on the image to view the documentation.</p>
            <br />
            <br />
            <div style={flexContainerStyle}>
              {/* Add new photos and change link to development milestone */}
              <div style={imageContainerStyle}>
                <h3>Front-end Development</h3>
                <a
                  href="https://docs.google.com/document/d/1KN13MgtfyvB4xnOyz_9--qZDTUEToCFDc84YlwzK7_4/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/Milestone5.jpeg"
                    alt="Front-end development documentation"
                    style={imageStyle}
                  />
                </a>
              </div>
              <div style={imageContainerStyle}>
                <h3>Back-end Development</h3>
                <a href="https://docs.google.com/document/d/1EINkuwr771uosXcIgvsOX0db-Kf_sy3pn9yE0CPtaYE/edit?usp=sharing">
                  <img
                    src="/img/Milestone6.jpeg"
                    alt="Back-end development documentation"
                    style={imageStyle}
                  />
                </a>
              </div>
              <div style={imageContainerStyle}>
                <h3>Testing and Debugging</h3>
                <a href="https://docs.google.com/document/d/1rOaKwM7h7iPN1qCfTC4_OxQhsstsUsOkbNimOkce8kU/edit?usp=sharing">
                  <img
                    src="/img/M7.jpeg"
                    alt="Testing and Debugging documentation"
                    style={imageStyle}
                  />
                </a>
              </div>
              <div style={imageContainerStyle}>
                <h3>Deployment</h3>
                <a href="https://docs.google.com/document/d/1AqqWbsGufEOxow7jbg4v3L97S2FqWGg_wYAupW-BA5U/edit?usp=sharing">
                  <img
                    src="/img/Milestone8.jpeg"
                    alt="Deployment documentation"
                    style={imageStyle}
                  />
                </a>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h2 className="tss-section-title">
              Final Touches: Completing the Relaxation Nexus
            </h2>
            <br />
            <p>
              Throughout the development of The Suite Spot, our team effectively
              transformed an initial concept into a fully operational platform.
              This process enhanced our skills in teamwork, communication, and
              practical application of our accumulated knowledge. We navigated
              each phase of the project lifecycle, making the journey from
              concept to completion educational and enjoyable. Our backend
              development was smooth, using MongoDB to manage dynamic content
              effectively. Despite some challenges with bugs and Vercel
              integration, we maintained the site&apos;s accessibility and
              functionality.
              <br />
              <br />
              Reflecting on our process we recognize the importance of adhering
              to our initial coding framework, conducting thorough upfront
              research, and preparing adequately for deployment complexities.
              The Suite Spot, designed as a hypothetical salon suite, aims to
              demonstrate how service providers could offer seamless and
              efficient services to their clients. Despite time constraints
              limiting some intended features our responsive approach to user
              feedback has continuously refined the website&apos;s functionality
              and overall user experience.
              <br />
              <br />
              As we move beyond graduation, this project leaves us well-prepared
              and eager to tackle future challenges, applying our deepened
              understanding and insights from this comprehensive educational
              experience. As a result of our hard work and dedication, The Suite
              Spot was a featured project in the Nicholson School of
              Communication and Media&apos;s Games and Interactive Media Senior
              Web Design Showcase.
            </p>
            <br/><br/>
            <div style={flexContainerStyle}>
            <img
                    src="/img/dreamTeam.png"
                    alt="Group 8 a.k.a The Suite Spot Dream Team"
                    style={imageStyle}
                  />
              <h3>The Suite Spot Dream Team (from left to right)</h3>
              <p>Quynh Vo, Lillian Allgood, Lindsey Wolbrink, Brianna Lattimore (me), and Callie Vaughn</p>
            </div>
          </section>
        </Container>
        <div className={css.bgContainer}>
          <span className={css.orbitalBg}>
            <span class={`${css.bgSection}`}>
              <span
                className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}
              ></span>
            </span>
            <span class={`${css.bgSection}`}>
              <span className={`${css.bgInner} ${css.heroCenter}`}></span>
            </span>
            <span class={`${css.bgSection}`}>
              <span
                className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}
              ></span>
            </span>
          </span>
          <span className={css.afterGlowBg}></span>
        </div>
      </Section>
    </>
  );
}
