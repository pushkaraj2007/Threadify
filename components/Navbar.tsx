import { NextPage } from "next";

const Navbar: NextPage = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto justify-between flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <p className="text-[20px]">🧵</p>
                    <span className="ml-3 text-xl">Threadify</span>
                </a>
                <button className="bg-blue-500 flex items-center transition-all hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login with Twitter
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar