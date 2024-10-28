import React from 'react'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets:['latin'],
  weight:['400']
})

const page = () => {
  // lassName={inter.className}
  return (
    <>

      <div className="amain h-screen w-3/4 absolute left-[379px]">
        <h1 className="p-10  text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-100  to-sky-600 text-center">About me!</h1>
        <div className="aboutcontent text-gray-500 border-2 border-black min-h-[80vh] h-fit  px-20 pb-10">
          <p className="ist text-xl text-gray-500 mb-10">Hello! I'm Harsh Saini, a passionate web developer . Currently, I'm pursuing my undergraduate degree in Bachelor of Computer Application at the Maharshi Dayanand University Rohtak. 🎓</p>

        </div>
      </div>
    </>
  )
}

export default page
