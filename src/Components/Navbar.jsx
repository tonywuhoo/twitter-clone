import React from 'react'
import {BsFillPersonLinesFill} from "react-icons/bs"
import {BsSearch} from "react-icons/bs"
import {IoIosNotificationsOutline} from "react-icons/io"
import {BiMessageDots} from "react-icons/bi"
import {AiOutlineTag} from "react-icons/ai"
const nav = () => {
  return (
    <div className=" " >
    <div className="flex justify-center items-center w-full h-20 px-4  text-cyan-500 bg-black  bottom-0 fixed">
    <div className="flex flex-row justify-between pr-8 space-x-8 capitalize ">
       <div>
    <BsFillPersonLinesFill />
   
    </div>
    <div>
    <BsSearch/>
    </div>
    
    <img className=" h-5"src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt=""  />
    <div>
   < IoIosNotificationsOutline/>
   </div>
   <div>
    <BiMessageDots/>
    </div>
    </div>
    
   </div>
   </div>
  )
}

export default nav