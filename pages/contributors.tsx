import { NextPage } from "next";
import Image from "next/image"
import ContributorCard from "../components/ContributorCard";

export type Contributor = {
    login : string,
    avatar_url: string,
    html_url: string,
    role_name: string
}

type ContributorsPageProps = {
    contributors : Array<Contributor>
}

const ContributorsPage = ({contributors} : ContributorsPageProps)=>{
    return(
        <div className="h-screen bg-gray-100 dark:bg-gray-900 px-14" >
            <h3 className=" text-center font-bold text-2xl dark:text-gray-200 text-gray-900">Threadify is possible because of all these contributors!</h3>
            <div className="mt-16 grid gap-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {contributors.map((contributor,i) => <ContributorCard key={i} contributor={contributor} />)}
            </div>
        </div>
    )
}

export const getStaticProps = async()=>{
    const githubUser = process.env.GITHUB_USER
    const githubApiKey = process.env.GITHUB_API_KEY

    const res = await fetch(`https://api.github.com/repos/${githubUser}/Supabase-Tutorial/collaborators`,{headers:{"Accept":"Accept: application/vnd.github+json","Authorization":`Bearer ${githubApiKey}`}})
    const data = await res.json()

    return{
        props : {contributors: data}
    }
}

export default ContributorsPage