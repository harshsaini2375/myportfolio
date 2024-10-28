import React from 'react'
import Link from 'next/link'

const Contactcard = (props) => {
    return (
        <>
            <Link href={props.link} target="_blank" >
                <div className='card hover:bg-[#f3f7ff] cursor-pointer border-slate-300 border-2 h-40 w-40 rounded-3xl mb-10 p-5'>
                    <div className="image  h-10 w-10 rounded-lg overflow-hidden"><img className='h-full w-full object-cover' src={props.image} alt="twittersvg" /></div>
                    <div className="name  pb-0 pt-2">{props.name}</div>
                    <div className="username text-slate-500 text-sm">{props.username}</div>
                    {props.follow == "true" && <div className="follow border-[1px] border-black w-fit px-2 rounded-lg bg-blue-500 text-white mt-2">Follow</div>}
                </div>
            </Link>
        </>
    )
}

export default Contactcard
