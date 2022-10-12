import { NextPage } from "next"
import Head from "next/head"

interface MetaProps{
    title : string,
    description? : string
}

const Meta = ({title = "Threadify",description = "Threadify helps you to manage and showcase all of your twitter threads at one place, with the simplicity and security."}:MetaProps)=>{
    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Meta
