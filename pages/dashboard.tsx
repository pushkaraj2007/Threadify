import { NextPage } from "next";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react'
import Swal from 'sweetalert2'

const Dashboard: NextPage = () => {

  const { data: session } = useSession()

  async function handelTweetFetch(url: string) {
    try {
      const res = await fetch('/api/twitter/fetch-tweet', {
        method: 'post',
        body: JSON.stringify({ tweetUrl: url })
      })

      const tweetData = await res.json()

      console.log(tweetData)

      const tweetsContainer = document.querySelector('.tweets-container')
      const tweetBox = document.createElement('div')
      tweetBox.classList.add('border', 'w-96', 'max-w-full', 'border-gray-500', 'p-6', 'rounded-lg', 'transition', 'hover:border-gray-200')

      tweetBox.innerHTML = `
      <div class="flex h-10 space-x-2 items-center rounded-full mb-4">
        <img class="rounded-full mb-2" src=${tweetData.includes.users[0].profile_image_url} width={35} height={35} alt={""} />
        <h2 class="text-lg font-medium title-font mb-2">${tweetData.includes.users[0].name}</h2>
      </div>
      <p class="leading-relaxed text-base">${tweetData.data.text.replace(/\n/g, "<br />")}</p>`

      tweetsContainer?.append(tweetBox)
    } catch (error) {
      alert('Something went wrong')
      console.log(error)
    }
  }

  return (
    <main className=" h-[100vh] bg-gray-100 pt-16 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="flex space-y-6 flex-col justify-center items-center">
        <div className=" flex items-center">
          <div className=" flex items-center flex-col">
            <h1 className="text-2xl md:text-3xl">{session?.user.data.name}</h1>
            <p className="text-base md:text-lg mt-1">@{session?.user.data.username}</p>
          </div>
        </div>

        <div className="flex">
          <button className="transition-all duration-200 rounded-md p-2 hover:bg-[#c3cbd524]">
            <a className="flex" href={`https://twitter.com/${session?.user.data.username}`}>
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
          <button className="border-blue-600 border-2 p-3 rounded-md transition-all hover:bg-blue-600 font-bold flex" onClick={async () => {
            Swal.fire({
              input: 'url',
              inputLabel: 'URL address',
              inputPlaceholder: 'Enter the tweet URL',
              showLoaderOnConfirm: true,
              preConfirm: (tweetUrl) => { handelTweetFetch(tweetUrl) },
              allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'Saved',
                  'Your Tweet has been saved successfully',
                  'success'
                )
              }
            })

          }}>
            + &nbsp;New Tweet
          </button>
        </div>
      </div>

      <div className="container  flex flex-wrap w-full px-3 justify-center">
        <div className="flex sm:w-auto w-full flex-wrap">
          <div className="w-full p-4 flex items-center gap-4 tweets-container">
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
