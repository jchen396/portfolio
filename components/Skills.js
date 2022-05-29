import Image from "next/image";
const Skills = () => {
    return (
        <div className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-20 bg-black">
            <div className="text-5xl font-neue font-medium text-orange-200">
                Technologies
            </div>
            <br />
            <div className="grid grid-cols-5 gap-5 rounded p-5 ">
                <div className="hover:animate-pulse">
                    <Image
                        src="/icons/html.png"
                        alt="html"
                        width="64"
                        height="64"
                    />
                    <article className="font-neue font-bold text-gray-100">
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
                    <article className="font-neue font-bold text-gray-100">
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

                    <article className="font-neue font-bold text-gray-100">
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
                    <article className="font-neue font-bold text-gray-100">
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
                    <article className="font-neue font-bold text-gray-100">
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
                    <article className="font-neue font-bold text-gray-100">
                        C++
                    </article>
                </div>
                <div className="hover:animate-pulse">
                    <Image
                        src="/icons/nodejs.png"
                        alt="nodejs"
                        width="80"
                        height="64"
                    />
                    <article className="font-neue font-bold text-gray-100">
                        NodeJS
                    </article>
                </div>
                <div className="hover:animate-pulse">
                    <Image
                        src="/icons/express.png"
                        alt="express"
                        width="120"
                        height="64"
                    />
                    <article className="font-neue font-bold text-gray-100">
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
                    <article className="font-neue font-bold text-gray-100">
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
                    <article className="font-neue font-bold text-gray-100">
                        Redux
                    </article>
                </div>
                <div className="hover:animate-pulse">
                    <Image
                        src="/icons/MongoDB.png"
                        alt="mongodb"
                        width="141"
                        height="64"
                    />
                    <article className="font-neue font-bold text-gray-100">
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
                    <article className="font-neue font-bold text-gray-100">
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
                    <article className="font-neue font-bold text-gray-100">
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
                    <article className="font-neue font-bold text-gray-100">
                        NextJS
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Skills;
