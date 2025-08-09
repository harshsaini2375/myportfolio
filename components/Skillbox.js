import React from 'react'
import Image from 'next/image'
const skillbox = (prop) => {
  return (
    <div className="py-1 px-3 h-fit font-montserrat text-sm w-fit border border-gray-400 rounded-md flex gap-2 justify-center items-center 
                    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]
                   hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
                   transition-shadow duration-300 ">
                <Image src={`/${prop.img}.svg`} alt={prop.text} height={20} width={20} unoptimized />
                {prop.text}</div>
  )
}

export default skillbox
