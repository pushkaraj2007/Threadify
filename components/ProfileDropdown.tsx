import { NextPage } from "next";
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useRef } from "react";
import { FaUser } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import { IoMdLogOut } from 'react-icons/io'
import Image from 'next/image'

const ProfileDropdown: NextPage = () => {

    const {data: session} = useSession()

    const handleProfileDropdownClick = () => {
        let dropdownDiv = document.querySelector('.dropdown-div')

        console.log(dropdownDiv?.className.split(' ').includes('block'))

        if (dropdownDiv?.className.split(' ').includes('block')) {
            dropdownDiv?.classList.remove('block')
            dropdownDiv?.classList.add('hidden')
        }
        else {
            dropdownDiv?.classList.remove('hidden')
            dropdownDiv?.classList.add('block')
        }
    }

    function useOutsideAlerter(ref: any) {
        useEffect(() => {

            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    let dropdownDiv = document.querySelector('.dropdown-div')
                    if (dropdownDiv?.className.split(' ').includes('block')) {
                        handleProfileDropdownClick();
                    }
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <>
            <Image className="cursor-pointer rounded-full" height={40} width={40} src={session?.user?.image as string} onClick={() => { handleProfileDropdownClick() }} alt="" />
            <div ref={wrapperRef} className="dropdown-div hidden bg-black h-36 w-48 mt-12 rounded-lg shadow-xl shadow-gray-800 absolute text-white">

                <Link href="/profile">
                    <a href="/profile">
                        <div className="h-1/3 flex items-center pl-2 cursor-pointer transition hover:bg-gray-800"><FaUser /> &nbsp; Profile</div>
                    </a>
                </Link>
                <Link href="/dashboard">
                    <a href="/dashboard">
                        <div className="h-1/3 flex items-center pl-2 cursor-pointer transition hover:bg-gray-800"><MdSpaceDashboard /> &nbsp; Dashboard</div>
                    </a>
                </Link>
                
                <div className="h-1/3 flex items-center pl-2 cursor-pointer transition hover:bg-gray-800" onClick={()=> {signOut()}}><IoMdLogOut /> &nbsp; Logout</div>
            </div>
        </>
    )
}

export default ProfileDropdown