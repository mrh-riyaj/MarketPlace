import { useState } from "react"
import Button from "../components/Button"
import Inputs from "../components/Inputs"

const Array = () => {
    const [formData, setFormData] = useState({})
    const handInputField = (e) => {
        const name = e.target.name
        let value = []
        const files = e.target.files
        const currentData = {...formData}
        if(files) {
            for (let i = 0; i < files.length; i++) {
                value.push(files[i])
            }
        }else {
            value = e.target.value
        }
        currentData[name] = value
        setFormData(currentData)
    }
    const validateForm = () => {
        const addedFields = []
        const requiredFields = ["name", "age", "class", "roll"]
        if(Object.keys(formData).length) {
            requiredFields.forEach((item) => {
                for(const k in formData) {
                    if(k === item && formData[k] !== '') {
                        addedFields.push(item)
                    }
                }
            })
        }else {
            alert('All missing')
        }
    }
    var newData = [Object.values(formData)]

    console.log(Object.values(formData));
    
    return (
        <section style={{padding: "50px"}}>
            <div className="row" style={{paddingTop: "50px"}}>
                <div className="clm" style={{borderRight: "1px solid #eee", width: "30%"}}>
                    <div className="formRow">
                        <Inputs name="name" input textLeft="Name" onChange={handInputField} />
                    </div>
                    <div className="formRow">
                        <Inputs name="age" textLeft="Age" input type="number" onChange={handInputField} />
                    </div>
                    <div className="formRow">
                        <Inputs name="class" input type="number" textLeft="Class" onChange={handInputField}/>
                    </div>
                    <div className="formRow">
                        <Inputs name="roll" input type="number" textLeft="Roll" onChange={handInputField}/>
                    </div>
                    <div className="formRow">
                        {/* <Button text="Create" iconLeft="pencil" type="primary"/> */}
                        <Button onClick={validateForm} text="Create" iconLeft="pencil" type="primary"/>
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
                        {newData.map((newData, k) => (
                            <div className="formRow" key={k}>
                                <div className="clm">{newData[0]}</div>
                                <div className="clm">{newData[1]}</div>
                                <div className="clm">{newData[2]}</div>
                                <div className="clm">{newData[3]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Array