import { useState } from "react";

const ZooFormComponentSimple = () => {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Zoo submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Enter the name of you Zoo:
                <br></br>
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label>
            </div>
            <br></br>
            <div>   
            <label>Enter the location of your Zoo:
            <br></br>
                <input
                    type="text"
                    name="location"
                    value={inputs.location || ""}
                    onChange={handleChange}
                />
            </label>
            </div>
            <br></br>
            <div>
            <label>Enter a description of your Zoo:
            <br></br>
                <textarea 
                    name="description" 
                    placeholder='Enter comment...' 
                    maxLength='1000' 
                    minLength='100'
                    rows={4}
                    cols={40}
                    value={inputs.description || ""}
                    onChange={handleChange} >
                </textarea>
            </label>
            </div>
            <br></br>
            <div>
            <label>Enter the visitor capacity of your Zoo:
            <br></br>
                <input
                    type="number"
                    name="capacity"
                    value={inputs.capacity || ""}
                    onChange={handleChange}
                />
            </label>
            </div>
            <br></br>
            <div>
            <label>Enter the average ticket price of your Zoo:
            <br></br>
                <input
                    type="number"
                    name="price"
                    value={inputs.price || ""}
                    onChange={handleChange}
                />
            </label>
            </div>
            <br></br>
            <div>
            <label>Enter the date your Zoo opened:
                <input
                    type="date"
                    name="dateOpened"
                    value={inputs.dateOpened || ""}
                    onChange={handleChange}
                />
            </label>
            </div>
            <br></br>
            <input type="submit" />
        </form>
    )

}
export default ZooFormComponentSimple;