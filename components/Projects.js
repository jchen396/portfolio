const Projects = () => {
    return (
        <div className="snap-start bg-black h-screen flex flex-col justify-center items-center space-y-20">
            <div className="bg-slate-800 rounded p-20 border-rose-300 border-2 shadow-lg shadow-cyan-500/50 md:w-1/2 w-full">
                <div className="text-gray-100 text-5xl font-arima font-medium text-center">
                    Projects
                </div>
                <br />
                <div className="grid md:grid-cols-2 grid-cols-1 text-center gap-3">
                    <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl ">
                        Korean Hangman
                    </h3>
                    <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl">
                        League-info
                    </h3>
                    <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl">
                        Birdle Discord Bot
                    </h3>
                    <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl">
                        E-commerce website
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Projects;
