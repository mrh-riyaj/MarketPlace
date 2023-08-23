import React from "react"
import Home from "../pages/Home"
import CreatePost from "../pages/CreatePost"
import UserProfile from "../pages/UserProfile"
import { Routes, Route } from "react-router-dom"

const Body = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create-post" element={<CreatePost />} />
            <Route exact path="/user-profile" element={<UserProfile />} />
        </Routes>
    )
}

export default Body