import { useInView } from "react-intersection-observer";

const About = () => {
	const { ref: myRef, inView: myElementIsVisible } = useInView();
	return (
		<div
			id="about"
			className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-14 relative"
		>
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
							I have a passion for learning new technologies and
							transforming my ideas into tangible experiences on
							the web. My journey as a web developer began in 2019
							when I delved into the fundamentals of HTML, CSS,
							and JavaScript. Since then, I have continuously
							expanded my skill set by exploring the MERN
							(MongoDB, Express.js, React, Node.js) stack, which
							has empowered me to build robust and dynamic web
							applications.
							<br />
							To ensure optimal performance and efficiency, I also
							possess a strong foundation in algorithms and data
							structures, allowing me to create optimized
							solutions for complex problems. My ultimate goal is
							to leverage my skills to solve real-world challenges
							and enhance the lives of people by simplifying their
							day-to-day tasks.
							<br />
							By combining my passion for learning, expertise in
							web development technologies, and problem-solving
							capabilities, I am dedicated to creating impactful
							solutions that deliver exceptional user experiences.
						</p>
						<br className="my-5" />
						<a
							className="text-gray-200 text-2xl"
							href="https://drive.google.com/file/d/1biQnJ0Z2QXJkg9gU0JnAroHEjI2eLZE6/view"
						>
							<button className="p-3 bg-rounded bg-slate-800 border-2 border-red-200 hover:bg-slate-600">
								View Resume
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
