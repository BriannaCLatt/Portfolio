import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Color from '../../components/utils/page.colors.util';
import colors from '../../content/case-studies/_colors.json';

// Lazy load component
const ComingSoon = dynamic(() =>
  import('../../components/sections/projects/comingsoon')
);

export default function CaseStudies() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Color colors={colors} />

      {/* render after initial paint */}
      {showContent && <ComingSoon />}
    </>
  );
}