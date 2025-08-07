import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='cmain justify-center flex flex-col items-center h-screen w-screen md:w-[74%] md:absolute left-[379px] pt-20 md:pt-0 px-4 md:px-0 pb-5 md:pb-0'>

      <div className="card  bg-blue-50 h-[50vh] md:h-[50vh] md:w-[35vw] w-[90vw] rounded-3xl px-1 md:px-5 py-10 flex flex-col items-center ">
        <Image width={40} height={40}  src="/greencheck.svg" alt="check" unoptimized />
        <h1 className='text-center my-5 text-base md:text-2xl font-bold'>Your message has been successfully sent.</h1>
        <p className='text-sm md:text-base'>I appreciate you for taking the time to contact me. I will review your email and get back to you as soon as possible&#44;	 typically within 24 &#45; 48 hours.</p>

        {/* back to home button - code from uiverse.io */}
        <Link href="/">
        <div className="animatedbutton mt-10 ">
        <button
          className="bg-white text-center w-52 pl-8 rounded-2xl h-14 relative text-black text-xl font-semibold group "
          type="button"
        >
          <div
            className="bg-[#618dea] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[200px] z-10 duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="25px"
              width="25px"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#000000"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <p className="translate-x-2">Back to Home</p>
        </button>
          </div>
        </Link>

      </div>


    </div>
  )
}

export default page
