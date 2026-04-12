import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import css from "../../styles/utils/theme.module.scss";

export default function SetTheme() {
	const router = useRouter();

	const [theme, setTheme] = useState(null);

	// Toggle theme
	const toggleTheme = () => {
		setTheme((prev) => {
			if (prev === "light") return "dark";
			if (prev === "dark") return "unicorn";
			return "light";
		});
	};

	// Load theme safely
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

	// Apply theme
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

	// 🚨 GRADIENT DISABLED FOR TESTING
	useEffect(() => {
		const canvasEle = document.querySelector("#gradient-canvas");

		// ❌ DO NOT RUN GRADIENT
		if (false && canvasEle) {
			// intentionally disabled
		}

		return () => {};
	}, [theme]); // removed route dependency

	return (
		<>
			{/* Safe theme init */}
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
				Toggle Theme
			</button>
		</>
	);
}