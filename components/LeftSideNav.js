import React from "react";
import Link from "next/link";

const LeftSideNav = () => {
	return (
		<div className="hidden sm:block absolute left-20 top-1/3 background-slate-100 text-2xl text-slate-100">
			<ul className="text-4xl space-between-2">
				<li className="hover:text-blue-400">
					<Link href="/">Home</Link>
				</li>
				<li className="hover:text-blue-400">
					<Link href="/about">About</Link>
				</li>
				<li className="hover:text-blue-400">
					<Link href="/blog/hello-world">Projects</Link>
				</li>
				<li className="hover:text-blue-400">
					<Link href="/blog/hello-world">Skills</Link>
				</li>
				<li className="hover:text-blue-400">
					<Link href="/blog/hello-world">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default LeftSideNav;
