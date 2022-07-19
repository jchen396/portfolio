import Image from "next/image";
import { useInView } from "react-intersection-observer";
const Skills = () => {
	const { ref: myRef, inView: myElementIsVisible } = useInView();

	return (
		<div className="snap-start text-center h-screen  flex flex-col justify-center items-center space-y-20 relative">
			<div className="relative lg:w-1/2 w-11/12 self-center ">
				<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-75 animate-pulse"></div>

				<div className="dark:bg-slate-800 bg-slate-100 rounded lg:p-20 p-10 border-rose-300 border-2 shadow-lg shadow-green-500/50 relative">
					<div className="md:text-5xl text-4xl font-neue font-medium dark:text-gray-100 text-orange-800">
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
								src="/icons/html.webp"
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
								src="/icons/css.webp"
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
								src="/icons/javascript.webp"
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
								src="/icons/python.webp"
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
								src="/icons/java.webp"
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
								src="/icons/cpp.webp"
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
								src="/icons/nodejs.webp"
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
								src="/icons/express.webp"
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
								src="/icons/react.webp"
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
								src="/icons/redux.webp"
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
								src="/icons/MongoDB.webp"
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
								src="/icons/sass.webp"
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
								src="/icons/tailwindcss.webp"
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
								src="/icons/nextjs.webp"
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
								src="/icons/git.webp"
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
