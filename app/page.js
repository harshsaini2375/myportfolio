"use client"

import Image from "next/image";
import Skillbox from "@/components/Skillbox";
import SplitText from "@/components/SplitText";

export default function Home() {
  return (
    <>
      <div className="righthome w-screen md:w-3/4 h-screen pb-5 overflow-x-hidden  md:absolute left-[382px]">
        <h1 className="p-10 pl-5 md:pl-10 w-fit pb-0 mt-8 md:mt-0 text-xl md:text-5xl font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700 ">Welcome&#33;</h1>

        <div className="istmainbox bg-[#f3f7ff] p-5 md:p-0 w-full md:w-[75vw] h-fit md:h-[60vh] mt-1 md:mt-10 flex flex-col  justify-center 

        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]
        hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
        transition-shadow duration-300 ">

          <div className="introandistphoto flex-col md:flex-row flex items-center justify-center md:gap-10  ">
            <div className="intro">
              {/* i copied this code from react bit - splittext */}
            
          <SplitText
                text="Hey, I'm Harsh "
                className="h-[12vh] font-montserrat  text-xl font-extrabold text-[#ff686b] dark:text-white md:text-5xl lg:text-6xl text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              // onLetterAnimationComplete={handleAnimationComplete}
              />

              <p className="md:text-xl text-base w-full md:w-[30vw] h-fit font-montserrat">I love to build Projects related to Web & Problem Solving.  Exploring the possibilities .</p>
            </div>
            
            <div className="istphoto w-full md:mt-0  mt-5 md:w-[30vw] h-[36vh] md:h-[45vh]  rounded-xl overflow-hidden"><Image width={900} height={900} className=" h-fit w-fit object-cover" src="/webdev.gif" alt="randompic" unoptimized /></div>

          </div>
          <a href="/resume.pdf" download="Harsh_saini_Resume.pdf" className="w-fit" >
            <button type="button" className="resume md:ml-[75px]  mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download My Resume</button> </a>

        </div>

        <div className="myintro w-full md:w-[75vw] mt-10 px-4 md:px-10">
          <h1 className="text-3xl mb-3 w-fit font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700  ">Intro</h1>
          <p className="font-montserrat text-lg">I am a MERN stack developer with a passion for building full-stack applications from the ground up. As a self-taught programmer, I thrive on turning ideas into functional, user-friendly web apps using modern JavaScript technologies. While I am early in my journey, I have already built projects like an e-commerce website and a linktree app, sharpening my skills in both frontend design and backend logic. I am obsessed with clean code, learning new frameworks. Lets connect and grow together in this ever-evolving tech world.</p>
        </div>

        <div className="myskills w-full md:w-[75vw] mt-8 h-fit px-4 md:px-10 ">

          <h1 className="text-3xl mb-3 w-fit font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700 ">Skills</h1>
          <h2 className="skills_heading text-center font-montserrat text-sm md:text-lg my-5 font-bold">My key expertises and technical proficiencies</h2>

          <div className="istline flex gap-5 flex-wrap justify-center items-center mb-5">
            <Skillbox img="ReactJS" text="ReactJS" />
            <Skillbox img="NextJS" text="NextJS" />
            <Skillbox img="Redux" text="Redux" />
            <Skillbox img="HTML" text="HTML" />
            <Skillbox img="CSS" text="CSS" />
            <Skillbox img="JavaScript" text="JavaScript" />
            <Skillbox img="TypeScript" text="TypeScript" />
          </div>
          <div className="2line flex gap-5 justify-center flex-wrap items-center mb-5">
            <Skillbox img="Tailwind" text="Tailwind" />
            <Skillbox img="ExpressJS" text="ExpressJS" />
            <Skillbox img="NodeJS" text="NodeJS" />
            <Skillbox img="MySql" text="MySql" />
            <Skillbox img="MongoDB" text="MongoDB" />
          </div>
          <div className="3line flex gap-5 flex-wrap justify-center items-center mb-5">
            <Skillbox img="Git" text="Git" />
            <Skillbox img="github" text="GitHub" />
            <Skillbox img="vercel" text="Vercel" />
          </div>

        </div>

      </div>

    </>
  );
}
