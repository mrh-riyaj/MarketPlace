import LinkButton from "../components/LinkButton"
import Button from "../components/Button"
import Inputs from "../components/Inputs"

const Components = () => {
    return (
        <section style={{padding: "50px"}}>
            <div style={{paddingTop: "30px"}}>Buttons</div>
            <div className="row" style={{paddingTop: "10px"}}>
                <div className="clm"><Button text="Demo" /></div>
                <div className="clm"><Button text="Demo" iconLeft="home" /></div>
                <div className="clm"><Button text="Demo" iconRight="home" /></div>
                <div className="clm"><Button text="Demo" iconLeft="home" iconRight="home" /></div>
                <div className="clm"><Button icon="home" /></div>
            </div>
            <div className="row" style={{paddingTop: "20px"}}>
                <div className="clm"><Button text="Demo" type="primary" /></div>
                <div className="clm"><Button text="Demo" type="primary" iconLeft="home" /></div>
                <div className="clm"><Button text="Demo" type="primary" iconRight="home" /></div>
                <div className="clm"><Button text="Demo" type="primary" iconLeft="home" iconRight="home" /></div>
                <div className="clm"><Button icon="home" type="primary"/></div>
            </div>
            <div className="row" style={{paddingTop: "20px"}}>
                <div className="clm"><Button text="Demo" type="red" /></div>
                <div className="clm"><Button text="Demo" type="red" iconLeft="home" /></div>
                <div className="clm"><Button text="Demo" type="red" iconRight="home" /></div>
                <div className="clm"><Button text="Demo" type="red" iconLeft="home" iconRight="home" /></div>
                <div className="clm"><Button icon="home" type="red"/></div>
            </div>

            <div style={{paddingTop: "30px"}}>LinkButtons</div>
            <div className="row" style={{paddingTop: "10px"}}>
                <div className="clm"><LinkButton text="Demo" /></div>
                <div className="clm"><LinkButton text="Demo" color="black" /></div>
                <div className="clm"><LinkButton text="Demo" color="red" /></div>
            </div>

            <div style={{paddingTop: "30px"}}>Inputs</div>
            <div className="row" style={{paddingTop: "10px"}}>
                <div className="clm">
                    <Inputs input label="Demo" />
                </div>
                <div className="clm">
                    <Inputs input label="Demo" required={true}/>
                </div>
                <div className="clm">
                    <Inputs input label="Demo" iconLeft="home" />
                </div>
                <div className="clm">
                    <Inputs input label="Demo" iconRight="home" />
                </div>
                <div className="clm">
                    <Inputs input label="Demo" iconLeft="home" iconRight="home" />
                </div>
            </div>
            <div className="row" style={{paddingTop: "10px"}}>
                <div className="clm">
                    <Inputs input label="Demo" />
                </div>
                <div className="clm">
                    <Inputs input label="Demo" required={true}/>
                </div>
                <div className="clm">
                    <Inputs input label="Demo" iconLeft="home" />
                </div>
                <div className="clm">
                    <Inputs input label="Demo" iconRight="home" />
                </div>
                <div className="clm">
                    <Inputs input label="Demo" iconLeft="home" iconRight="home" />
                </div>
            </div>
        </section>
    )
}

export default Components