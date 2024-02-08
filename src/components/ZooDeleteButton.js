import { useEffect, useState } from "react";
import deleteItem from "../apis/deleteApi";
import deleteItems from "../apis/deleteItemsApi";
import getAllItems from "../apis/getApis";
import PopUpConfirmationButton from "./PopUpConfirmationButton";

const ZooDeleteButton = ({zoo, itemType, zoos, setZoos}) => {

    const [message, setMessage] = useState('');
    const [animals, setAnimals] = useState();

    useEffect(() => {
        if (zoo) {
            getAllItems('animals/zoo/' + zoo.id)
            .then(fetchedItems => {
                setAnimals(fetchedItems);
                if (fetchedItems.length !== 0) {
                    setMessage('If you delete this zoo, you will delete all of the animals in this zoo. Are you sure?')
                }
                else {
                    setMessage('Are you sure you want to delete this zoo?')
                }
            })
            .catch(e => {console.error("Error calling getAnimalsInZoo: ", e)});
        }
    },[]);

    const deleteItemEvent = () => {
        if (animals.length !== 0) {
            deleteZooWithAnimals();
        }
        else {
            sendDelete();
        }
    };

    const sendDelete = () => {
        deleteItem(itemType, zoo)
            .then(fetchedItems => {
            if (fetchedItems) {
                setZoos(zoos.filter(i => i !== zoo));
            }
        });
    }

    const deleteZooWithAnimals = () => {

        const ids = animals.map(animal => animal.id)

        deleteItems('animals', ids)
            .then(animalsDeleted => {
            if (animalsDeleted) {
                sendDelete();
            }
            else {
                console.log('Error deleting ' + zoo.name + 's animals')
            }
        });
    }

    return (
        <div className="delete-button-div">
            <PopUpConfirmationButton
            methodOnConfirm = {deleteItemEvent}
            buttonName = 'Delete'
            message = {message}
            />          
        </div>
    );
}

export default ZooDeleteButton;