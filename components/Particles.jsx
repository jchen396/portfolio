import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = ({ darkMode }) => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: darkMode ? "#18191c" : "#ffffff",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: darkMode ? "#ffffff" : "#000000",
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 0.3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 90,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    line_linked: {
                        enable: darkMode ? false : true,
                        distance: 150,
                        color: "#000000",
                        opacity: 0.4,
                        width: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: darkMode ? 1 : 8, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Particle;
