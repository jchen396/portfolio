const About = () => {
    return (
        <div className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-14 relative">
            <div className="rounded md:w-1/2 w-11/12 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-75 animate-pulse"></div>
                <div className="bg-slate-800  p-20 border-rose-300 border-2 shadow-lg shadow-green-500/50 relative">
                    <div>
                        <h1 className="text-gray-100 text-5xl font-neue font-medium">
                            About Me
                        </h1>
                        <br />
                        <p className="text-center text-slate-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Maiores eos minus debitis aut odio,
                            voluptatibus est maxime adipisci mollitia,
                            voluptates expedita ullam, id facere excepturi
                            sapiente porro commodi cumque eaque!
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute css-ring">
                <div className="relative h-4 w-4 rounded-full bg-red-200 animate-orbit"></div>
            </div>
        </div>
    );
};

export default About;
