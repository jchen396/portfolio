import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const HeroSection = () => {
	const { ref: myRef, inView: myElementIsVisible } = useInView();

	return (
		<div className="snap-start text-center h-screen flex flex-col justify-center items-center space-y-14 bg-black">
			<div className="flex md:flex-row flex-col items-center space-x-20">
				<div className="relative">
					<Image
						width={256}
						height={256}
						className="object-cover rounded-full border-[10px] border-black"
						src="/icons/IMG_0815.webp"
						alt="jackie"
					/>
					<div className="absolute z-10 p-6 w-0 h-0 bg-green-500 rounded-full border-[10px] border-black right-0 bottom-0"></div>
				</div>
				<div className="space-y-5 relative">
					<p className="text-xl font-medium dark:text-orange-400 text-blue-700">
						Hello, My name is
					</p>
					<h1 className="text-6xl font-mono dark:text-yellow-100 text-blue-900">
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString("Jackie Chen")
									.pauseFor(2500)
									.start();
							}}
						/>
					</h1>
					<p className="text-xl font-medium dark:text-green-300 text-red-700">
						and I'm a
					</p>
					<h2 className="text-3xl font-mono dark:text-green-100 text-red-900">
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString("Front-end Developer")
									.pauseFor(2500)
									.start();
							}}
						/>
					</h2>
				</div>
			</div>
			<div
				ref={myRef}
				className={`${
					myElementIsVisible
						? "animate-bounce relative mt-24 border-x-[15px] border-x-transparent border-t-[20px] border-t-gray-100"
						: "opacity-0"
				}`}
			></div>
		</div>
	);
};

export default HeroSection;
