import Image from "next/image";

import { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Badges from "../../utils/badge.list.util";
import Icon from "../../utils/icon.util";

import css from "../../../styles/sections/projects/featured.module.scss";

export default function FeaturedProject({ content, index }) {
  const {
    project,
    url,
    repo,
    descriptionTitle,
    description,
    stack,
    images,
  } = content;

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  // 🔥 layout awareness
  const isReversed = index % 2 !== 0;

  // 🔥 JSON-controlled but layout-corrected direction
  const getHoverVariant = (hover) => {
    if (!hover) return isReversed ? hoverLeft : hoverRight;

    if (isReversed) {
      return hover === "left" ? hoverRight : hoverLeft;
    }

    return hover === "left" ? hoverLeft : hoverRight;
  };

  return (
    <m.section
      className={css.project}
      ref={ref}
      variants={container}
      initial={["rest", "hidden"]}
      whileHover="hover"
      animate={controls}
    >
      {/* TEXT SIDE */}
      <div className={css.details}>
        <div className={css.projectHeader}>
          <div className={css.header}>
            <h3 className="highlight">{project}</h3>
            <span className={css.privateOr}>{repo}</span>
          </div>

          <div className={css.description}>
            <p>
              <strong>{descriptionTitle}</strong>
              <br />
              <br />
              {description}
            </p>
          </div>

          <div className={css.stackContainer}>
            <Badges
              list={stack}
              block="stack"
              fullContainer={false}
              color={false}
            />
          </div>

          <div className={css.viewProject}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View project ${project}`}
            >
              <Icon icon={["fad", "arrow-right-to-bracket"]} />
            </a>
          </div>
        </div>
      </div>

      {/* IMAGE SIDE */}
      <div className={css.imageContainer}>
        <span className={css.imageAnimationContainer}>
          
          {/* DESKTOP: animated mockups */}
          <div className={css.desktopOnly}>
            {images.map(({ key, url, hover, h, w }, i) => {
              const hoverVariant = getHoverVariant(hover);

              return (
                <m.div key={`${i}-${key}`} variants={item}>
                  <m.div variants={hoverVariant}>
                    <Image
                      src={url}
                      alt={project}
                      width={w}
                      height={h}
                    />
                  </m.div>
                </m.div>
              );
            })}
          </div>

          {/* MOBILE: static images */}
          <div className={css.mobileOnly}>
            {images?.map(({ key, mobileUrl, mobileW, mobileH }, i) => {
              return (
                <Image
                  key={`mobile-${i}-${key}`}
                  src={mobileUrl || "/img/fallback.png"}
                  alt={project}
                  width={mobileW || 200}
                  height={mobileH || 200}
                />
              );
            })}
          </div>

        </span>
      </div>
    </m.section>
  );
}

/* ---------------- ANIMATIONS ---------------- */

const container = {
  hidden: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.0625,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.25,
    },
  },
  rest: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0,
    },
  },
  hover: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0,
    },
  },
};

const item = {
  hidden: {
    y: 75,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.35,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const hoverLeft = {
  rest: { x: 0 },
  hover: { x: -20 },
};

const hoverRight = {
  rest: { x: 0 },
  hover: { x: 20 },
};