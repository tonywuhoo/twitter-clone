import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import Logo from ".././Components/shill.png";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <img
          className="profile-photo"
          src={Logo}
          alt={"Shill Site"}
          width="80px"
        />
        <SidebarOption
          active
          Icon={<HomeIcon />}
          text="$hill"
          image={Logo}
          src="https://freeimage.host/i/HFl919t"
        />
        <SidebarOption Icon={<PermIdentityIcon />} text="Profile" />
        {/* <SidebarOption Icon={<NotificationsNoneIcon />} text="Notifications" /> */}
        {/* <SidebarOption Icon={<MailOutlineIcon />} text="Messages" /> */}
        {/* <SidebarOption Icon={<BookmarkBorderIcon />} text="Bookmarks" /> */}
        <SidebarOption Icon={<ListAltIcon />} text="Live Feed" />
        <SidebarOption Icon={<ListAltIcon />} text="News" />
        <SidebarOption Icon={<MoreHorizIcon />} text="More" />
        {/* this is the 'tweet' button */}
        <Button variant="outlined" className="sidebar_Tweet" fullWidth>
          Post
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
