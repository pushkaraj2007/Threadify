import { NextPage } from "next";
import Image from "next/image";
import {useTheme} from "next-themes"
import {FaMoon , FaSun} from "react-icons/fa"

const Navbar: NextPage = () => {
    const {theme, setTheme} = useTheme()
    
    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? "dark" : "light")
    }

    return (
        <header className="text-gray-600 bg-gray-100 body-font dark:bg-gray-900">
            <div className="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row">
                <a className="flex items-center mb-4 font-medium text-gray-900 title-font dark:text-gray-300 md:mb-0">
                    <Image width="40px" height="40px" src="/logo.svg" className="h-12 filter dark:invert" alt="" />
                    <span className="ml-3 text-xl">Threadify</span>
                </a>
                <div className="flex">
                    <button className="mr-7" onClick={toggleTheme}> {theme === "light" ? <FaMoon className="text-xl text-gray-900" /> : <FaSun className="text-xl text-gray-300" />}</button>
                    <button className="flex items-center px-4 py-2 font-bold text-white transition-all bg-blue-500 rounded hover:bg-blue-700">Login with Twitter
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
