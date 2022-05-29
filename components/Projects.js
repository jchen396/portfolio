const Projects = () => {
    return (
        <div className="snap-start bg-black h-screen flex flex-col justify-center items-center space-y-20">
            <div className="text-gray-100 text-5xl font-arima font-medium">
                Projects
            </div>
            <br />
            <div>
                <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl">
                    Project 1
                </h3>
                <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl">
                    Project 2
                </h3>
                <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl">
                    Project 3
                </h3>
                <h3 className="cursor-pointer font-arima text-xl p-8 px-20 m-3 bg-gray-400 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl">
                    Project 4
                </h3>
            </div>
        </div>
    );
};

export default Projects;
