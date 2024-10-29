'use client'

import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

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
      <div className='card hover:bg-[#f3f7ff] w-[30%] h-[64vh] border-2 border-slate-300 rounded-3xl  p-3 overflow-x-hidden overflow-y-hidden '>
        <div className="image border-2 border-slate-500 rounded-xl w-full h-40 overflow-hidden">
          <img className='object-cover h-full w-full ' src={props.image ? props.image : "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png"} alt="projectimage" />
        </div>
        <h1 className="name font-extrabold text-2xl my-2">{props.name}</h1>
        <p className='  min-h-[90px] h-fit'>{props.description}</p>
        <h2 className='font-bold text-xl my-2'>Technologies:</h2>

       
        <div className="tech flex gap-2 w-full  min-h-16 h-fit flex-wrap">

          {/* note below how we use map function that means return div directly not any <></> */}
          {props.tech && props.tech.map(element => {
            return <div key={element} className="techbtn border-slate-400 border-[1px] bg-slate-300 w-fit h-fit rounded-md px-1">
              {element}
            </div>
          })}

        </div>

        <div className="link mt-3 flex justify-between">

          <Link href={props.git} target="_blank" >
            <div className="repo bg-blue-500 text-white border-black border-[1px] w-fit h-fit rounded-md px-2">Git Repo</div>
          </Link>
          {/* <Link href={props.git} target="_blank" >
          <div className="demo bg-blue-500 text-white border-black border-[1px] w-fit h-fit rounded-md px-2">Live Demo</div>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Card
