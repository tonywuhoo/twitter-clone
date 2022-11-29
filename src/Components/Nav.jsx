import React from 'react'
import {BsFillPersonLinesFill} from "react-icons/bs"
import {BsSearch} from "react-icons/bs"
import {IoIosNotificationsOutline} from "react-icons/io"
import {BiMessageDots} from "react-icons/bi"
import { AiOutlineTag } from "react-icons/ai"
import "./Sidebar.css";

const Nav = () => {
  return(
    <nav >
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Live Feed</li>
        <li>News</li>
      </ul>
    </nav>
  )
}

export default Nav