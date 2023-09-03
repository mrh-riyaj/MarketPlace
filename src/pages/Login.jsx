import LinkButton from "../components/LinkButton"
import Button from "../components/Button"
import Input from "../components/Input"
import Logo from "../components/Logo"
import image from "../images/shopping.jpg"

const Login = () => {
    return (
        <section className="login-page">
            <div className="login-container d-flex row">
                <div className="clm ">
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
                                <strong>Login MarketPlace</strong>
                            </div>
                        </div>
                        <div className="row forms">
                            <div className="clm">
                                <Input input placeholder="mobile/email" />
                            </div>
                        </div>
                        <div className="row forms">
                            <div className="clm">
                                <Input input type="password" placeholder="Password" />
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
                            <Logo /> <Logo /> <Logo />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login