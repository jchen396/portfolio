import React from "react";

const About = () => {
    return (
        <div className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-14 bg-black">
            <div className="bg-slate-800 rounded p-20 border-rose-300 border-2 shadow-lg shadow-cyan-500/50 md:w-1/2 w-full">
                <h1 className="text-gray-100 text-5xl font-neue font-medium">
                    About Me
                </h1>
                <br />
                <p className="text-center text-slate-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Maiores eos minus debitis aut odio, voluptatibus est maxime
                    adipisci mollitia, voluptates expedita ullam, id facere
                    excepturi sapiente porro commodi cumque eaque!
                </p>
            </div>
        </div>
    );
};

export default About;
