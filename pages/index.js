import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const { default: HeroSection } = require("../components/HeroSection");
const { default: Skills } = require("../components/Skills");

const Home = () => {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-scroll bg-black">
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
