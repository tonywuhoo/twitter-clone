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
import Footer from "./Footer";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon, Jacob will make new based on 'tweeder' */}
      <TwitterIcon className="sidebar-twitterIcon" />

      <SidebarOption active Icon={<HomeIcon />} text="Home" />
      <SidebarOption Icon={<SearchIcon />} text="Explore" />
      {/* <SidebarOption Icon={<NotificationsNoneIcon />} text="Notifications" /> */}
      {/* <SidebarOption Icon={<MailOutlineIcon />} text="Messages" /> */}
      {/* <SidebarOption Icon={<BookmarkBorderIcon />} text="Bookmarks" /> */}
      {/* <SidebarOption Icon={<ListAltIcon />} text="Lists" /> */}
      <SidebarOption Icon={<PermIdentityIcon />} text="Profile" />
      <SidebarOption Icon={<MoreHorizIcon />} text="More" />
      {/* this is the 'tweet' button */}
      <Footer />
      <Button variant="outlined" className="sidebar_Tweet" fullWidth>
        Tweed
      </Button>
    </div>
  );
}

export default Sidebar;
