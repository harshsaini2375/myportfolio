import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <>
            <div className="left  rounded-3xl border-[10px] border-white bg-[#618dea] text-[#cedcf8] w-1/4 h-[99vh] fixed top-0 left-0">

                <div className="up py-12 w-full   flex flex-col justify-center items-center">
                    <div className=" circle border-[1px] border-[#cedcf8] h-24 w-24 rounded-full mb-3"></div>
                    <h1 className="username font-extrabold text-2xl">Harsh Saini</h1>
                    <div className="role">Web Developer</div>

                </div>

                <div className="down  py-5 flex flex-col w-full h-[60vh] pl-20">

                    <Link href="/">
                    <div className="home  cursor-pointer font-bold text-lg w-fit px-5 py-7 h-12   hover:bg-[#3c72e7] rounded-full flex gap-2  items-center ">
                        <img src="home.svg" alt="homesvg" />
                        <span>Home</span>
                    </div>
                    </Link>

                    <Link href="/projects">
                    <div className="projects cursor-pointer font-bold text-lg  w-fit px-5 py-7 h-12 hover:bg-[#3c72e7]  rounded-full flex gap-2  items-center ">
                        <img className="font-bold" src="projects.svg" alt="projectsvg" />
                        <span>Projects</span>
                    </div>
                    </Link>

                    <Link href="/about">
                    <div className="about cursor-pointer font-bold text-lg  w-fit px-5 py-7 h-12 hover:bg-[#3c72e7]  rounded-full flex gap-2  items-center ">
                        <img src="about.svg" alt="aboutsvg" />
                        <span>About</span>
                    </div>
                    </Link>

                    <Link href="/contact">
                    <div className="contact cursor-pointer font-bold text-lg  w-fit px-5 py-7 h-12 hover:bg-[#3c72e7]  rounded-full flex gap-2  items-center ">
                        <img src="contact.svg" alt="contactsvg" />
                        <span>Contact</span>
                    </div>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Sidebar
