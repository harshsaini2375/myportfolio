import Card from '@/components/Card'
import React from 'react'


const page = () => {
  return (
    <> 
      <div className="pmain pt-10 md:pt-0 w-screen md:w-3/4 md:absolute left-[375px] ">
        <h1 className='  w-fit p-10 pb-5 md:pb-10 text-4xl md:text-5xl font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700 '>My Projects!</h1>

        <div className="projects md:pb-0 pb-10 w-full mb-5 h-fit px-3 md:px-12 justify-center md:justify-start flex gap-5 md:gap-10 flex-wrap ">

          <Card image="/collaborativeEditor.png" name='Collaborative Editor' description="Live editor featuring WebSockets for real-time co-editing and AI integration for smart text enhancements. Includes document-specific chat." tech={['NextJS', 'MongoDB', 'NextAuthJS', 'websocket']} git="https://github.com/harshsaini2375/collaborative-editor-with-AI" demo="https://collaborative-editor-with-ai.vercel.app/" />

          <Card image="/ecommerce.png" name='E-Commerce website ' description="Developed a feature-rich e-commerce platform integrating secure Razorpay payments for seamless transactions , ensuring responsive user experience." tech={['NextJS', 'MongoDB', 'NextAuthJS']} git="https://github.com/harshsaini2375/Ecommerce" demo="https://ecommerce-mu-nine-53.vercel.app/" />

          <Card image="/patreon.png" name='Get-me-a-Chai' description="A Patreon Clone where you can support your favorite creators. With this platform, users can seamlessly make payments to creators they admire." tech={['NextJS', 'MongoDB', 'NextAuthJS']} git="https://github.com/harshsaini2375/Get-me-a-chai" demo="https://get-me-a-chai-tau.vercel.app/" />

          <Card image="/passwordmanager.png" name='Password Manager' description="A secure solution for storing and managing passwords. Users can save login credentials and access them when needed." tech={['ReactJS', 'Tailwind', 'ExpressJS']} git="https://github.com/harshsaini2375/Password-manager" demo="https://password-manager-kappa-three.vercel.app/" />


          <Card image="/linktreeimg.png" name='Linktree' description=" A Linktree clone acts as a centralized hub for all your important links, whether its your social media profiles, portfolio, blog, or other web destinations." tech={['NextJS', "MongoDB"]} git="https://github.com/harshsaini2375/linktree" demo="https://linktree-five-coral.vercel.app/" />

          <Card image="/urlimage.png" name='URL Shortener' description="This simply helps you to shorten your long URLs." tech={['NextJS', "MongoDB"]} git="https://github.com/harshsaini2375/URL-Shortner" demo="https://url-shortner-umber-zeta.vercel.app/" />

          <Card image="/todolist.png" name='To-do-list' description="A task management application that helps users organize their daily activities. Features include adding tasks and marking items as complete." tech={['ReactJS', 'Tailwind']} git="https://github.com/harshsaini2375/To-do-list-" demo="https://to-do-list-ten-lemon-96.vercel.app/" />

          <Card image="https://i.pinimg.com/736x/0f/30/0d/0f300da5c3b0cce0718db1590342f6ee.jpg" name='Spotify-Clone' description="A frontend Spotify clone that replicates the popular music streaming service and features real time song playback. " tech={['HTML', 'CSS', 'JavaScript']} git="https://github.com/harshsaini2375/netflix-clone" demo="" />
          {/* https://playspotifysong.freewebhostmost.com/ */}

        </div>
      </div>
    </>
  )
}

export default page
