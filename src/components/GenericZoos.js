import './Home.css';
import "./Animals.css";
import Listbox from "./Listbox";
import { useEffect, useState } from "react"
import getAllItems from "../apis/getApis";
import { useParams } from 'react-router-dom';
import './Zoo.css';
import './GenericZoos.css';
import "./OurStory.css";

const GenericZoos = () =>{

    const [zoo, setZoo] = useState([]);
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
              
              <h1 className="title-h2 align big"> Available Animals</h1>
              <div className="animal-row">
              
              </div>  
              </div>
          </div>
    </div>
    )
}

export default GenericZoos;