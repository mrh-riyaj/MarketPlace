import ProductImage from "../images/User.jpg"

const Inboxes = (props) => {
    const notifications = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let productName = "Demo Cycle"
    let category = "Vehicles"
    let day = new Date();
    let hh;
    if(day.getHours() >= 12) {
        hh = day.getHours() - 12
    }else {
        hh = day.getHours()
    }
    let mm = day.getMinutes()

    return(
        <section className="inbox-section">
            <div className="info-body">
                <div className="info-tittle">Inboxes</div>
                <div className="items-wrapper">
                    {notifications.map((item, k) => (
                        <div className="info-item-body d-flex" key={k}>
                            <div className="img-body">
                                <img src={ProductImage}/>
                            </div>
                            <div>
                                <div className="product-name">{productName} {"&"} {category}</div>
                                <span className="post-time">{hh + " : " + mm}</span>
                            </div>
                        </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Inboxes