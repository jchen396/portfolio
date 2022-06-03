import Image from "next/image";
import { useInView } from "react-intersection-observer";
const Skills = () => {
    const { ref: myRef, inView: myElementIsVisible } = useInView();

    return (
        <div className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-20 relative">
            <div className="relative lg:w-1/2 w-11/12 ">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-75 animate-pulse"></div>

                <div className="dark:bg-slate-800 bg-slate-100 rounded lg:p-20 p-10 border-rose-300 border-2 shadow-lg shadow-green-500/50 relative">
                    <div className="md:text-5xl text-3xl font-neue font-medium dark:text-gray-100 text-orange-800">
                        Technologies I've worked with
                    </div>
                    <br />
                    <div
                        ref={myRef}
                        className={`grid lg:grid-cols-5 grid-cols-3 md:gap-5 gap-x-10 rounded p-5 ${
                            myElementIsVisible
                                ? "motion-safe:animate-fadeIn"
                                : "opacity-0"
                        }`}
                    >
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/html.png"
                                alt="html"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                HTML
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/css.png"
                                alt="css"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                CSS
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/javascript.png"
                                alt="javascript"
                                width="64"
                                height="64"
                            />

                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                Javascript
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/python.png"
                                alt="python"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                Python
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/java.png"
                                alt="java"
                                width="100"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                Java
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/cpp.png"
                                alt="cplusplus"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                C++
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/nodejs.png"
                                alt="nodejs"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                NodeJS
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/express.png"
                                alt="express"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                ExpressJS
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/react.png"
                                alt="react"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                ReactJS
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/redux.png"
                                alt="redux"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                Redux
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/MongoDB.png"
                                alt="mongodb"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                MongoDB
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/sass.png"
                                alt="sass"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                Sass
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                src="/icons/tailwindcss.png"
                                alt="tailwind"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                TailwindCSS
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                className="bg-gray-100 rounded-full"
                                src="/icons/nextjs.png"
                                alt="nextjs"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                NextJS
                            </article>
                        </div>
                        <div className="hover:animate-pulse">
                            <Image
                                className="bg-gray-100 rounded-full"
                                src="/icons/git.png"
                                alt="nextjs"
                                width="64"
                                height="64"
                            />
                            <article className="font-neue font-bold dark:text-gray-100 text-orange-800">
                                Git
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:block hidden absolute css-ring1">
                <div className="relative h-4 w-4 rounded-full dark:bg-blue-200 bg-black animate-orbit"></div>
            </div>
        </div>
    );
};

export default Skills;
