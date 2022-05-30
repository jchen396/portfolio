const Projects = () => {
    return (
        <div className="snap-start bg-black h-screen flex flex-col justify-center items-center space-y-20 relative">
            <div className="relative md:w-1/2 w-11/12">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-75 animate-pulse"></div>

                <div className="bg-slate-800 rounded p-20 border-rose-300 border-2 shadow-lg shadow-green-500/50 relative">
                    <div className="text-gray-100 md:text-5xl text-3xl font-arima font-medium text-center">
                        Projects
                    </div>
                    <br />
                    <div className="grid md:grid-cols-2 grid-cols-1 text-center gap-3">
                        <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl md:h-48 ">
                            Korean Hangman
                        </h3>
                        <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl md:h-48">
                            League-info
                        </h3>
                        <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl md:h-48">
                            Birdle Discord Bot
                        </h3>
                        <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl md:h-48">
                            E-commerce
                        </h3>
                    </div>
                </div>
            </div>
            <div className="absolute css-ring2">
                <div className="relative h-4 w-4 rounded-full bg-green-200 animate-orbit"></div>
            </div>
        </div>
    );
};

export default Projects;
