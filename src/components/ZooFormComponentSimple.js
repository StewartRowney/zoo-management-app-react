import { useEffect, useState } from "react";

const ZooFormComponentSimple = (onSubmit) => {

    const [inputs, setInputs] = useState({
        name: '',
        location: '',
        description: '',
        capacity: '',
        price: '',
        dateOpened: '',
      });

    const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = 
    inputs.name !== ''
    && inputs.location !== ''
    && inputs.description !== ''
    && inputs.capacity !== ''
    && inputs.price !== ''
    && inputs.dateOpened !== '';
    
    setIsFormValid(isValid);
  }, [inputs]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputs)

        setInputs({
            name: '',
            location: '',
            description: '',
            capacity: '',
            price: '',
            dateOpened: '',
          });

    }

    return (
        <form>
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
                    type="text"
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
            <button type="submit" disabled={!isFormValid} onClick={handleSubmit}>
          Save
        </button>
        </form>
    )

}
export default ZooFormComponentSimple;