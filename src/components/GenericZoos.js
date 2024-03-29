import './Home.css';
import "./Animals.css";
import Listbox from "./Listbox";
import { useEffect, useState } from "react"
import getAllItems from "../apis/getApis";
import { useParams } from 'react-router-dom';
import './Zoo.css';
import './GenericZoos.css';
import "./OurStory.css";
import { Button } from '@mui/material';
import { reptileSpecificFields } from './Reptiles';
import { birdSpecificFields } from './Birds';
import { amphibiansSpecificFields } from './Amphibians';
import { fishSpecificFields } from './Fish';
import { insectSpecificFields } from './Insects';
import { mammalSpecificFields } from './Mammals';
import deleteItems from '../apis/deleteItemsApi';
import PopUpConfirmationButton from './PopUpConfirmationButton';
import './PopupFormButton.css';

const GenericZoos = () =>{

    const [zoo, setZoo] = useState([]);
    const [animalsInZoo, setAnimalsInZoo] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    

    const { pageId } = useParams();
    

    useEffect ( ()=> {
      getZooInfo();
      getThemAnimals();
    },[pageId]);
    
  

    const getZooInfo = () => {
    const linkToFetchZooInfo =  'zoos/' + pageId
      getAllItems(linkToFetchZooInfo)
      .then(fetchedItems => {
        if (fetchedItems) {
          setZoo(fetchedItems)
        }
      })
      .catch(error => console.error('Error fetching zoo data: ' + error));
    }

    const getThemAnimals = () => {
    const linkToSend = 'animals/zoo/' + pageId
    getAllItems(linkToSend)
    .then(fetchedItems => {
        if (fetchedItems) {
            setAnimalsInZoo(fetchedItems);
        }
    })
    .catch(error => console.error('Error fetching animals in Zoo: ' + error));
}

useEffect ( ()=> {
  getZooInfo();
  getThemAnimals();
},[]);

const filteredAnimals = animalsInZoo.filter((animal) =>
animal.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const handleSearchTermChange = (e) => {
  setSearchTerm(e.target.value);
};

const determineAnimalType = (uniqueAnimalItem) => {
  for (const key in uniqueAnimalItem) {
    if (key === 'makesNoise' ) {
      return 'amphibians';
    } else if (key === 'canFly') {
      return 'birds';
    }
    else if (key === 'canDischargeElectricity') {
      return 'fish';
    }
    else if (key === 'numberOfLegs' ) {
      return 'insects';
    }
    else if (key === 'hasFur' ) {
      return 'mammals';
    }
    else if (key === 'hasLegs') {
      return 'reptiles';
    }
  }
  return 'undefined';
};


const determineSpecificFields = (uniqueAnimalItem) => {

  for (const key in uniqueAnimalItem) {
    if (key === 'isPoisonous' ) {
      return amphibiansSpecificFields;
    } else if (key === 'canFly') {
      return birdSpecificFields; 
    }
    else if (key === 'isBioluminiscent') {
      return fishSpecificFields
    }
    else if (key === 'numberOfLegs') {
      return insectSpecificFields
    }
    else if (key === 'hasFur' ) {
      return mammalSpecificFields
    }
    else if (key === 'hasLegs') {
      return reptileSpecificFields;
    }
  }
  return undefined ;
};

const deleteAllAnimals =() => {
  const animalIds = animalsInZoo.map(animal => animal.id);
  const deleterLine = 'animals';
  deleteItems(deleterLine,animalIds);
 setAnimalsInZoo([]);
}


    return(

    <div className="animal-background">
          <div className="animal-header">
              <h1 className="animal-h1 align big"> {zoo.name} Information</h1>
              <div>
              <div className='extended-content size'>
              <p><b>Name: </b> {zoo.name}</p>
              <p><b>Location: </b> {zoo.location}</p>
              <p><b>Description: </b> {zoo.description}</p>
              <p><b>Capacity: </b> {zoo.capacity}</p>
              <p><b>Price: </b>${zoo.price}</p>
              <p><b>Date Opened: </b> {zoo.dateOpened}</p>
              </div>
              <div className="animal-row">
              <div className="delete-button-div">
            <PopUpConfirmationButton
            methodOnConfirm = {deleteAllAnimals}
            buttonName = 'Delete All Animal'
            message = {'Are you sure you want to delete ALL ANIMALS?'}
            />          
        </div>
              <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="search-bar"
      />
              {filteredAnimals.map(animalWithinZoo => (
                <Listbox key={animalWithinZoo.id} animal={animalWithinZoo} animals={animalsInZoo} setAnimals={setAnimalsInZoo} animalType={determineAnimalType(animalWithinZoo)} specificFields={determineSpecificFields(animalWithinZoo)} />
              ))}
              </div>  
              </div>
          </div>
    </div>
    )
}

export default GenericZoos;