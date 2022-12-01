import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./Components/SidebarOptions/SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Logo from "./shill.png";
import ModalCreateTweet from "./Components/Modals/Modal-Create-Tweet";
import { NavLink } from "react-router-dom";
import { BsCoin } from "react-icons/bs";

function Sidebar() {
  const [showPost, setShowPost] = useState(false);
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar">
          <img
            className="sidebar-profile-photo"
            src={Logo}
            alt={"Shill Site"}
            width="80px"
          />
          <NavLink to="/">
            <SidebarOption
              className="side-bar-icon"
              active
              Icon={<HomeIcon />}
              text="$hill"
              image={Logo}
              src="https://freeimage.host/i/HFl919t"
            />
          </NavLink>

          <NavLink to="/profile">
            <div className="sidebar-crypto-mobile">Profile </div>
            <SidebarOption Icon={<PermIdentityIcon />} text="Profile" />{" "}
          </NavLink>

          <NavLink to="/crypto" className="sidebar-hide-icon">
            <div className="sidebar-crypto-mobile">Crypto</div>
            <SidebarOption Icon={<BsCoin />} />
          </NavLink>

          <NavLink to="/news">
            <div className="sidebar-crypto-mobile"></div>
            <SidebarOption Icon={<ListAltIcon />} text="News" />{" "}
          </NavLink>

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
