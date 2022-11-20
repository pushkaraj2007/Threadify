import { NextPage } from "next";
import { FaTwitter } from "react-icons/fa"
import { useEffect, useState } from "react";
import Image from "next/image";

const Dashboard: NextPage = () => {

    return (
        <main className="bg-gray-100 pt-4 dark:bg-gray-900 h-[81vh] text-gray-900 dark:text-gray-200">
            <div className="flex justify-center items-center">
                <div className="ml-10 flex items-center">
                    <div className="ml-3 flex items-center flex-col">
                        <h1 className="text-3xl">Pushkaraj Kulkarni</h1>
                        <p className="text-lg mt-1">@pushkaraj2007</p>
                    </div>
                </div>

                <div className="flex ml-32">
                    <button>
                        <a className="flex" href="https://twitter.com/pushkaraj2007">
                            <FaTwitter className="text-2xl dark:text-gray-300" />
                            <p className="ml-3 text-base font-semibold">Follow On Twitter</p>
                        </a>
                    </button>
                </div>
            </div>

            <div className="flex justify-center mt-5 w-[100%]">
                <div className=" w-1/2">
                    <p className="text-xl">Full-Stack Developer 👨‍💻 | Open source contributor | Currently working on http://threadify.vercel.app | Let's Connect 🤝</p>
                </div>
            </div>

            <div className="w-[100%] py-10 flex justify-center">
                <div className="w-[50%] flex justify-end">
                    <button className="border-violet-600 border-2 p-3 text-success font-bold flex">+ &nbsp;New Tweet</button>
                </div>
            </div>

            <div className="container flex flex-wrap px-5 mx-auto tweets-container">
                <div className="flex flex-wrap -m-4">
                    <div className=" w-[400px] p-4">
                        <div className="border border-gray-500 p-6 rounded-lg transition hover:border-gray-200">
                            <div className="flex h-10 items-center rounded-full mb-4">
                                {/* <img className="rounded-full" src={session?.user?.image} alt="" /> */}
                                <Image className="rounded-full mb-2" src="https://pbs.twimg.com/profile_images/1542490984797184000/ZBxnGwsA_400x400.jpg" width={35} height={35} alt={""} />
                                <h2 className="text-lg ml-2 font-medium title-font mb-2">Pushkaraj Kulkarni</h2>
                            </div>
                            <p className="leading-relaxed text-base">What is open source? �<br /> <br />\n Thread �:</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard;