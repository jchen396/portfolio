import React from "react";
import Link from "next/link";

const LeftSideNav = ({ darkMode }) => {
	return (
		<div
			className={`w-full xl:w-fit hidden sm:block fixed z-10 bottom-5 xl:left-20 xl:top-1/3 text-2xl ${
				darkMode ? "text-slate-100" : "text-slate-900"
			}`}
		>
			<ul className="font-mono text-4xl flex flex-row xl:flex-col items-center justify-center xl:items-start">
				<li
					className={`p-2 hover:text-slate-900 rounded ${
						darkMode
							? "hover:text-slate-900 dark-navbar-transition"
							: "hover:text-slate-100 light-navbar-transition"
					}`}
				>
					<Link href="#home">Home</Link>
				</li>
				<li
					className={`p-2 hover:text-slate-900 rounded ${
						darkMode
							? "hover:text-slate-900 dark-navbar-transition"
							: "hover:text-slate-100 light-navbar-transition"
					}`}
				>
					<Link href="#about">About</Link>
				</li>
				<li
					className={`p-2 hover:text-slate-900 rounded ${
						darkMode
							? "hover:text-slate-900 dark-navbar-transition"
							: "hover:text-slate-100 light-navbar-transition"
					}`}
				>
					<Link href="#projects">Project</Link>
				</li>
				<li
					className={`p-2 hover:text-slate-900 rounded ${
						darkMode
							? "hover:text-slate-900 dark-navbar-transition"
							: "hover:text-slate-100 light-navbar-transition"
					}`}
				>
					<Link href="#skills">Skills</Link>
				</li>
				<li
					className={`p-2 hover:text-slate-900 rounded ${
						darkMode
							? "hover:text-slate-900 dark-navbar-transition"
							: "hover:text-slate-100 light-navbar-transition"
					}`}
				>
					<Link href="#contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default LeftSideNav;
