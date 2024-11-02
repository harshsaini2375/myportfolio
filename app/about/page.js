import React from 'react'

const page = () => {

  return (
    <>

      <div className="amain pt-20 md:pt-0 h-screen w-screen md:w-3/4 md:absolute left-[379px] overflow-x-hidden">
        <h1 className="px-5 mb-5 md:mb-0 md:p-10 md:pl-20 text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700">About me&#33;</h1>
        <div className="font-montserrat aboutcontent  text-gray-500  min-h-[80vh] h-fit px-5  md:px-20 pb-10 ">
          <p className="ist  text-2xl text-gray-500 mb-10 " >Hello&#33; I&apos;m Harsh Saini, a passionate web developer . Currently, I&apos;m pursuing my undergraduate degree in Bachelor of Computer Application at the Maharshi Dayanand University Rohtak. 🎓</p>
          
          <h2 className=' text-[32px] text-black mb-2'>Skills and Interests</h2>
          <div className="lang text-lg  mb-2"><span className='text-black mr-3  '>Languages&#x3a; </span><p> I have a strong foundation in JavaScript, HTML, and CSS. I love creating clean, efficient code that brings designs to life.</p></div>
          <div className="lang text-lg  mb-2"><span className='text-black mr-3  '>Frameworks&#x3a;</span><p>I&apos;sve worked with React and Next.js, and I&apos;m always eager to explore new technologies.</p></div>
          <div className="lang text-lg  mb-10"><span className='text-black mr-3  '>Responsive Design&#x3a;</span><p>Crafting user-friendly interfaces that work seamlessly across devices is my jam. </p></div>


          <h2 className=' text-[32px] text-black mb-2'>Beyond Code</h2>
          <p className='text-lg text-black mb-2'>When I&apos;m not immersed in code, you&apos;ll find me&#x3a;</p>
          <p className='text-lg'>Exploring new coffee shops, always on the hunt for the perfect latte ☕.</p>
          <p className='text-lg mb-10'>Sketching and Drawing , it makes me creative and inspired 🎨 .</p>

          
          <h2 className=' text-[32px] text-black mb-2'>Let&apos;s Connect&#33;</h2>
          <p className="text-lg">Feel free to browse my projects , and let&apos;s connect&#33; Whether it&apos;s collaborating on exciting web development ventures or just chatting about tech, I&apos;m all ears. 🚀</p>

        </div> 
      </div>
    </>
  )
}

export default page
