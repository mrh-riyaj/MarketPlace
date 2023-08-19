import { Routes, Route } from "react-router-dom"
import React from "react"
import Home from "../pages/Home"
import UserProfile from "../pages/UserProfile"

const Body = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
    )
}

export default Body