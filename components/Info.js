import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import { projectData } from "../projectData";

const Info = ({ readMoreText, setToggleInfo }) => {
    const projectInfo = projectData.find(
        (project) => project.name === readMoreText
    );

    const description = projectInfo.description;

    console.log(projectInfo);
    return (
        <div className="absolute lg:w-1/2 w-11/12 h-3/6 bg-gradient-to-b dark:from-slate-800 from-slate-100 dark:via-slate-600 via-slate-200 dark:to-slate-800 to-slate-100 rounded-md border-x-2 border-green-200">
            <div className="flex w-full h-full justify-center items-center">
                <CloseIcon
                    className="w-16 h-16 cursor-pointer hover:opacity-30 absolute right-2 top-0 "
                    onClick={() => setToggleInfo(false)}
                />
                <div>
                    <h3 className="dark:text-gray-100 text-orange-800 text-5xl font-neue font-medium p-8">
                        {projectInfo.name}
                    </h3>
                    {description?.map((description) => (
                        <p className="dark:text-slate-300 text-orange-800 tracking-wide leading-7 text-xl p-4">
                            {description}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Info;
