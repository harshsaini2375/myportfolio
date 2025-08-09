import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contactcard = (props) => {
    return (
        <>
            <Link className='h-fit' href={props.link} target="_blank" >
                <div className='card hover:bg-[#f3f7ff] cursor-pointer border-slate-300 border-2 h-40 w-[150px] rounded-3xl md:mb-10 p-4
                shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]
        hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
        transition-shadow duration-300'>
                    <div className="image  h-10 w-10 rounded-lg overflow-hidden"><Image height={900} width={900} className='h-full w-full object-cover' src={props.image} alt="twittersvg" /></div>
                    <div className="name  pb-0 pt-2">{props.name}</div>
                    <div className="username text-slate-500 text-sm text-wrap break-words">{props.username}</div>
                    {props.follow == "true" && <div className="follow border-[1px] border-black w-fit px-2 rounded-lg bg-blue-500 text-white mt-2">Follow</div>}
                </div>
            </Link>
        </>
    )
}

export default Contactcard
