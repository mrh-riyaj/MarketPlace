import Button from "../components/Button"
import Inputs from "../components/Inputs"
import Toggle from "../components/Toggle"
import LinkButton from "../components/LinkButton"

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
            <div className="row" style={{paddingTop: "20px"}}>
                <div className="clm"><LinkButton text="Demo" /></div>
                <div className="clm"><LinkButton text="Demo" color="black" /></div>
                <div className="clm"><LinkButton text="Demo" color="red" /></div>
            </div>

            <div style={{paddingTop: "30px"}}>Inputs</div>
            <div className="row" style={{paddingTop: "20px"}}>
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
            <div className="row" style={{paddingTop: "20px"}}>
                <div className="clm">
                    <Inputs input label="Demo" validation="invalid" />
                </div>
                <div className="clm">
                    <Inputs input label="Demo" validation="valid" required={true}/>
                </div>
                <div className="clm">
                    <Inputs input label="Demo" validation="invalid" iconLeft="home" />
                </div>
                <div className="clm">
                    <Inputs input label="Demo" validation="valid" iconRight="home" />
                </div>
                <div className="clm">
                    <Inputs input label="Demo" validation="invalid" iconLeft="home" iconRight="home" />
                </div>
            </div>

            <div style={{paddingTop: "30px"}}>Inputs</div>
            <div className="row" style={{paddingTop: "20px"}}>
                <div className="clm">
                    <Toggle forId="1" />
                </div>
                <div className="clm">
                    <Toggle forId="2" />
                </div>
                <div className="clm">
                    <Toggle forId="3" />
                </div>
                <div className="clm">
                    <Toggle forId="4" />
                </div>
            </div>
        </section>
    )
}

export default Components