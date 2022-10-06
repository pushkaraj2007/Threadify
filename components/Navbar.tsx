import { NextPage } from "next";

const Navbar: NextPage = () => {
    return (
        <div className="navbar bg-base-100 mt-2 shadow-xl rounded-box">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">🧵 Threadify</a>
            </div>
            <div className="navbar-end mr-2">
                <a className="btn btn-primary normal-case text-lg shadow-lg">Login with Twitter</a>
            </div>
            {/* <div className="dropdown dropdown-end text-black">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div> */}
        </div>
    )
}

export default Navbar