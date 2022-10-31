import { NextPage } from "next";
import Image from "next/image";
import {FaGithub, FaTwitter} from "react-icons/fa"

const Footer: NextPage = () => {
    return (
        <footer className="text-gray-600 bg-gray-100 body-font dark:bg-gray-900">
            <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
                <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start dark:text-gray-300">
                    <Image width={40} height={40} src="/logo.svg" className="h-12 filter dark:invert" alt="" />                  
                    <span className="ml-3 text-xl">Threadify</span>
                </a>
                <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">© 2022 Threadify —
                    <a href="https://twitter.com/pushkaraj2007" className="ml-1 text-gray-600" rel="noopener noreferrer" target="_blank">Pushkaraj Kulkarni</a>
                </p>
                <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a href="https://github.com/pushkaraj2007/Threadify">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> */}
                        <FaGithub className="mr-5 text-2xl dark:text-gray-300" />
                    </a>
                    <a href="https://twitter.com/pushkaraj2007" className="ml-3">
                        {/* <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg> */}
                        <FaTwitter className="text-2xl dark:text-gray-300" />
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
