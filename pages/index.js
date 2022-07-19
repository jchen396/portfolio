import { useState } from "react";
import Head from "next/head";

import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Particle from "../components/Particles";

const Home = () => {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<div
			className={`snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth ${
				darkMode ? "dark" : ""
			}`}
		>
			<Head>
				<title>Jackie Chen Portfolio Website</title>
				<meta
					name="description"
					content="Jackie Chen is a self-taught Front End Developer. He is a avid learner and always trying to look for opportunity to grow as an engineer. His passion is to build applications that have impact on people's lives, whether it tremendously affects a large group of users or targets a couple of people to save a few seconds off their daily tasks. This website is built using NextJS and TailwindCSS."
				/>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Particle darkMode={darkMode} />
			<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			<HeroSection />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
};

export default Home;
