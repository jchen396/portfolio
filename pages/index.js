import { useState } from "react";

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
