const { default: HeroSection } = require("../components/HeroSection");
const { default: Skills } = require("../components/Skills");

const Home = () => {
    return (
        <div className="bg-black">
            <HeroSection />
            <Skills />
        </div>
    );
};

export default Home;
