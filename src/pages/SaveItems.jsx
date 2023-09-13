import sellerImage from "../images/User.jpg"
import LinkButton from "../components/LinkButton"
import ProductImage from "../images/demo_product.jpg"

const SaveItems = (props) => {
    const SaveItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let productName = "Demo Cycle"
    let category = "Vehicles"
    let sellerName = "Riyaj hossain"
    let price = 100

    return(
        <section className="save-section">
            <div className="save-body">
                <div className="save-tittle">Saved items</div>
                <div className="items-wrapper">
                    {SaveItems.map((item, k) => (
                        <div className="info-item-body d-flex" kye={k}>
                            <div className="img-body">
                                <img src={ProductImage}/>
                            </div>
                            <div>
                                <LinkButton
                                    color="black"
                                    class="product-name"
                                    text={`${productName} & ${category}`}
                                />
                                <div className="d-flex">
                                    <span>Product</span>
                                    <span>{" ৳" + price}</span>
                                    <span>{sellerName}</span>
                                </div>
                                <div className="d-flex">
                                    <div className="seller-image">
                                        <img src={sellerImage}/>
                                    </div>
                                    <span>Saved from</span>
                                    <LinkButton color="black" text={sellerName + "'s post"} />
                                </div>
                            </div>
                        </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default SaveItems