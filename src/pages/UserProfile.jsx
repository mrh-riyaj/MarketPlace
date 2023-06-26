import UserManagement from '../components/UserManagement'
import UserInfo from '../components/UserInfo'
import Websites from '../components/Websites'

const UserProfile = () => {
    return (
        <section className="user-bg-body position-r cart">
            <span className="blue-circle top-left position-a"></span>
            <span className="blue-circle bottom-right position-a"></span>
            <div className="profile-wrapper">
                <div className="d-flex">
                    <UserManagement />
                    <UserInfo />
                    <Websites />
                </div>
                <div className="d-flex">
                    <div className="demo-cls clm bg-white border-r">
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                    </div>
                    <div className="demo-cls clm bg-white border-r">
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                    </div>
                    <div className="demo-cls clm bg-white border-r">
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                        <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
                    </div>
                </div>
                {/* <div className="p-right-panel">
                </div> */}
            </div>
        </section>

        // <section className="user-bg-body position-r cart">
        //     <span className="blue-circle top-left position-a"></span>
        //     <span className="blue-circle bottom-right position-a"></span>
        //     <div className="profile-wrapper d-flex">
        //         <div className='p-left-panel'>
        //             <UserManagement />
        //             <Websites />
        //         </div>
        //         <div className="p-right-panel">
        //             <UserInfo />
        //             <div className="d-flex">
        //                 <div className="demo-cls clm bg-white border-r">
        //                     <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
        //                     <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
        //                     <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
        //                     <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
        //                 </div>
        //                 <div className="demo-cls clm bg-white border-r">
        //                     <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
        //                     <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
        //                     <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
        //                     <div className='row'>Lorem Ipsum is simply dummy text of the printing and</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default UserProfile