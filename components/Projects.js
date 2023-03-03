import { GitHub, ReadMore } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useState } from "react";
import Info from "./Info";
import Video from "./Video";

const Projects = () => {
	const [readMoreText, setReadMoreText] = useState("");
	const [toggleInfo, setToggleInfo] = useState(false);
	const [toggleVideo, setToggleVideo] = useState(false);
	const { ref: myRef, inView: myElementIsVisible } = useInView();

	return (
		<div
			id="projects"
			className="snap-start h-screen flex flex-col justify-center items-center space-y-20 relative"
		>
			<div className="relative lg:w-1/2 w-11/12">
				<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg blur opacity-75 animate-pulse"></div>

				<div className="dark:bg-slate-800 bg-slate-100 rounded lg:p-20 p-10 border-rose-300 border-2 shadow-lg shadow-green-500/50 relative">
					<div className="dark:text-gray-100 text-orange-800 md:text-5xl text-4xl font-arima font-medium text-center mb-6">
						Projects I've built
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
							<div className=" w-full h-24 m-3 border-gray-600 rounded-3xl  md:transition-all duration-300 ease-linear md:hover:rounded-xl md:h-48 bg-[url('/pictures/gramana.webp')] border-2 border-gray-900 md:hover:border-blue-500 bg-cover md:hover:bg-center flex justify-center items-center group">
								<div className="bg-slate-100 rounded-full sm:w-40 w-2/3 space-x-2 md:group-hover:block block md:hidden flex justify-center px-2">
									<ReadMore
										className="cursor-pointer w-10 h-10 hover:opacity-50"
										onClick={() => {
											setReadMoreText("GRAMANA");
											setToggleInfo(true);
										}}
									/>
									<Link href="https://github.com/jchen396/GRAMANA">
										<GitHub className="cursor-pointer w-10 h-10 hover:opacity-50" />
									</Link>
									<YouTubeIcon
										className="cursor-pointer w-10 h-10 hover:opacity-50"
										onClick={() => {
											setReadMoreText("GRAMANA");
											setToggleVideo(true);
										}}
									/>
								</div>
							</div>
							<h3 className="dark:text-slate-100 text-orange-800 font-arima text-xl">
								GRAMANA
							</h3>
						</div>
						<div>
							<div className=" w-full h-24 m-3 border-gray-600 rounded-3xl  md:transition-all duration-300 ease-linear md:hover:rounded-xl md:h-48 bg-[url('/pictures/linfo.webp')] border-2 border-gray-900 md:hover:border-blue-500 bg-cover md:hover:bg-center flex justify-center items-center group">
								<div className="bg-slate-100 rounded-full sm:w-40 w-2/3  space-x-2 md:group-hover:block block md:hidden flex justify-center px-2">
									<ReadMore
										className="cursor-pointer w-10 h-10 hover:opacity-50"
										onClick={() => {
											setReadMoreText("League Info");
											setToggleInfo(true);
										}}
									/>
									<Link href="https://github.com/jchen396/league-info">
										<GitHub className="cursor-pointer w-10 h-10 hover:opacity-50" />
									</Link>
									<YouTubeIcon
										className="cursor-pointer w-10 h-10 hover:opacity-50"
										onClick={() => {
											setReadMoreText("League Info");
											setToggleVideo(true);
										}}
									/>
								</div>
							</div>
							<h3 className="dark:text-slate-100 text-orange-800 font-arima text-xl">
								League Info
							</h3>
						</div>
						<div>
							<div className=" w-full h-24 m-3 border-gray-600 rounded-3xl  md:transition-all duration-300 ease-linear md:hover:rounded-xl md:h-48 bg-[url('/pictures/wdlbot.webp')] border-2 border-gray-900 md:hover:border-blue-500 bg-cover md:hover:bg-center flex justify-center items-center group">
								<div className="bg-slate-100 rounded-full sm:w-40 w-2/3  space-x-2 md:group-hover:block block md:hidden flex justify-center px-2">
									<ReadMore
										className="cursor-pointer w-10 h-10 hover:opacity-50"
										onClick={() => {
											setReadMoreText("Birdle Bot");
											setToggleInfo(true);
										}}
									/>
									<Link href="https://github.com/jchen396/birdle_bot">
										<GitHub className="cursor-pointer w-10 h-10 hover:opacity-50" />
									</Link>
									<YouTubeIcon
										className="cursor-pointer w-10 h-10 hover:opacity-50"
										onClick={() => {
											setReadMoreText("Birdle Bot");
											setToggleVideo(true);
										}}
									/>
								</div>
							</div>
							<h3 className="dark:text-slate-100 text-orange-800 font-arima text-xl">
								Birdle Bot
							</h3>
						</div>
						<div>
							<div className=" w-full h-24 m-3 border-gray-600 rounded-3xl  md:transition-all duration-300 ease-linear md:hover:rounded-xl md:h-48 bg-[url('/pictures/chance-ecommerce.webp')] border-2 border-gray-900 md:hover:border-blue-500 bg-cover md:hover:bg-center flex justify-center items-center group">
								<div className="bg-slate-100 rounded-full sm:w-40 w-2/3  space-x-2 md:group-hover:block block md:hidden flex justify-center px-2">
									<ReadMore
										className="cursor-pointer w-10 h-10 hover:opacity-50"
										onClick={() => {
											setReadMoreText("CHANCE");
											setToggleInfo(true);
										}}
									/>
									<Link href="https://github.com/jchen396/e-commerce-app">
										<GitHub className="cursor-pointer w-10 h-10 hover:opacity-50" />
									</Link>
									<YouTubeIcon
										className="cursor-pointer w-10 h-10 hover:opacity-50"
										onClick={() => {
											setReadMoreText("CHANCE");
											setToggleVideo(true);
										}}
									/>
								</div>
							</div>
							<h3 className="dark:text-slate-100 text-orange-800 font-arima text-xl">
								CHANCE e-commerce
							</h3>
						</div>
					</div>
				</div>
			</div>
			{toggleInfo ? (
				<Info
					readMoreText={readMoreText}
					setToggleInfo={setToggleInfo}
				/>
			) : null}
			{toggleVideo ? (
				<Video
					readMoreText={readMoreText}
					setToggleVideo={setToggleVideo}
				/>
			) : null}
		</div>
	);
};

export default Projects;
