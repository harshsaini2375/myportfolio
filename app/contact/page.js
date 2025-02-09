"use client"

import Contactcard from '@/components/Contactcard'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const Page = () => {

  const [form, setform] = useState({ user: "", email: "", subject: "", message: "" })

  const handleform = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "user": form.user,
    "email": form.email,
    "subject": form.subject,
    "message": form.message,
});

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  await fetch(`${process.env.NEXT_PUBLIC_HOST}api/submit`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  
}

  return (
    <>
      <div className='cmain flex flex-col items-center  h-fit md:h-screen w-screen md:w-[74%] md:absolute left-[379px] pt-11 md:pt-0 px-4 md:px-0 pb-5 md:pb-0'>
      
        <h1 className='text-center md:pb-5  md:p-10 pt-7 md:pt-5 text-4xl md:text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700 '>Contact Me</h1>
        <p className='w-screen md:w-[60%] text-center text-base md:text-2xl text-slate-500 mt-2 md:mt-0'>If you like to chat about a project or just have question, please fill in the form below. I aim to get back within 2 days.</p>

        <form onSubmit={(e) => { handleSubmit(e)} }>
          <div className="form mt-5 md:mt-11 w-[90vw] md:w-[45vw] h-[72vh] ">
            <div className="name flex justify-between ">
              <div className='w-[47%] h-fit'>
                <span className='text-base md:text-lg' >Name <span className='text-xl text-red-500'> &#42;</span></span>
                <input type="text" value={form.user} onChange={(e) => { handleform(e) }} name='user' className='mt-0 md:mt-2 pl-5 w-full h-12 border-2 border-slate-300 rounded-lg' />
              </div>
              <div className='w-[47%] h-fit'>
                <span className='text-base md:text-lg' >Email <span className='text-xl text-red-500'> &#42;</span></span>
                <input type="email" name='email' value={form.email} onChange={(e) => { handleform(e) }} className='mt-0 md:mt-2 pl-5  w-full h-12 border-2 border-slate-300 rounded-lg' />
              </div>
            </div>
            <div className="subject  mt-4 md:mt-7">
              <span className='text-base md:text-lg' >Subject <span className='text-xl text-red-500'> &#42;</span></span>
              <input type="text" name='subject' value={form.subject} onChange={(e) => { handleform(e) }} className='mt-0 md:mt-2 pl-5  w-full h-12 border-2 border-slate-300 rounded-lg' />
            </div>

            <div className="message  mt-4 md:mt-7">
              <span className='text-base md:text-lg' >Message <span className='text-xl text-red-500'> &#42;</span></span>
              
              <textarea type="text" name='message' value={form.message} onChange={(e) => { handleform(e) }} className='resize-none mt-2 px-5 py-2  w-full h-[25vh] border-2 border-slate-300 rounded-lg' ></textarea>
            </div>

            <button type='submit' disabled={form.user.length == 0 || form.email.length == 0 || form.subject.length == 0 || form.message.length == 0  } className=' mt-1 md:mt-7 text-base py-3 px-5 disabled:opacity-40 rounded-full bg-[#0284c7] text-white'>Send Message</button>

          </div>
        </form>
       

        <div className="contactme  mt-0 md:mt-16 w-full h-fit md:h-[82vh] flex-wrap flex md:pl-[14vw]   gap-5 md:gap-10">
          <Contactcard link="https://x.com/home?lang=en-in" name="Twitter" username="&#x40;harshsaini84411" image="twitter.svg" follow="true" />
          <Contactcard link="https://www.linkedin.com/in/harsh-saini-869466247/" name="Linkedin" username="&#x40;harshsaini" image="linkedin.svg" follow="true" />
          <Contactcard link="https://github.com/harshsaini2375" name="Github" username="&#x40;harshsaini2375" image="github.svg" follow="true" />

        </div>
        
      </div>

    </>
  )
}

export default Page
