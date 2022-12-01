import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./Components/SidebarOptions/SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import Logo from "./shill.png";
import ModalCreateTweet from "./Components/Modals/Modal-Create-Tweet";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { ImageOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

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
            <SidebarOption Icon={<PermIdentityIcon />} text="Profile" />{" "}
          </NavLink>

          <div className="sidebar-hide-icon">
            <SidebarOption Icon={<ListAltIcon />} text="Crypto" />
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
              show={showPost} /**profileImage="" profileUsername="" */
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

// import React, { useState } from "react";
// import "./Sidebar.css";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import SidebarOption from "./SidebarOption";
// import HomeIcon from "@mui/icons-material/Home";
// import SearchIcon from "@mui/icons-material/Search";
// import Button from "@mui/material/Button";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import SmartButtonIcon from "@mui/icons-material/SmartButton";
// import Logo from ".././Components/shill.png";
// import Nav from "./Nav";
// import ModalCreateTweet from "./Modals/Modal-Create-Tweet";

// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import { ImageOutlined } from "@mui/icons-material";

// function Sidebar() {
// 	const [showCreateTweetModal, setCreateTweetModal] = useState(false);

// 	return (
// 		<div className="sidebar-container">
// 			<div className="sidebar">
// 				<img
// 					className="profile-photo"
// 					src={Logo}
// 					alt={"Shill Site"}
// 					width="80px"
// 				/>
// 				<SidebarOption
// 					active
// 					Icon={<HomeIcon />}
// 					text="$hill"
// 					image={Logo}
// 					src="https://freeimage.host/i/HFl919t"
// 				/>
// 				<SidebarOption Icon={<PermIdentityIcon />} text="Profile" />
// 				{/* <SidebarOption Icon={<NotificationsNoneIcon />} text="Notifications" /> */}
// 				{/* <SidebarOption Icon={<MailOutlineIcon />} text="Messages" /> */}
// 				{/* <SidebarOption Icon={<BookmarkBorderIcon />} text="Bookmarks" /> */}
// 				<SidebarOption Icon={<ListAltIcon />} text="Live Feed" />
// 				<SidebarOption Icon={<ListAltIcon />} text="News" />
// 				<SidebarOption Icon={<MoreHorizIcon />} text="More" />
// 				{/* this is the 'tweet' button */}
// 				<ModalCreateTweet
// 					onClose={() => {
// 						setCreateTweetModal(false);
// 						document.querySelector(".sidebar-container").style.zIndex = 0;
// 					}}
// 					show={showCreateTweetModal}
// 				/>
// 				<Button
// 					className="sidebar_Tweet"
// 					fullWidth
// 					onClick={() => {
// 						console.log("clicked");
// 						setCreateTweetModal(true);
// 					}}>
// 					Post
// 				</Button>
// 			</div>
// 			<div className="side-bar-mobile">
// 				<Nav />
// 			</div>
// 		</div>
// 	);
// }

// export default Sidebar;
