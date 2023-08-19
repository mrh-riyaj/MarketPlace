import { useState } from "react"
import PopUp from "../components/common/PopUp"

const UserProfile = () => {
    const [isPopup, setIsPopup] = useState(false)
    // const [user, setUser] = useState([
    //     {name: 'Abul', age: 20},
    //     {name: 'Babul', age: 20},
    //     {name: 'Rahim', age: 20},
    //     {name: 'Sonia', age: 20},
    //     {name: 'Kuddus', age: 20}
    // ])

    // const removeItem = (key) => {
    //     const newUser = [...user]
    //     const deletedUser = newUser.splice(key, 1)
    //     setUser(newUser)
    //     alert(deletedUser[0].name)
    // }
    return (
        <section className="user-bg-body position-r cart">
            <span className="blue-circle top-left position-a"></span>
            <span className="blue-circle bottom-right position-a"></span>
            <div className="profile-wrapper">
                <div className="d-flex">
                    <div>
                        {/* {user.map((item, index) => (
                            <li key={index}>
                                <h2>{item.name}</h2>
                                <div>{item.age}</div>
                                <span onClick={() => removeItem(index)}>remove</span>
                            </li>
                        ))} */}
                    </div>
                    <strong onClick={() => setIsPopup(true)}>Edit Profile</strong>
                </div>
            </div>
            {isPopup && <PopUp content="Content" onClose={() => setIsPopup(false)} onSubmit={() => {}} title="Profile Edit" />}
        </section>
    )
}

export default UserProfile