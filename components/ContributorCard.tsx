import { Contributor } from "../pages/contributors"
import Image from "next/image"
import {FaGithub} from "react-icons/fa"

type ContributorCardType = {
    contributor : Contributor
}

const ContributorCard = ({contributor} : ContributorCardType)=>{
    return(
        <div className="dark:bg-gray-800 bg-gray-50 py-5 rounded-lg flex flex-col items-center w-2/3 mx-auto">
            <div className="w-fit h-fit flex items-center justify-center p-1 border-2 border-purple-500 dark:border-purple-400 dark:border-opacity-60 rounded-full">
                <Image src={contributor.avatar_url} alt="profile image" height="100vw" width="100vw" className="rounded-full" />
            </div>
            <p className="mt-5 dark:bg-green-500 dark:text-green-300 bg-green-200 text-green-500 px-2 rounded-full">{contributor.role_name}</p>
            <p className="dark:text-gray-400 text-gray-500 mt-5 font-semibold">{contributor.login}</p>
            <a href={contributor.html_url} target="_"><FaGithub className="mt-5 text-2xl dark:text-gray-300 text-gray-700" /></a>
        </div>
    )
}

export default ContributorCard