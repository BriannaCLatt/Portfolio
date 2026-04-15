import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Color from '../components/utils/page.colors.util';
import colors from '../content/index/_colors.json';

// Lazy load all sections
const Hero = dynamic(() => import('../components/sections/index/hero'));
const Looking = dynamic(() => import('../components/sections/index/looking'));
const FeaturedProjects = dynamic(() => import('../components/sections/projects/featured'));
const About = dynamic(() => import('../components/sections/index/about'));
const Technical = dynamic(() => import('../components/sections/index/technical'));
const Career = dynamic(() => import('../components/sections/index/career'));

export default function HomePage() {
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		// let page paint first, then load heavy stuff
		const t = setTimeout(() => setShowContent(true), 50);
		return () => clearTimeout(t);
	}, []);

	return (
		<>
			<Color colors={colors} />

			{/* render AFTER initial paint */}
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
		</>
	);
}