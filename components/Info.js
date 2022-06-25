import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import { projectData } from "../projectData";

const Info = ({ readMoreText, setToggleInfo }) => {
	const projectInfo = projectData.find(
		(project) => project.name === readMoreText
	);

	const description = projectInfo.description;

	return (
		<div className="absolute lg:w-1/2 w-11/12 lg:h-5/8 md:h-3/5 bg-gradient-to-b dark:from-slate-800 from-slate-100 dark:via-slate-600 via-slate-200 dark:to-slate-800 to-slate-100 rounded-md border-x-2 border-green-200">
			<div className="flex w-full h-full justify-center items-center sm:py-20 sm:my-5 my-20">
				<CloseIcon
					className="w-16 h-16 cursor-pointer hover:opacity-30 absolute right-2 top-0 "
					onClick={() => setToggleInfo(false)}
				/>
				<div className="mx-2">
					<h3 className="dark:text-green-400 text-orange-200 sm:text-5xl text-3xl font-neue font-medium p-8">
						{projectInfo.name}
					</h3>
					<br />
					{description?.map((description) => (
						<p className="dark:text-blue-400 text-orange-800 tracking-wide leading-7 sm:text-xl text-md p-4">
							{description}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Info;
