import Card from '@/components/Card'
import React from 'react'


const page = () => {
  return (
    <>
   
      <div className="pmain pt-10 md:pt-0 w-screen md:w-3/4 md:absolute left-[375px] ">
        <h1 className='p-10 pb-5 md:pb-10 text-4xl md:text-5xl font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700 '>My Projects!</h1>
        <div className="projects md:pb-0 pb-10 w-full mb-5 h-fit px-3 md:px-12 justify-center md:justify-start flex gap-5 md:gap-10 flex-wrap ">

          <Card image="https://i.pinimg.com/564x/ee/5e/86/ee5e866eaae59ebd6a22defc276d3f67.jpg" name='Get-me-a-Chai' description="A Patreon Clone where you can support your favorite creators. With this platform, users can seamlessly make payments to creators they admire." tech={['Next.js']} git="https://github.com/harshsaini2375/Get-me-a-chai" demo="" />

          <Card image="https://i.pinimg.com/564x/73/1e/30/731e300a3c273cc5c2209a61ecd0d5c8.jpg" name='Password Manager' description="A secure solution for storing and managing passwords. Users can save login credentials and access them when needed." tech={['React', 'Tailwind', 'MongoDB', 'Express']} git="https://github.com/harshsaini2375/Password-manager" demo="" />

          <Card image="https://i.pinimg.com/736x/0f/30/0d/0f300da5c3b0cce0718db1590342f6ee.jpg" name='Spotify-Clone' description="A frontend Spotify clone that replicates the popular music streaming service and features real time song playback. " tech={['HTML', 'CSS', 'javascript']} git="https://github.com/harshsaini2375/netflix-clone" demo=" https://playspotifysong.freewebhostmost.com/" />

          <Card image="https://i.pinimg.com/564x/eb/ff/07/ebff0700a6135c66021a3e4560c97b36.jpg" name='To-do-list' description="A task management application that helps users organize their daily activities. Features include adding tasks and marking items as complete." tech={['React', 'Tailwind', 'React icons']} git="https://github.com/harshsaini2375/To-do-list-" demo="" />





        </div>
      </div>
    </>
  )
}

export default page
