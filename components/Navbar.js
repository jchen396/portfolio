import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full h-12 md:fixed bg-transparent">
            <Link href="https://github.com/jchen396">
                <GitHubIcon className="cursor-pointer items-center w-12 h-12 m-2" />
            </Link>
        </div>
    );
};

export default Navbar;
