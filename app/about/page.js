import React from 'react'

const page = () => {

  return (
    <>

      <div className="amain h-screen w-3/4 absolute left-[379px] overflow-x-hidden">
        <h1 className="p-10 pl-20 text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700">About me!</h1>
        <div className="font-montserrat aboutcontent  text-gray-500  min-h-[80vh] h-fit  px-20 pb-10 ">
          <p className="ist  text-2xl text-gray-500 mb-10 " >Hello! I'm Harsh Saini, a passionate web developer . Currently, I'm pursuing my undergraduate degree in Bachelor of Computer Application at the Maharshi Dayanand University Rohtak. 🎓</p>
          
          <h2 className=' text-[32px] text-black mb-2'>Skills and Interests</h2>
          <div className="lang text-lg  mb-2"><span className='text-black mr-3  '>Languages:</span><p> I have a strong foundation in JavaScript, HTML, and CSS. I love creating clean, efficient code that brings designs to life.</p></div>
          <div className="lang text-lg  mb-2"><span className='text-black mr-3  '>Frameworks:</span><p>I've worked with React and Next.js, and I'm always eager to explore new technologies.</p></div>
          <div className="lang text-lg  mb-10"><span className='text-black mr-3  '>Responsive Design:</span><p>Crafting user-friendly interfaces that work seamlessly across devices is my jam. </p></div>


          <h2 className=' text-[32px] text-black mb-2'>Beyond Code</h2>
          <p className='text-lg text-black mb-2'>When I'm not immersed in code, you'll find me:</p>
          <p className='text-lg'>Exploring new coffee shops, always on the hunt for the perfect latte ☕.</p>
          <p className='text-lg mb-10'>Sketching and Drawing , it makes me creative and inspired 🎨 .</p>

          
          <h2 className=' text-[32px] text-black mb-2'>Let's Connect!</h2>
          <p className="text-lg">Feel free to browse my projects , and let's connect! Whether it's collaborating on exciting web development ventures or just chatting about tech, I'm all ears. 🚀</p>


          {/* Beyond Code
When I’m not immersed in code, you’ll find me:

Exploring new coffee shops (always on the hunt for the perfect latte ☕).
Strumming my guitar—music keeps me inspired.
Believing in lifelong learning—I’m currently diving into UI/UX design. */}
        </div>
      </div>
    </>
  )
}

export default page
