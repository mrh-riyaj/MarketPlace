import React from "react"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Inboxes from "../pages/Inboxes"
import CreatePost from "../pages/CreatePost"
import UserProfile from "../pages/UserProfile"
import { Routes, Route } from "react-router-dom"
import Notifications from "../pages/Notifications"
import CreateAccount from "../pages/CreateAccount"

const Body = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/inbox" element={<Inboxes />} />
            <Route exact path="/create-post" element={<CreatePost />} />
            <Route exact path="/user-profile" element={<UserProfile />} />
            <Route exact path="/notification" element={<Notifications />} />

            {/* will be remove*/}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
        </Routes>
    )
}

export default Body