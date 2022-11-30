import ProfilePage from './Components/Profile/ProfilePage';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Screens/Home";
import Cookies from 'js-cookie';
import { getPosts } from "./services/PostCrud";
import Sidebar from './Components/Sidebar';
import Feed from './Screens/Feed';
import Widget from './Components/Widget';


function App() {
  const [commentCrud, setCommentCrud] = useState([]);
  const [postCrud, setPostCrud] = useState([]);
  const [userCrud, setUserCrud] = useState([]);
  const [toggleApiCall, setToggleApiCall] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (Cookies.get("AccessToken") === undefined) {
      Cookies.set("AccessToken", "loggedout")
    }
  }, []);

  return (
    <>
      <div className="app">
        <Sidebar />
        
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

//  problem
// const UsersComponent = () => {
//   const [users, setUsers] = useState([]);
//   const [usersLoading, setUsersLoading] = useState(false);

//   useEffect(() => {
//     // wrap your async call here
//     const loadData = async () => {
//       setUsersLoading(true);
//       const result = await getUsers();
//       setUsers(result);
//       setUsersLoading(false);
//     };

//     // then call it here
//     loadData();
//   }, []);

// useEffect(() => {
//   let res = async() => {axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false')
//   setCoins(res.data);
//   }

//  res ()

//   return (
//     <div>
//       <h1>Users</h1>
//       {usersLoading && <div>Loading...</div>}
//       <div>
//         {users.map((user) => (
//           <div key={user.id}>{user.username}</div>
//         ))}
//       </div>
//     </div>
//   );
// };
