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
        <header className="text-gray-600 body-font">
            <div className="container mx-auto justify-between flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center dark:text-gray-300 text-gray-900 mb-4 md:mb-0">
                    <Image width="40px" height="40px" src="/logo.svg" className="h-12 filter dark:invert" alt="" />
                    <span className="ml-3 text-xl">Threadify</span>
                </a>
                <div className="flex">
                    <button className="mr-7" onClick={toggleTheme}> {theme === "light" ? <FaMoon className="text-gray-900 text-xl" /> : <FaSun className="text-gray-300 text-xl" />}</button>
                    <button className="bg-blue-500 flex items-center transition-all hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login with Twitter
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
