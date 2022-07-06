import { useInView } from "react-intersection-observer";

const About = () => {
	const { ref: myRef, inView: myElementIsVisible } = useInView();
	return (
		<div className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-14 relative">
			<div className="rounded lg  lg:w-1/2 w-11/12 relative">
				<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-75 animate-pulse"></div>
				<div className="dark:bg-slate-800 bg-slate-100  sm:p-20 p-5 border-rose-300 border-2 shadow-lg shadow-green-500/50 relative">
					<div>
						<h1 className="dark:text-gray-100 text-orange-800 md:text-5xl text-4xl font-neue font-medium">
							Who am I?
						</h1>
						<br className="my-5" />
						<p
							ref={myRef}
							className={`dark:text-slate-300 text-orange-800 tracking-wide leading-7 sm:text-xl text-lg px-0 ${
								myElementIsVisible
									? "motion-safe:animate-fadeIn"
									: "opacity-0"
							}`}
						>
							I enjoy learning new technologies and bringing my
							ideas to life in the browser. I began my web
							development journey by learning the basics of HTML,
							CSS, and JavaScript in 2019. Since then, I have
							taken the opportunity to improve my skills as a web
							developer by exploring the MERN stack. To optimize
							my applications, I have knowledge of Algorithms and
							Data Structures. <br />
							My goal is to use my skills to solve everyday
							problems and make people's lives easier.
						</p>
						<br className="my-5" />
						<a
							className="text-blue-400 text-2xl"
							href="https://drive.google.com/file/d/1-c8x-vASS-1jkAGKtwwQAnqv-SQPDhmL/view"
						>
							Check out my Resume!
						</a>
					</div>
				</div>
			</div>
			<div className="lg:block hidden absolute css-ring">
				<div className="opacity-0 md:opacity-1 relative h-4 w-4 rounded-full dark:bg-red-200 bg-black animate-orbit"></div>
			</div>
		</div>
	);
};

export default About;
