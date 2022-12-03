import { NextPage } from "next";
import Image from "next/image";
import { useSession } from 'next-auth/react'
import {useEffect, useState} from 'react'

const Profile: NextPage = () => {

    const { data: session } = useSession()
    const [state, setState] = useState<any>([])

    async function getData() {
        const res = await fetch('/api/twitter/user')
        const data = await res.json()
        setState(data)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <main className="h-[100vh] bg-gray-100 pt-16 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            <div className="flex items-center flex-col lg:flex-row mt-8">
                <div className="w-1/3 !pl-16">
                    <Image height={300} width={300} src={session?.user.data.profile_image_url.replace('normal', '400x400') as string} className=" rounded-full" />
                </div>

                <div className="w-[615px]">
                    <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full md:w-5/6 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 font-bold text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={session?.user.data.name} readOnly />
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full md:w-5/6 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-username">
                                Username
                            </label>
                            <input className="appearance-none block w-full font-bold bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-username" type="text" value={session?.user.data.username} readOnly />
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-3 mb-2">
                        <div className="w-full md:w-5/6 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                Bio
                            </label>
                            <textarea className="appearance-none font-bold block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-24 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" value={state?.data?.description} placeholder="Bio" />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Profile