import { NextPage } from "next";

const HomePage: NextPage = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Never Lose Your Twitter Thread Again!</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Threadify helps you to manage and showcase all of your twitter threads at one place, with the simplicity and security.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Evergreen Threads</h2>
                            <p className="leading-relaxed text-base">By saving your threads on Threadify, you can make them evergreen.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Manage Threads</h2>
                            <p className="leading-relaxed text-base">Threadify helps you to manage your threads easily with it's super useful features.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Customizable Profile</h2>
                            <p className="leading-relaxed text-base">You can customize your profile professionally by adding a bit about yourself and linking your social profiles.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Open Sourced</h2>
                            <p className="leading-relaxed text-base">Threadify is open sourced and comes under MIT license, so you can improve it too.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Multiple themes</h2>
                            <p className="leading-relaxed text-base">Multiple themes available for customizing your profile, so your audience can get a seamless experience.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Secure</h2>
                            <p className="leading-relaxed text-base">Threadify believes in security is the priority, That's why we never share your information with anyone else.</p>
                        </div>
                    </div>
                </div>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
            </div>
        </section>
    )
}

export default HomePage