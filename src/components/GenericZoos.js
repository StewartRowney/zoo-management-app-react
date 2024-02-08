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
import Reptiles from './Reptiles';
import Amphibians from './Amphibians'; 
import Birds from './Birds';

const GenericZoos = () =>{

    const [zoo, setZoo] = useState([]);
    const [animalsInZoo, setAnimalsInZoo] = useState([]);




    const { pageId } = useParams();
    

    useEffect ( ()=> {
        console.log(pageId);
        fetch('http://localhost:8080/zoos/' + pageId)
        .then(response => response.json())
        .then(data => {
                console.log(data);
                setZoo(data);
        })
        .catch(error => console.error('Error fetching: ' + error));
    },[]);

    const linkToSend = 'animals/zoo/' + zoo.id

    const getThemAnimals = () => {
    getAllItems(linkToSend)
    .then(fetchedItems => {
        if (fetchedItems) {
            setAnimalsInZoo(fetchedItems);
        }
    })
}

const determineAnimalType = (uniqueAnimalItem) => {
  for (const key in uniqueAnimalItem) {
    if (key === 'isPoisonous' && uniqueAnimalItem[key]) {
      return 'amphibians';
    } else if (key === 'canFly' && uniqueAnimalItem[key]) {
      return 'birds';
    }
    else if (key === 'isBioluminiscent' && uniqueAnimalItem[key]) {
      return 'fish';
    }
    else if (key === 'numberOfLegs' && uniqueAnimalItem[key]) {
      return 'insects';
    }
    else if (key === 'hasFur' && uniqueAnimalItem[key]) {
      return 'mammals';
    }
  }
  return 'reptiles';
};

const isThisRight = Birds.birdSpecificFields;

const determineSpecificFields = (uniqueAnimalItem) => {

  for (const key in uniqueAnimalItem) {
    if (key === 'isPoisonous' && uniqueAnimalItem[key]) {
      return Amphibians.amphibianSpecificFields;
    } else if (key === 'canFly' && uniqueAnimalItem[key]) {
      return Birds.birdSpecificFields; 
    }
    else if (key === 'isBioluminiscent' && uniqueAnimalItem[key]) {
      return 'fish';
    }
    else if (key === 'numberOfLegs' && uniqueAnimalItem[key]) {
      return 'insects';
    }
    else if (key === 'hasFur' && uniqueAnimalItem[key]) {
      return 'mammals';
    }
  }
  return 'reptiles';
};


    return(

    <div className="animal-background">
          <div className="animal-header">
              <h1 className="animal-h1 align big"> {zoo.name} Information</h1>
              <div>
              <div className='extended-content size'>
              <p><b>Name :</b> {zoo.name}</p>
              <p><b>Location :</b> {zoo.location}</p>
              <p><b>Description :</b> {zoo.description}</p>
              <p><b>Capacity :</b> {zoo.capacity}</p>
              <p><b>Price :</b>{zoo.price}</p>
              <p><b>Date Opened :</b> {zoo.dateOpened}</p>
              </div>
              <div className="animal-row">
              <Button onClick={getThemAnimals}>See all Animals</Button>
              {animalsInZoo.map(animalWithinZoo => (
                <Listbox key={animalWithinZoo.id} animal={animalWithinZoo} animals={animalsInZoo} setAnimals={setAnimalsInZoo} animalType={determineAnimalType(animalWithinZoo)} specificFields={determineSpecificFields(animalWithinZoo)} />
              ))}
              
              </div>  
              </div>
          </div>
    </div>
    )
}

export default GenericZoos;