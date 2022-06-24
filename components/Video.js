import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import YouTube from "react-youtube";

import { projectData } from "../projectData";

const Info = ({ readMoreText, setToggleVideo }) => {
	const projectInfo = projectData.find(
		(project) => project.name === readMoreText
	);

	const videoId = projectInfo.videoId;

	const opts = {
		height: "390",
		width: "640",
		playerVars: {
			autoplay: 1,
		},
	};

	console.log(projectInfo);
	return (
		<div className="absolute lg:w-1/2 w-11/12 lg:h-5/8 md:h-3/5 bg-gradient-to-b dark:from-slate-800 from-slate-100 dark:via-slate-600 via-slate-200 dark:to-slate-800 to-slate-100 rounded-md border-x-2 border-green-200">
			<div className="flex w-full h-full justify-center items-center">
				<CloseIcon
					className="w-16 h-16 cursor-pointer hover:opacity-30 absolute right-2 top-0 "
					onClick={() => setToggleVideo(false)}
				/>
				<div>
					<YouTube videoId={videoId} opts={opts} />
				</div>
			</div>
		</div>
	);
};

export default Info;
