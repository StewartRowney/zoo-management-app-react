import "./Animals.css";
import AnimalButton from "./AnimalButton";
import amphibian from "../media/amphibian.jpg"
import mammal from "../media/mammal.jpg"
import reptile from "../media/reptile.jpg"
import fish from "../media/fish.jpg"
import insect from "../media/insect.jpg"
import bird from "../media/bird.jpg"
import { Link } from "react-router-dom";

const Animals = () => {
    return (
    <div className="animal-background">
        <div className="animal-header">
            <h1 className="animal-h1">EXPLORE THE ANIMAL KINGDOM</h1>
        </div>
        <div className="animal-row">
            <Link className="animal-category" to={"/animals/amphibians"}>
              <img src={amphibian} alt="Amphibian" className="animal-image"></img>
              <h2 className="animal-category-heading">Amphibians</h2>
            </Link>
            <Link className="animal-category" to={"/animals/mammals"}>
              <img src={mammal} alt="Mammal" className="animal-image"></img>
              <h2 className="animal-category-heading">Mammals</h2>
            </Link>
            <Link className="animal-category" to={"/animals/reptiles"}>
              <img src={reptile} alt="Reptile" className="animal-image"></img>
              <h2 className="animal-category-heading">Reptiles</h2>
            </Link>
        </div>
        <div className="animal-row">
            <Link className="animal-category" to={"/animals/birds"}>
              <img src={bird} alt="Bird" className="animal-image"></img>
              <h2 className="animal-category-heading">Birds</h2>
            </Link>
            <Link className="animal-category" to={"/animals/insects"}>
              <img src={insect} alt="Insect" className="animal-image"></img>
              <h2 className="animal-category-heading">Insects</h2>
            </Link>
            <Link className="animal-category" to={"/animals/fishes"}>
              <img src={fish} alt="Fish" className="animal-image"></img>
              <h2 className="animal-category-heading">Fish</h2>
            </Link>
        </div>
    </div>
    )
};

export default Animals;
