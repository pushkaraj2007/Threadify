import { NextPage } from "next";
import { useSession, signIn } from 'next-auth/react'
import { JSXElementConstructor } from "react";
import ProfileDropdown from "./ProfileDropdown";

const HomePage: NextPage = () => {

    const {data: session} = useSession()

    console.log(session)

    return (
        <section className="text-gray-600 body-font">
            {/* <ProfileDropdown /> */}
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
                    <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font dark:text-gray-200">Never Lose Your Twitter Thread Again!</h1>
                    <p className="w-full leading-relaxed text-gray-500 dark:text-gray-400 lg:w-1/2">Threadify helps you to manage and showcase all of your twitter threads at one place, with the simplicity and security.</p>
                </div>
                <div className="flex flex-wrap flex-grow -m-4">
                    <Card
                        path={<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>}
                        title="Evergreen Threads"
                        description="By saving your threads on Threadify, you can make them evergreen."
                    />
                    <Card
                        path={<>
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </>}
                        title="Manage Threads"
                        description="Threadify helps you to manage your threads easily with its super useful features."
                    />
                    <Card
                        path={<><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle></>}
                        title="Customizable Profile"
                        description="You can customize your profile professionally by adding a bit about yourself and linking your social profiles."
                    />
                    <Card
                        path={<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>}
                        title="Open Sourced"
                        description="Threadify is open sourced and comes under MIT license, so you can improve it too."
                    />
                    <Card
                        path={<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>}
                        title="Multiple themes"
                        description="Multiple themes available for customizing your profile, so your audience can get a seamless experience."
                    />
                    <Card
                        path={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>}
                        title="Secure"
                        description="Threadify believes in security is the priority, Thats why we never share your information with anyone else."
                    />
                </div>
                <button className="flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600" onClick={()=> signIn('twitter', { callbackUrl: 'http://localhost:3000/api/twitter/user' })}>Get Started</button>
            </div>
        </section>
    )
}

const Card: React.FC<React.HTMLAttributes<HTMLDivElement> & {
    path: React.ReactElement<SVGPathElement, JSXElementConstructor<any>>,
    title: string,
    description: string
}> = ({
    path,
    title,
    description,
    ...props
}) => {
    return (
        <div className="p-4 xl:w-1/3 md:w-1/2 sm:max-md:min-w-full" {...props}>
            <div className="p-6 min-h-full border border-gray-300 rounded-lg dark:border-gray-600">
                <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                            {path}
                        </svg>
                    </div>
                    <h2 className="mb-2 text-xl font-medium text-gray-900 dark:text-gray-200 title-font relative bottom-1">
                        {title}
                    </h2>
                </div>
                <p className="text-base leading-relaxed dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default HomePage