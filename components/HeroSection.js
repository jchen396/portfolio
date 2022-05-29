const HeroSection = () => {
    return (
        <div className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-14 bg-black">
            <div className="flex md:flex-row flex-col items-center space-x-20">
                <div className="relative">
                    <img
                        className=" object-cover w-40 h-40 rounded-full border-[10px] border-black"
                        src="https://avatars.githubusercontent.com/u/50890393?v=4"
                        alt="jackie"
                    />
                    <div className="absolute z-10 p-4 w-0 h-0 bg-green-500 rounded-full border-[10px] border-black right-0 bottom-0"></div>
                </div>
                <div className="space-y-5">
                    <p className="text-xl font-medium text-orange-400">
                        Hello, My name is
                    </p>
                    <h1 className="text-6xl font-mono text-yellow-100">
                        Jackie Chen
                    </h1>
                    <p className="text-xl font-medium text-green-300">
                        and I'm a
                    </p>
                    <h2 className="text-3xl font-mono text-green-100">
                        Front-end Developer
                    </h2>
                </div>
            </div>

            <div className="animate-bounce absolute bottom-5 left-1/2 border-x-[15px] border-x-transparent border-t-[20px] border-t-gray-100"></div>
        </div>
    );
};

export default HeroSection;
