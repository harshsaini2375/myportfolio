'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import { usePathname } from "next/navigation";



const Sidebar = () => {
    const [home, sethome] = useState(false)
    const [project, setproject] = useState(false)
    const [about, setabout] = useState(false)
    const [contact, setcontact] = useState(false)

   
    let path = usePathname()


    useEffect(() => {      
        forfocus(path);
    }, [path])


    const forfocus = (value) => {
        if (value == 'valhome' || value == '/') {
            sethome(true)
            setproject(false)
            setabout(false)
            setcontact(false)
            console.log('home clicked');

        }
        else if (value == 'valproject'  || value == '/projects') {
            sethome(false)
            setproject(true)
            setabout(false)
            setcontact(false)
            console.log('project clicked');
        }
        else if (value == 'valabout'  || value == '/about') {
            sethome(false)
            setproject(false)
            setabout(true)
            setcontact(false)
            console.log('about clicked');
        }
        else if (value == 'valcontact'  || value == '/contact') {
            sethome(false)
            setproject(false)
            setabout(false)
            setcontact(true)
            console.log('contact clicked');
        }
        else {
            console.log('click something');
        }
    }




    return (
        <>
            <div className="left  rounded-3xl border-[5px] md:border-[10px] border-white bg-[#618dea]  text-[#cedcf8] w-[100vw] md:w-1/4 h-[70px] md:h-[99vh] fixed top-0 left-0 md:block  flex">
        
                         <div className="up md:py-12 w-fit md:w-full md:mr-0 mr-3  md:flex flex-col justify-center items-center ">
                    <div className=" circle border-[1px]  border-[#cedcf8] h-12 w-12 md:h-24 md:w-24 rounded-full ml-[6px] mt-[6px] md:m-0 md:mb-3 overflow-hidden relative"><Image   className='h-fit w-fit object-contain' fill style={{ objectFit: 'cover' }} src="/newpp.jpg" alt="profilepic" /></div>
                    <h1 className="username md:block hidden font-extrabold text-2xl text-white">Harsh Saini</h1>
                    <div className="role md:block hidden">Web Developer</div>

                </div>

                <div className="down relative md:py-5  flex flex-row md:flex-col w-full h-fit md:h-[60vh] md:pl-20">

                    <Link className='h-fit' href="/">
                        <div onClick={() => { forfocus('valhome') }} className={home ? "home text-white  cursor-pointer font-bold text-base md:text-lg  w-fit md:px-5 px-2 py-7 h-12   md:hover:bg-[#3c72e7]  rounded-full flex gap-2  items-center " : "home    cursor-pointer font-bold text-base md:text-lg w-fit md:px-5 px-2 py-7 h-12   md:hover:bg-[#3c72e7]  rounded-full flex gap-2  items-center "}>
                            <div className={home ? "line md:block hidden transition-all duration-500 ease-in-out bg-white w-1 h-12 rounded-full absolute left-1" : "line md:block hidden transition-all duration-500 ease-in-out bg-[#618dea] w-1 h-12 rounded-full absolute left-1"}></div>
                            <Image height={30} width={30} className='md:block hidden' src={home ? "whitehome.svg" : "home.svg"} alt="homesvg" />
                            <span className=''>Home</span>
                        </div>
                    </Link>

                    <Link href="/projects">
                        <div onClick={() => { forfocus('valproject') }} className={project ? "projects text-white cursor-pointer font-bold text-base md:text-lg  w-fit md:px-5 px-2 py-7 h-12 md:hover:bg-[#3c72e7]  rounded-full flex gap-2  items-center " : "projects cursor-pointer font-bold text-base md:text-lg  w-fit md:px-5 px-2 py-7 h-12 md:hover:bg-[#3c72e7]  rounded-full flex gap-2  items-center "}>
                            <div className={project ? "line md:block hidden transition-all duration-500 ease-in-out bg-white w-1 h-12 rounded-full absolute left-1" : "line md:block hidden transition-all duration-500 ease-in-out bg-[#618dea] w-1 h-12 rounded-full absolute left-1"}></div>
                            <Image height={30} width={30} className="font-bold md:block hidden" src={project ? "whiteprojects.svg" : "projects.svg"} alt="projectsvg" />
                            <span>Projects</span>
                        </div>
                    </Link>

                    <Link href="/about">
                        <div onClick={() => { forfocus('valabout') }} className={about ? "about text-white cursor-pointer font-bold text-base md:text-lg  w-fit md:px-5 px-2 py-7 h-12 md:hover:bg-[#3c72e7]  rounded-full flex gap-2  items-center " : "about cursor-pointer font-bold text-base md:text-lg  w-fit md:px-5 px-2 py-7 h-12 md:hover:bg-[#3c72e7]    rounded-full flex gap-2  items-center "}>
                            <div className={about ? "line md:block hidden transition-all duration-500 ease-in-out bg-white w-1 h-12 rounded-full absolute left-1" : "line md:block hidden transition-all duration-500 ease-in-out bg-[#618dea] w-1 h-12 rounded-full absolute left-1"}></div>
                            <Image height={30} width={30} className='md:block hidden' src={about ? "whiteabout.svg" : "about.svg"} alt="aboutsvg" />
                            <span>About</span>
                        </div>
                    </Link>

                    <Link href="/contact">
                        <div onClick={() => { forfocus('valcontact') }} className={contact ? "contact text-white cursor-pointer font-bold text-base md:text-lg  w-fit md:px-5 px-2 py-7 h-12 md:hover:bg-[#3c72e7]  rounded-full flex gap-2  items-center " : "contact cursor-pointer font-bold text-base md:text-lg  w-fit md:px-5 px-2 py-7 h-12  md:hover:bg-[#3c72e7]  rounded-full flex gap-2  items-center "}>
                            <div className={contact ? "line md:block hidden transition-all duration-500 ease-in-out bg-white w-1 h-12 rounded-full absolute left-1" : "line md:block hidden transition-all duration-500 ease-in-out bg-[#618dea] w-1 h-12 rounded-full absolute left-1"}></div>
                            <Image height={30} width={30} className='md:block hidden' src={contact ? "whitecontact.svg" : "contact.svg"} alt="contactsvg" />
                            <span>Contact</span>
                        </div>
                    </Link>
                </div>
                    
            </div>

        </>
    )
}

export default Sidebar
