import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import HeroSection from "../components/HeroSection";
import About from "../components/About";

const Home = () => {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-black scroll-smooth">
            <Navbar />
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
