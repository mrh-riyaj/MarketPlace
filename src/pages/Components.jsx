import Button from "../components/Button"
import Inputs from "../components/Inputs"
import Switches from "../components/Switches"
import LinkButton from "../components/LinkButton"

const Components = () => {
    return (
        <section style={{padding: "50px"}}>
            <strong style={{paddingTop: "30px", display: "inline-block"}}>Buttons</strong>
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

            <strong style={{paddingTop: "30px", display: "inline-block"}}>LinkButtons</strong>
            <div className="row" style={{paddingTop: "20px"}}>
                <div className="clm"><LinkButton text="Demo" /></div>
                <div className="clm"><LinkButton text="Demo" color="black" /></div>
                <div className="clm"><LinkButton text="Demo" color="red" /></div>
            </div>

            <strong style={{paddingTop: "30px", display: "inline-block"}}>Inputs</strong>
            <div className="row" style={{paddingTop: "20px"}}>
                <div className="clm">
                    <Inputs input label="Demo" textRight="Demo"/>
                </div>
                <div className="clm">
                    <Inputs input label="Demo" textLeft="Demo"/>
                </div>
                <div className="clm">
                    <Inputs input label="Demo" textRight="Demo" iconLeft="home" />
                </div>
                <div className="clm">
                    <Inputs input label="Demo" textLeft="Demo" iconRight="home"/>
                </div>
            </div>
            <div className="row" style={{paddingTop: "20px"}}>
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

            <strong style={{paddingTop: "30px", display: "inline-block"}}>Toggle / CheckBox</strong>
            <div className="row" style={{paddingTop: "20px"}}>
                <div className="clm">
                    <Switches toggle forId="1" />
                </div>
                <div className="clm">
                    <Switches toggle forId="2" label="Demo" />
                </div>
                <div className="clm">
                    <Switches checkbox forId="A" />
                </div>
                <div className="clm">
                    <Switches checkbox forId="B" label="Demo" />
                </div>
            </div>
        </section>
    )
}

export default Components