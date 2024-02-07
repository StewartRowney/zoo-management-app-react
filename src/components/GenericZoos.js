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

const GenericZoos = () =>{

    const [zoo, setZoo] = useState([]);
    const [animalsInZoo, setAnimalsInZoo] = useState([]);

    getAllItems('animals/zoo/' + zoo.id)
        .then(fetchedItems => {
            if (fetchedItems) {
                setAnimalsInZoo(fetchedItems);
            }
        })


    const { pageId } = useParams();
    const animalType = 'zoo';

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
              <Button onClick={getAllItems}>See all Animals</Button>
              {animalsInZoo.map(animalWithinZoo => (
                        <Listbox key={animalWithinZoo.id} animal={animalWithinZoo} animals={animalsInZoo} setAnimals={setAnimalsInZoo}/>
                    ))}
              
              </div>  
              </div>
          </div>
    </div>
    )
}

export default GenericZoos;