import React from "react";
import Link from "next/link";

const LeftSideNav = () => {
	return (
		<div className="w-full xl:w-fit hidden sm:block fixed z-10 bottom-5 xl:left-20 xl:top-1/3 background-slate-100 text-2xl text-slate-100">
			<ul className="text-4xl flex flex-row xl:flex-col items-center justify-center xl:items-start ">
				<li className="p-2 hover:text-slate-900 navbar-transition rounded">
					<Link href="#home">Home</Link>
				</li>
				<li className="p-2 hover:text-slate-900 navbar-transition rounded">
					<Link href="#about">About</Link>
				</li>
				<li className="p-2 hover:text-slate-900 navbar-transition rounded">
					<Link href="#projects">Project</Link>
				</li>
				<li className="p-2 hover:text-slate-900 navbar-transition rounded">
					<Link href="#skills">Skills</Link>
				</li>
				<li className="p-2 hover:text-slate-900 navbar-transition rounded">
					<Link href="#contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default LeftSideNav;
