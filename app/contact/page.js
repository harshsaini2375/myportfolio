import Contactcard from '@/components/Contactcard'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='cmain mt-14 h-fit md:h-screen w-screen md:w-[74%] md:absolute left-[379px] px-4 md:px-0 '>
    <h1 className=' md:p-10 pt-7 md:pt-10 text-4xl md:text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700 '>My Activities!</h1>
    <div className="contactme mt-7 md:mt-0 w-full h-fit md:h-[82vh] flex-wrap flex md:px-10 gap-5 md:gap-10">
        <Contactcard link="https://x.com/home?lang=en-in" name="Twitter" username="&#x40;harshsaini84411" image="twitter.svg" follow="true"/>
        <Contactcard link="https://www.linkedin.com/in/harsh-saini-869466247/" name="Linkedin" username="&#x40;harshsaini" image="linkedin.svg" follow="true"/>
        <Contactcard link="https://github.com/harshsaini2375" name="Github" username="&#x40;harshsaini2375" image="github.svg" follow="true"/>
        {/* <Contactcard link="" name="Gmail" username="&#x40;harshsaini2375" image="gmail.svg" follow="false"/> */}
    </div>
    </div>
  
    </>
  )
}

export default page
