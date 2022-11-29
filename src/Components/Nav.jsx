import React from 'react'
import {BsFillPersonLinesFill} from "react-icons/bs"
import {IoIosNotificationsOutline} from "react-icons/io"
import {BiMessageDots} from "react-icons/bi"
import "./Sidebar.css";

const Nav = () => {
    return (
      <div className="flex justify-center items-center w-full h-20 px-4  text-cyan-500 bg-black  bottom-0 fixed ">
      <div className="flex flex-row justify-between pr-8 space-x-8 capitalize ">
         <div>
      <BsFillPersonLinesFill />
      </div>
      <div>
    
      </div>
     <div>
      <BiMessageDots/>
      </div>
      </div>
      
     </div>
  )
}

export default Nav