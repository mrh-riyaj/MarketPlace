import LinkButton from "../components/LinkButton"
import Button from "../components/Button"
import Inputs from "../components/Inputs"
import Logo from "../components/Logo"
import image from "../images/shopping.gif"

const Login = () => {
    return (
        <section className="login-page">
            <div className="login-container d-flex row">
                <div className="clm">
                    <div className="model-body">
                        <img src={image}/>
                    </div>
                </div>
                <div className="clm login-form d-flex">
                    <div className="login-form-body">
                        <div className="row logo-section">
                            <Logo />
                        </div>
                        <div className="row tittle">
                            <div className="clm">
                                <strong>Login Marketplace</strong>
                            </div>
                        </div>
                        <div className="row forms">
                            <div className="clm">
                                <Inputs input placeholder="mobile/email" />
                            </div>
                        </div>
                        <div className="row forms">
                            <div className="clm">
                                <Inputs input type="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="row forms ">
                            <div className="clm">
                                <Button class="login-btn" text="Login" type="primary" />
                            </div>
                        </div>
                        <div className="create-forget d-flex">
                            <span className="label">Account?
                                <LinkButton text="Create" />
                            </span>
                                <LinkButton text="Forget Password" color="red" />
                        </div>
                        <div className="row other-webs">
                            <div className="clm">A</div>
                            <div className="clm">B</div>
                            <div className="clm">C</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login