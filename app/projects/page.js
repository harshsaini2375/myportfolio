import Card from '@/components/Card'
import React from 'react'


const page = () => {
  return (
    <>
      <div className="pmain w-3/4 absolute left-[375px] ">
        <h1 className='p-10  text-5xl font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-sky-300  to-sky-700 '>My Projects!</h1>
        <div className="projects w-full h-fit px-12 flex gap-10 flex-wrap ">

          <Card image="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png" name='Spotify-Clone' description="A frontend Spotify clone that replicates the popular music streaming service and features real-time song playback. " tech={['HTML', 'CSS', 'javascript']} git="https://github.com/harshsaini2375/netflix-clone" demo="any link" />
          
          
        </div>
      </div>
    </>
  )
}

export default page
