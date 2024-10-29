import Card from '@/components/Card'
import React from 'react'


const page = () => {
  return (
    <>
      <div className="pmain w-3/4 absolute left-[375px] ">
        <h1 className='p-10  text-5xl font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700 '>My Projects!</h1>
        <div className="projects w-full mb-10 h-fit px-12 flex gap-10 flex-wrap ">

          <Card image="https://cdn.dribbble.com/users/3212981/screenshots/6751662/untitled-10.jpg" name='Get-me-a-Chai' description="A Patreon Clone where you can support your favorite creators! With this platform, users can seamlessly make payments to creators they admire." tech={['Next.js']} git="https://github.com/harshsaini2375/Get-me-a-chai" demo="any link" />

          <Card image="https://th.bing.com/th/id/OIP.BTpHjAAf0FZM2ePia5NJpwHaDX?rs=1&pid=ImgDetMain" name='Password Manager' description="A secure solution for storing and managing passwords. Users can save login credentials and access them when needed." tech={['React', 'Tailwind', 'MongoDB', 'Express']} git="https://github.com/harshsaini2375/Password-manager" demo="any link" />

          <Card image="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png" name='Spotify-Clone' description="A frontend Spotify clone that replicates the popular music streaming service and features real-time song playback. " tech={['HTML', 'CSS', 'javascript']} git="https://github.com/harshsaini2375/netflix-clone" demo="any link" />

          <Card image="https://th.bing.com/th/id/OIP.WXxM16nmngq0VdD6EyZvywHaE8?rs=1&pid=ImgDetMain" name='To-do-list' description="A task management application that helps users organize their daily activities. Features include adding tasks and marking items as complete." tech={['React', 'Tailwind', 'React-icons']} git="https://github.com/harshsaini2375/To-do-list-" demo="any link" />





        </div>
      </div>
    </>
  )
}

export default page
