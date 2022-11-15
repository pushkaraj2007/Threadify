import { NextPage } from "next";
import { GrMail, GrTwitter } from "react-icons/gr"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EarlyAccess: NextPage = () => {

    const sendData = async (e:any) => {
        e.preventDefault()

        const email = (document.getElementById('email') as HTMLInputElement).value;
        const twitterUsername = (document.getElementById('twitterUsername') as HTMLInputElement).value.replace(/\s/g,'');

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return(
                console.log(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)),
                toast.error('Invalid email address, please try again with different email')
            )
        }

        if(twitterUsername.length < 1){
            return(
                toast.error('Invalid twitter username')
            )
        }

        const res = await fetch('/api/signup-early-access', {
            method: 'post',
            body: JSON.stringify({ email: email, twitterUsername: twitterUsername})
        })
        const response = await res.json()
        console.log(response)
        toast.success(response.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <main className="h-[82vh] bg-gray-100 pt-4 dark:bg-gray-900 flex items-center justify-center text-gray-900 dark:text-gray-200">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="flex w-[100%] justify-center">
                <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">Be the first person to get updates about Threadify time to time</p>
                    <p className="text-xl font-bold mt-1">Sign up for the early access 🚀</p>
                    <form className="flex flex-col items-center mt-4" onSubmit={sendData}>
                        <div className="mt-6">
                            <GrMail className="absolute m-1 text-[17px]" />
                            <input className="bg-transparent w-72 pl-7 border-b-2 outline-none border-b-orange-400" id="email" placeholder="Your Email Address" />
                        </div>

                        <div className="mt-6">
                            <GrTwitter className="absolute m-1 text-[17px]" />
                            <input className="bg-transparent w-72 border-b-2 pl-7 outline-none border-b-orange-400" id="twitterUsername" type="text" placeholder="Your Twitter Username" />
                        </div>

                        <button className="mt-6 px-4 py-2 font-bold text-white transition-all bg-blue-500 rounded hover:bg-blue-700" type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </main>
    )
}

export default EarlyAccess;