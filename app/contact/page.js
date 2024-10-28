import Contactcard from '@/components/Contactcard'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='cmain h-screen w-3/4 absolute left-[379px] '>
    <h1 className='p-10  text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700 '>My Activities!!!</h1>
    <div className="contactme w-full h-[82vh] flex px-10 gap-10">
        <Contactcard link="https://x.com/home?lang=en-in" name="Twitter" username="@harshsaini84411" image="twitter.svg" follow="true"/>
        <Contactcard link="https://www.linkedin.com/in/harsh-saini-869466247/" name="Linkedin" username="@harshsaini" image="linkedin.svg" follow="true"/>
        <Contactcard link="https://github.com/harshsaini2375" name="Github" username="@harshsaini2375" image="github.svg" follow="true"/>
        <Contactcard link="" name="Gmail" username="@harshsaini2375" image="gmail.svg" follow="false"/>
    </div>
    </div>
  
    </>
  )
}

export default page
