import { useEffect, useState } from "react";
import addItem from "../apis/addApis";

const ZooFormComponentSimple = ({ isUpdating, zoo, animalType, collection, setCollection }) => {

    const initialInputs = {
        name: '',
        location: '',
        description: '',
        capacity: '',
        price: '',
        dateOpened: '',
    };

    const [inputs, setInputs] = useState(initialInputs);

    const [isFormValid, setIsFormValid] = useState(false);


    useEffect(() => {
        const isValid =
        Object.values(inputs).every(value => value !== '');
        setIsFormValid(isValid);
    }, [inputs]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addItem(animalType, inputs)
        .then(fetchedItems => {
            if (fetchedItems)
                setCollection(...collection, fetchedItems);
            else
                console.error("Unexpected result returned from getNames: ", fetchedItems);
        })
        .catch(e => {console.error("Error calling getNames: ", e)});

        setInputs(initialInputs);
    };

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
            <button className='button' type="submit" disabled={!isFormValid} onClick={handleSubmit}>
                Save
            </button>
        </form>
    )

}
export default ZooFormComponentSimple;