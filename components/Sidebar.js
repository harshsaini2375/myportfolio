import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <>
            <div className="left  border-r-2 border-black w-1/4 h-[99vh] fixed top-0 left-0">

                <div className="up py-12 w-full flex flex-col justify-center items-center">
                    <div className=" circle border-[1px] border-black h-24 w-24 rounded-full mb-3"></div>
                    <h1 className="username font-extrabold text-2xl">Harsh Saini</h1>
                    <div className="role">Web Developer</div>

                </div>

                <div className="down space-y-5 w-full h-[60vh] pl-16">

                    <Link href="/">
                    <div className="home  cursor-pointer font-bold text-lg w-fit px-7 h-12 hover:bg-[#f3f7ff] rounded-full flex gap-2  items-center ">
                        <img src="home.svg" alt="homesvg" />
                        <span>Home</span>
                    </div>
                    </Link>

                    <Link href="/projects">
                    <div className="projects cursor-pointer font-bold text-lg  w-fit px-7 h-12 hover:bg-[#f3f7ff]  rounded-full flex gap-2  items-center ">
                        <img className="font-bold" src="projects.svg" alt="projectsvg" />
                        <span>Projects</span>
                    </div>
                    </Link>

                    <Link href="/about">
                    <div className="about cursor-pointer font-bold text-lg  w-fit px-7 h-12 hover:bg-[#f3f7ff]  rounded-full flex gap-2  items-center ">
                        <img src="about.svg" alt="aboutsvg" />
                        <span>About</span>
                    </div>
                    </Link>

                    <Link href="/contact">
                    <div className="contact cursor-pointer font-bold text-lg  w-fit px-7 h-12 hover:bg-[#f3f7ff]  rounded-full flex gap-2  items-center ">
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
