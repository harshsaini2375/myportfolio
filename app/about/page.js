import React from 'react'

const page = () => {

  return (
    <>

      <div className="amain pt-20 md:pt-0 h-screen w-screen md:w-3/4 md:absolute left-[379px] overflow-x-hidden">
        <h1 className="px-5 w-fit  mb-5 md:mb-0 md:p-10 md:pl-20 text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700">About me&#33;</h1>
        <div className="font-montserrat aboutcontent  text-gray-500  min-h-[80vh] h-fit px-5  md:px-20 pb-10 ">
          <p className="ist  text-2xl text-gray-500 mb-10 " >Hello&#33; I&apos;m Harsh Saini, a passionate full-stack web developer with expertise in modern JavaScript ecosystems. I hold a Bachelor&#39;s degree in Computer Applications from Maharshi Dayanand University, Rohtak.  🎓</p>
          
          <h2 className=' text-[32px] text-black mb-2'>Skills & Craft</h2>
          <div className="lang text-lg  mb-2"><span className='text-black mr-3  '>Frontend&#x3a; </span><p>I build dynamic interfaces with React.js, Next.js, TypeScript, and Redux, styled beautifully with Tailwind CSS and vanilla HTML/CSS. Performance and accessibility are my top priorities.</p></div>
          <div className="lang text-lg  mb-2"><span className='text-black mr-3  '>Backend &amp; databases&#x3a;</span><p>I design scalable backends using Node.js, Express.js, and work with both SQL (MySQL) and NoSQL (MongoDB) databases to create robust full-stack applications.</p></div>
          <div className="lang text-lg  mb-2"><span className='text-black mr-3  '>Core Foundations&#x3a;</span><p>My problem-solving skills are honed with C++, Data Structures &amp; Algorithms (DSA), and OOP principles - essential for writing efficient code.</p></div>
          <div className="lang text-lg  mb-10"><span className='text-black mr-3  '>DevOps & Tools&#x3a;</span><p>I use Git/GitHub for version control and deploy projects on Vercel for seamless CI/CD. </p></div>


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
