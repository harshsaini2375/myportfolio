'use client'

import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import Image from 'next/image';
import Skillbox from './Skillbox';

const Card = (props) => {

  // const [techarr, settecharr] = useState([])
  // const newarr = useRef([])

  // useEffect(() => {
  //   technology();
  // }, [])

  // const technology = () => {

  //   props.tech.forEach(element => {
  //     newarr.current = [...newarr.current, { item: element, id: uuidv4() }]
  //   });
  //   settecharr(newarr.current)

  // }

  return (
    <>
      <div className='card hover:bg-[#f3f7ff] w-[90%] md:w-[30%] h-fit min-h-[75vh] md:min-h-[64vh] md:h-[64vh] border-2 border-slate-300 rounded-3xl  p-3 overflow-x-hidden overflow-y-hidden
      shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]
        hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
        transition-shadow duration-300  '>
        <div className="image border-2 border-slate-300 rounded-xl w-full h-40 overflow-hidden">
        <Image height={900} width={900} className='object-cover h-full w-full ' src={props.image ? props.image : "/catimage.avif"} alt="projectimage" />
        </div>
        <h1 className="name font-extrabold text-2xl my-2">{props.name}</h1>
        <p className=' text-gray-500 text-sm md:text-base min-h-[90px] h-fit '>{props.description}</p>
        <h2 className='font-bold text-xl my-1'>Technologies:</h2>

       
        <div className="tech flex gap-2 w-full  min-h-16 h-fit flex-wrap">

          {/* note below how we use map function that means return div directly not any <></> */}
          {props.tech && props.tech.map(element => {
            return  <Skillbox key={element} text={element} img={element} />
          })}

{/* <div key={element} className="techbtn border-slate-400 border-[1px] bg-slate-300 w-fit h-fit rounded-md px-1">
              {element}
            </div> */}

        </div>

        <div className="link mt-3 flex justify-between">

          <Link href={props.git} target="_blank" >
            <div className="repo bg-blue-500 text-white border-black border-[1px] w-fit h-fit rounded-md px-2">Git Repo</div>
          </Link>
          {props.demo && <Link href={props.demo} target="_blank" >
          <div className="demo bg-blue-500 text-white border-black border-[1px] w-fit h-fit rounded-md px-2">Live Demo</div>
          </Link>}
          
        </div>
      </div>
    </>
  )
}

export default Card
