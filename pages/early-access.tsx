import { NextPage } from "next";
import { GrMail, GrTwitter } from "react-icons/gr"

const EarlyAccess: NextPage = () => {
    return(
        <main className="h-[82vh] bg-gray-100 pt-4 dark:bg-gray-900 flex items-center justify-center text-gray-900 dark:text-gray-200">
            <div className="flex w-[100%] justify-center">
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">Be the first person to get updates about Threadify time to time</p>
                    <p className="text-xl font-bold">Sign up for the early access 🚀</p>
                    
                    <form className="flex flex-col items-center">
                        <div className="mt-6">
                            <GrMail className="absolute m-1 text-[17px]" />
                            <input className="bg-transparent w-72 pl-7 border-b-2 outline-none border-b-orange-400" type="email" placeholder="Your Email Address" required />
                        </div>

                        <div className="mt-6">
                            <GrTwitter className="absolute m-1 text-[17px]" />
                            <input className="bg-transparent w-72 border-b-2 pl-7 outline-none border-b-orange-400" type="text" placeholder="Your Twitter Username" required />
                        </div>

                        <button className="mt-5 px-4 py-2 font-bold text-white transition-all bg-blue-500 rounded hover:bg-blue-700" type="submit">Submit</button>
                    </form>

                </div>
            </div>            
        </main>
    )
}

export default EarlyAccess;