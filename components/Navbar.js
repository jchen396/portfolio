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
        <div className="w-full h-12 md:relative bg-transparent top-16">
            <Link href="https://github.com/jchen396">
                <GitHubIcon className="cursor-pointer items-center w-12 h-12 m-2 dark:bg-slate-100 rounded-full" />
            </Link>
            <Link href="https://www.linkedin.com/in/jackie-chen-102466240/">
                <LinkedIn className="cursor-pointer items-center w-12 h-12 m-2 dark:bg-slate-100 rounded" />
            </Link>
            <button
                onClick={clickHandler}
                className="rounded-full w-12 h-12 dark:bg-slate-100 border-2 border-black dark:hover:bg-slate-400 hover:bg-slate-400"
            >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
        </div>
    );
};

export default Navbar;
