import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import { LinkedIn } from "@mui/icons-material";

const Navbar = ({ darkMode, setDarkMode }) => {
	const clickHandler = () => {
		darkMode ? setDarkMode(false) : setDarkMode(true);
	};

	return (
		<div className="z-10 w-full h-12 absolute bg-transparent top-4">
			<Link href="https://github.com/jchen396">
				<GitHubIcon
					aria-label="GitHub"
					sx={{ fontSize: 40 }}
					className="cursor-pointer items-center m-2 dark:bg-slate-100 rounded-full hover:opacity-30"
				/>
			</Link>
			<Link href="https://www.linkedin.com/in/jchen396/">
				<LinkedIn
					aria-label="LinkedIn"
					sx={{ fontSize: 40 }}
					className="cursor-pointer items-center m-2 dark:bg-slate-100 rounded hover:opacity-30"
				/>
			</Link>
			<button
				onClick={clickHandler}
				className="rounded-full w-12 h-12 dark:bg-slate-100 border-2 border-black hover:opacity-30"
			>
				{darkMode ? (
					<LightModeIcon
						aria-label="Light Mode"
						sx={{ fontSize: 40 }}
					/>
				) : (
					<DarkModeIcon
						aria-label="Dark Mode"
						sx={{ fontSize: 40 }}
					/>
				)}
			</button>
		</div>
	);
};

export default Navbar;
