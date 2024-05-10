import { IoHomeOutline, IoCog  } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";
import Link from "next/link";



const Sidebar = () => {
    return (
        <>
            <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                <li>
                    <Link href={"/dashboard"}>
                    <IoHomeOutline />
                        <span className="mt-1 capitalize">dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/dashboard/users"}>
                    <FiUsers />
                    <span className="mt-1 capitalize">users</span>
                    </Link>
                </li>
                <li>
                    <details>
                    <summary><IoCog /><span className="capitalize">settings</span></summary>
                    <ul>
                        <li><a className="capitalize">roles</a></li>
                        <li><a className="capitalize">resources</a></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <a>
                        <AiOutlinePoweroff />
                        <span className="mt-1 capitalize">logout</span>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Sidebar;