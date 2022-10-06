import { NextPage } from "next";

const Navbar: NextPage = () => {
    return (
        <div className="navbar bg-primary text-primary-content rounded-3xl mt-2">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">🧵 Threadify</a>
            </div>
            <div className="navbar-end mr-2">
                <a className="btn btn-primary normal-case text-lg shadow-lg">Login with Twitter</a>
            </div>
        </div>
    )
}

export default Navbar