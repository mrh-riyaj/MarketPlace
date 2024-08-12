import Button from "../components/Button"
import Inputs from "../components/Inputs"

const Practice = () => {
    // const rows = 10
    // const columns = 8
    // const myArray = new Array(rows)
    // console.log(myArray)
    const text = [1,2,3];
    return (
        <section style={{padding: "50px"}}>
            <div className="row" style={{paddingTop: "50px"}}>
                <div className="clm" style={{borderRight: "1px solid #eee", width: "30%"}}>
                    <div className="formRow">
                        <Inputs input textLeft="Name" />
                    </div>
                    <div className="formRow">
                        <Inputs input type="number" textLeft="Age"/>
                    </div>
                    <div className="formRow">
                        <Inputs input type="number" textLeft="Class"/>
                    </div>
                    <div className="formRow">
                        <Inputs input type="number" textLeft="Roll"/>
                    </div>
                    <div className="formRow">
                        <Button text="Create" iconLeft="pencil" type="primary"/>
                    </div>
                </div>
                <div className="clm">
                    <div className="">
                        <div className="row-head">
                            <div className="clm head-titles">Name</div>
                            <div className="clm head-titles">Age</div>
                            <div className="clm head-titles">Class</div>
                            <div className="clm head-titles">Roll</div>
                        </div>
                        {text.map((item, k) => (
                            <div className="formRow" key={k}>
                                <div className="clm">1</div>
                                <div className="clm">2</div>
                                <div className="clm">3</div>
                                <div className="clm">4</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Practice