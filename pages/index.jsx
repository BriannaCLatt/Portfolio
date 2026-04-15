import { useEffect, useState } from 'react';

import Hero from '../components/sections/index/hero';
import Looking from '../components/sections/index/looking';
import About from '../components/sections/index/about';
import Technical from '../components/sections/index/technical';
import Career from '../components/sections/index/career';
import FeaturedProjects from '../components/sections/projects/featured';

import Color from '../components/utils/page.colors.util';
import colors from '../content/index/_colors.json';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Color colors={colors} />

      <div
        style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0px)' : 'translateY(10px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          willChange: 'opacity, transform',
        }}
      >
        {!showContent && (
          <div style={{ padding: '40px' }}>
            <div className="skeleton" style={skeletonBlock} />
            <div className="skeleton" style={skeletonBlock} />
            <div className="skeleton" style={skeletonBlock} />
          </div>
        )}

        {showContent && (
          <>
            <Hero />
            <Looking />
            <FeaturedProjects />
            <About />
            <Technical />
            <Career />
          </>
        )}
      </div>
    </>
  );
}

// skeleton style (no animation here)
const skeletonBlock = {
  height: '120px',
  background: 'linear-gradient(90deg, #eee, #f5f5f5, #eee)',
  borderRadius: '10px',
  marginBottom: '20px',
};