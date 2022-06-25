import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import { projectData } from "../projectData";

const Info = ({ readMoreText, setToggleVideo }) => {
	const projectInfo = projectData.find(
		(project) => project.name === readMoreText
	);

	const videoId = projectInfo.videoId;

	return (
		<div className="absolute lg:w-1/2 w-11/12 lg:h-5/8 md:h-3/5 md:h-3/5 h-3/4 bg-gradient-to-b dark:from-slate-800 from-slate-100 dark:via-slate-600 via-slate-200 dark:to-slate-800 to-slate-100 rounded-md border-x-2 border-green-200">
			<div className="flex w-full h-full justify-center sm:py-20 sm:my-5 my-24">
				<CloseIcon
					className="w-16 h-16 cursor-pointer hover:opacity-30 absolute right-2 top-0"
					onClick={() => setToggleVideo(false)}
				/>
				<div className="iframe-container">
					<iframe
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${projectInfo.videoId}`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Info;
