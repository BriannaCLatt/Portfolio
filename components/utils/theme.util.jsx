import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import css from "../../styles/utils/theme.module.scss";

export default function SetTheme() {
	const router = useRouter();

	const [theme, setTheme] = useState(null);
	const [route, setRoute] = useState(null);

	// Toggle theme safely
	const toggleTheme = () => {
		setTheme((prev) => {
			if (prev === "light") return "dark";
			if (prev === "dark") return "unicorn";
			return "light";
		});
	};

	// Icon renderer
	const buttonIcon = (theme) => {
		if (theme === "light") {
			return (
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.95 5.636l1.414 1.414-2.195 2.195c-.372-.562-.853-1.042-1.414-1.414l2.195-2.195zm-5.95-1.636h2v3.101c-.323-.066-.657-.101-1-.101s-.677.035-1 .101v-3.101zm-3.95 1.636l2.195 2.195c-.561.372-1.042.853-1.414 1.415l-2.195-2.196 1.414-1.414zm-3.05 5.364h3.101c-.066.323-.101.657-.101 1s.035.677.101 1h-3.101v-2zm3.05 7.364l-1.414-1.414 2.195-2.195c.372.562.853 1.042 1.414 1.414l-2.195 2.195zm5.95 1.636h-2v-3.101c.323.066.657.101 1 .101s.677-.035 1-.101v3.101zm-1-5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.95 3.364l-2.195-2.195c.562-.372 1.042-.853 1.414-1.414l2.195 2.195-1.414 1.414zm3.05-5.364h-3.101c.066-.323.101-.657.101-1s-.035-.677-.101-1h3.101v2z" />
				</svg>
			);
		}

		if (theme === "dark") {
			return (
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" />
				</svg>
			);
		}

		return (
			<svg width="24" height="24" viewBox="0 0 24 24">
				<path d="M4.823 21.933l2.734-1.171-3.241-8.847-1.561 4.372 2.068 5.646zm-2.594-4.174l-2.229 6.241 3.903-1.672-1.674-4.569z" />
			</svg>
		);
	};

	// Load default theme safely (client only)
	useEffect(() => {
		try {
			const stored = localStorage.getItem("theme");

			const system =
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light";

			setTheme(stored || system);
		} catch (e) {
			setTheme("light");
		}
	}, []);

	// Apply theme + persist safely
	useEffect(() => {
		if (!theme) return;

		try {
			document.documentElement.dataset.theme = theme;
			localStorage.setItem("theme", theme);
		} catch (e) {}

		const mq = window.matchMedia("(prefers-color-scheme: dark)");

		const handler = (e) => {
			setTheme(e.matches ? "dark" : "light");
		};

		mq.addEventListener("change", handler);

		return () => mq.removeEventListener("change", handler);
	}, [theme]);

	// Route tracking (safe cleanup)
	useEffect(() => {
		const handleRoute = (url) => setRoute(url);

		router.events.on("routeChangeComplete", handleRoute);

		return () => {
			router.events.off("routeChangeComplete", handleRoute);
		};
	}, [router.events]);

	return (
		<>
			{/* SAFE: no DOM access before React mounts */}
			<Script id="theme-init" strategy="afterInteractive">
				{`
					(function () {
						try {
							const stored = window.localStorage.getItem('theme');
							const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
							document.documentElement.dataset.theme = stored || system;
						} catch (e) {}
					})();
				`}
			</Script>

			<button
				onClick={toggleTheme}
				data-theme={theme}
				className={css.toggle}
			>
				{buttonIcon(theme)}
			</button>
		</>
	);
}