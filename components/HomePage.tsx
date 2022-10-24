import { NextPage } from "next";
import Image from "next/image";
const threadifyFeatures = [
    {
        id: 1,
        icon: "https://api.iconify.design/tabler:activity-heartbeat.svg?color=%233f51b5",
        feature: "Evergreen Threads",
        desc: "By saving your threads on Threadify, you can make them evergreen and easy to access at any time."
    },

    {
        id: 2,
        icon: "https://api.iconify.design/ph:scissors-bold.svg?color=%233f51b5",
        feature: "Manage Threads",
        desc: "Threadify helps you manage your threads easily with its super useful features thus enhancing your User Experience."
    },

    {
        id: 3,
        icon: "https://api.iconify.design/tabler:user.svg?color=%233f51b5",
        feature: "Customizable Profile",
        desc: "Make your profile more professional by including information about yourself and linking your social profiles."
    },

    {
        id: 4,
        icon: "https://api.iconify.design/ph:flag.svg?color=%233f51b5",
        feature: "Open Sourced",
        desc: "Threadify is open-sourced and comes under the MIT license, so you can contribute and improve it too."
    },

    {
        id: 5,
        icon: "https://api.iconify.design/ph:moon.svg?color=%233f51b5",
        feature: "Themeable",
        desc: "Multiple themes are available for customizing your profile, thus enhancing the User Experience of your audience."
    },

    {
        id: 6,
        icon: "https://api.iconify.design/bi:shield.svg?color=%233f51b5",
        feature: "Secure",
        desc: "Threadify believes security is a priority. That is why we never share your personal details with anyone else."
    }
]
const HomePage: NextPage = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-14 mx-auto">
                <div className="flex flex-wrap w-full mb-6 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 dark:text-gray-200 text-gray-900">Never Lose Your Twitter Thread Again!</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Threadify helps you to manage and showcase all of your twitter threads at one place, with the simplicity and security.</p>
                </div>
                <div className="flex justify-center items-center flex-wrap">
                    {threadifyFeatures.map(attribute => {
                        const { id, icon, feature, desc } = attribute;
                        return (
                            <div key={id}>
                                <div className="mx-4 my-8 h-48 w-64 md:w-72">
                                    <div className="text-center border dark:border-gray-600 border-gray-200 p-4 rounded-lg md:text-start">
                                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <Image src={icon} alt="icon" height={25} width={25} />
                                        </div>
                                        <div>
                                            <h2 className="text-lg dark:text-gray-300 text-gray-900 font-medium title-font mb-2">{feature}</h2>
                                            <p className="dark:text-gray-500 leading-relaxed text-base">{desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="pb-8">
                    <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default HomePage;