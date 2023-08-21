import { Routes, Route } from "react-router-dom"
import React from "react"
import Home from "../pages/Home"
import UserProfile from "../pages/UserProfile"
import Explore from "../pages/Explore"
import Reels from "../pages/Reels"
import CreatePost from "../pages/CreatePost"

const Body = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/reels" element={<Reels />} />
            <Route exact path="/create-post" element={<CreatePost />} />
            <Route exact path="/user-profile" element={<UserProfile />} />
        </Routes>
    )
}

export default Body