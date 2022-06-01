import { useInView } from "react-intersection-observer";

const Projects = () => {
    const { ref: myRef, inView: myElementIsVisible } = useInView();

    return (
        <div className="snap-start h-screen flex flex-col justify-center items-center space-y-20 relative">
            <div className="relative lg:w-1/2 w-11/12">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-75 animate-pulse"></div>

                <div className="bg-slate-800 rounded lg:p-20 p-10 border-rose-300 border-2 shadow-lg shadow-green-500/50 relative">
                    <div className="text-gray-100 md:text-5xl text-3xl font-arima font-medium text-center">
                        Projects
                    </div>
                    <br />
                    <div
                        ref={myRef}
                        className={`grid md:grid-cols-2 grid-cols-1 text-center gap-3 ${
                            myElementIsVisible
                                ? "motion-safe:animate-fadeIn"
                                : "opacity-0"
                        }`}
                    >
                        <div>
                            <div className="cursor-pointer  p-8 px-20 m-3 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl md:h-48 bg-[url('../public/pictures/khm.png')] bg-cover opacity-0.2 hover:bg-center "></div>
                            <h3 className="font-arima text-xl">
                                Korean Hangman
                            </h3>
                        </div>
                        <div>
                            <div className="cursor-pointer  p-8 px-20 m-3 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl md:h-48 bg-cover opacity-0.2 "></div>
                            <h3 className="font-arima text-xl">League-info</h3>
                        </div>
                        <div>
                            <div className="cursor-pointer  p-8 px-20 m-3 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl md:h-48 bg-cover opacity-0.2 "></div>
                            <h3 className="font-arima text-xl">Birdle-Bot</h3>
                        </div>
                        <div>
                            <div className="cursor-pointer  p-8 px-20 m-3 border-gray-600 rounded-3xl hover:bg-gray-300 transition-all duration-300 ease-linear hover:rounded-xl md:h-48 bg-cover opacity-0.2 "></div>
                            <h3 className="font-arima text-xl">E-commerce</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:block hidden absolute css-ring2">
                <div className="relative h-4 w-4 rounded-full bg-green-200 animate-orbit"></div>
            </div>
        </div>
    );
};

export default Projects;
