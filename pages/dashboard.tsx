import { NextPage } from "next";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Dashboard: NextPage = () => {
  return (
    <main className="bg-gray-100 pt-16 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="flex space-y-6 flex-col justify-center items-center">
        <div className=" flex items-center">
          <div className=" flex items-center flex-col">
            <h1 className="text-2xl md:text-3xl">Pushkaraj Kulkarni</h1>
            <p className="text-base md:text-lg mt-1">@pushkaraj2007</p>
          </div>
        </div>

        <div className="flex">
          <button className="transition-all duration-200 rounded-md p-2 hover:bg-[#c3cbd524]">
            <a className="flex" href="https://twitter.com/pushkaraj2007">
              <FaTwitter className="text-2xl dark:text-gray-300" />
              <p className="ml-3 text-base font-semibold">Follow On Twitter</p>
            </a>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-6 w-full">
        <div className="px-8 md:px-96">
          <p className="text-lg text-center md:text-xl">
            Full-Stack Developer 👨‍💻 | Open source contributor | Currently
            working on http://threadify.vercel.app | Lets Connect 🤝
          </p>
        </div>
      </div>

      <div className="w-full py-10 flex justify-center">
        <div className="w-[50%] flex justify-center">
          <button className="border-blue-600 border-2 p-3 rounded-md transition-all hover:bg-blue-600 font-bold flex">
            + &nbsp;New Tweet
          </button>
        </div>
      </div>

      <div className="container  flex flex-wrap w-full px-3 justify-center tweets-container">
        <div className="flex sm:w-auto w-full flex-wrap">
          <div className="w-full p-4 flex items-center gap-4">
            <div className="border w-96  max-w-full border-gray-500 p-6 rounded-lg transition hover:border-gray-200">
              <div className="flex h-10 space-x-2 items-center rounded-full mb-4">
                {/* <img className="rounded-full" src={session?.user?.image} alt="" /> */}
                <Image
                  className="rounded-full mb-2"
                  src="https://pbs.twimg.com/profile_images/1542490984797184000/ZBxnGwsA_400x400.jpg"
                  width={40}
                  height={40}
                  alt={""}
                />
                <h2 className="text-lg font-medium title-font mb-2">
                  Pushkaraj Kulkarni
                </h2>
              </div>
              <p className="leading-relaxed text-base">
                What is open source? 🤔
                <br /> <br />
                Thread 🧵:
              </p>
            </div>
            <div className="border w-96  max-w-full border-gray-500 p-6 rounded-lg transition hover:border-gray-200">
              <div className="flex h-10 space-x-2 items-center rounded-full mb-4">
                {/* <img className="rounded-full" src={session?.user?.image} alt="" /> */}
                <Image
                  className="rounded-full mb-2"
                  src="https://pbs.twimg.com/profile_images/1542490984797184000/ZBxnGwsA_400x400.jpg"
                  width={40}
                  height={40}
                  alt={""}
                />
                <h2 className="text-lg font-medium title-font mb-2">
                  Pushkaraj Kulkarni
                </h2>
              </div>
              <p className="leading-relaxed text-base">
                What is open source? 🤔
                <br /> <br />
                Thread 🧵:
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
