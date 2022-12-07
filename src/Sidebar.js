import React, { useState } from "react";
import "./Sidebar.css";

import Button from "@mui/material/Button";
import ListAltIcon from "@mui/icons-material/ListAlt";

import Logo from "./shill.png";
import ModalCreateTweet from "./Components/Modals/Modal-Create-Tweet";
import { NavLink } from "react-router-dom";
import { BsCoin } from "react-icons/bs";

import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

function Sidebar() {
  const [showPost, setShowPost] = useState(false);
  return (
    <>
      <div className="sidebar-container  flex ">
        <div className="sidebar">
          <div className="sidebar-container-mobile">
            <img
              className="sidebar-profile-photo"
              src={Logo}
              alt={"Shill Site"}
              width="80px"
            />

            <NavLink to="/">
             <section className=" flex flex-row pt-9  ">
			  <AiFillHome className=" text-green-500 text-xl" /> 
              <div className="  text-lg "> Home</div>
			  </section>
            </NavLink>
            <NavLink to="/profile">
			<section className=" flex flex-row pt-9 ">
              <CgProfile className=" text-green-500 text-xl" />
              <div className="text-xl ">Profile </div>
			  </section>
            </NavLink>
{/* 	
            <img
              className="md:sm w-8  md:lg:hidden flex center"
              src={Logo}
              alt={"Shill Site"}
              width="80px"
            /> */}

            <NavLink to="/crypto" className="sidebar-hide-icon">
			<section className=" flex flex-row pt-9">
              <BsCoin className=" text-green-500 text-xl" />
              <div className=" text-lg"> Crypto</div>
			  </section>
            </NavLink>

            <NavLink to="/news">
			<section className=" flex flex-row  pt-9">
              <ListAltIcon className=" text-green-500 text-xl" />
              <div className="text-lg "> News</div>
			  </section>
            </NavLink>
          </div>

          {/* this is the 'tweet' button */}
          <div className="sidebar-post-button">
            <Button
              variant="outlined"
              className="sidebar_Tweet"
              fullWidth
              onClick={() => {
                console.log("clicked");
                setShowPost(true);
                document.querySelector(".sidebar-container").style.zIndex = 1;
              }}
            >
              Post
            </Button>
            <ModalCreateTweet
              onClose={() => {
                setShowPost(false);
                document.querySelector(".sidebar-container").style.zIndex = 0;
              }}
              show={showPost}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
