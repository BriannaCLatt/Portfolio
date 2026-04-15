// Core packages
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';

// Utils
import SetGridGap from '../components/utils/set.grid.util';

// Structure
import Layout from '../components/layout/layout';

// CSS reset
import "../node_modules/the-new-css-reset/css/reset.css";

// Fonts
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

// Devicon
import '../node_modules/devicon/devicon.min.css';

// Global css
import '../styles/css/variables.css';
import '../styles/css/global.css';

export default function MyApp({ Component, pageProps }) {
	const [enableGrid, setEnableGrid] = useState(false);

	useEffect(() => {
		// delay so it doesn't block render
		const t = setTimeout(() => setEnableGrid(true), 100);
		return () => clearTimeout(t);
	}, []);

	return (
		<>
			<Layout>
				<Component {...pageProps} />

				{/* Load AFTER render */}
				{enableGrid && <SetGridGap />}

				<Analytics />
			</Layout>
		</>
	);
}