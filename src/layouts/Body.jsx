import React from "react"
import Home from "../pages/Home"
import Inboxes from "../pages/Inboxes"
import Settings from "../pages/Settings"
import SaveItems from "../pages/SaveItems"
import UserProfile from "../pages/UserProfile"
import { Routes, Route } from "react-router-dom"
import Notifications from "../pages/Notifications"
import CreateProduct from "../pages/CreateProduct"

// will be remove
import Array from "../pages/Array"
import Login from "../pages/Login"
import Components from "../pages/Components"
import CreateAccount from "../pages/CreateAccount"

const Body = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/inbox" element={<Inboxes />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/save-items" element={<SaveItems />} />
            <Route exact path="/user-profile" element={<UserProfile />} />
            <Route exact path="/notification" element={<Notifications />} />
            <Route exact path="/create-product" element={<CreateProduct />} />

            {/* will be remove*/}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
            <Route exact path="/components" element={<Components />} />
            <Route exact path="/array" element={<Array />} />
        </Routes>
    )
}

export default Body