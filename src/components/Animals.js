import "./Animals.css";
import AnimalButton from "./AnimalButton";
import amphibian from "../media/amphibian.jpg"
import mammal from "../media/mammal.jpg"
import reptile from "../media/reptile.jpg"
import fish from "../media/fish.jpg"
import insect from "../media/insect.jpg"
import bird from "../media/bird.jpg"

const Animals = () => {
    return (
    <div className="animal-background">
        <div className="animal-header">
            <h1 className="animal-h1">EXPLORE THE ANIMAL KINGDOM</h1>
        </div>
        <div className="animal-row">
            <div className="animal-category">
              <img src={amphibian} alt="Amphibian" className="animal-image"></img>
              <h2 className="animal-category-heading">Amphibians</h2>
            </div>
            <div className="animal-category">
              <img src={mammal} alt="Mammal" className="animal-image"></img>
              <h2 className="animal-category-heading">Mammals</h2>
            </div>
            <div className="animal-category">
              <img src={reptile} alt="Reptile" className="animal-image"></img>
              <h2 className="animal-category-heading">Reptiles</h2>
            </div>
        </div>
        <div className="animal-row">
            <div className="animal-category">
              <img src={bird} alt="Bird" className="animal-image"></img>
              <h2 className="animal-category-heading">Birds</h2>
            </div>
            <div className="animal-category">
              <img src={insect} alt="Insect" className="animal-image"></img>
              <h2 className="animal-category-heading">Insects</h2>
            </div>
            <div className="animal-category">
              <img src={fish} alt="Fish" className="animal-image"></img>
              <h2 className="animal-category-heading">Fish</h2>
            </div>
        </div>
    </div>
    )
};

export default Animals;

{/* <div className="frame-3-1-20" id="id-31228">
        <div className="rectangle-1-1-112" id="id-15316"></div>
        <div className="amphibians-1-1344" id="id-15318">
          <AnimalButton label="Amphibians"> Amphibians </AnimalButton>
        </div>
        <div className="birds-1-948" id="id-31205">
        <AnimalButton label="Birds"> Birds </AnimalButton>
        </div>
        <div className="reptiles-1-3240" id="id-31206">
        <AnimalButton label="Reptiles"> Reptiles </AnimalButton>
        </div>
        <div className="insects-1-18" id="id-31207">
        <AnimalButton label="Insects"> Insects </AnimalButton>
        </div>
        <div className="mammals-1-4002" id="id-31208">
        <AnimalButton label="Mammals"> Mammals </AnimalButton>
        </div>
        <div className="fishes-1-2279" id="id-31209">
        <AnimalButton label="Fishes"> Fishes </AnimalButton>
        </div>
        <div className="explore-the-ani-1-840" id="id-3148">
          <span className="explore-the-ani-1-840-0">
            {"EXPLORE THE ANIMAL KINGDOM!"}
          </span>
        </div>
        <div className="group-4-1-700" id="id-3150">
          <div className="mask-group-1-51" id="id-3151">
            <div className="nodeBg-3151" id="id-bg-3151">
              {" "}
            </div>
          </div>
          <div className="mask-group-2-600" id="id-3166">
            <div className="nodeBg-3166" id="id-bg-3166">
              {" "}
            </div>
          </div>
        </div>
        <div className="group-5-1-0" id="id-3181">
          <div className="mask-group-1-20" id="id-3182">
            <div className="nodeBg-3182" id="id-bg-3182">
              {" "}
            </div>
          </div>
          <div className="mask-group-2-1260" id="id-3197">
            <div className="nodeBg-3197" id="id-bg-3197">
              {" "}
            </div>
          </div>
        </div>
        <div className="group-7-1-1030" id="id-31143">
          <div className="mask-group-1-1550" id="id-31144">
            <div className="nodeBg-31144" id="id-bg-31144">
              {" "}
            </div>
          </div>
          <div className="mask-group-2-195" id="id-31159">
            <div className="nodeBg-31159" id="id-bg-31159">
              {" "}
            </div>
          </div>
        </div>
        <div className="group-6-1-3816" id="id-31112">
          <div className="mask-group-1-297" id="id-31113">
            <div className="nodeBg-31113" id="id-bg-31113">
              {" "}
            </div>
          </div>
          <div className="mask-group-2-2046" id="id-31128">
            <div className="nodeBg-31128" id="id-bg-31128">
              {" "}
            </div>
          </div>
        </div>
        <div className="group-8-1-1809" id="id-31174">
          <div className="mask-group-1-2425" id="id-31175">
            <div className="nodeBg-31175" id="id-bg-31175">
              {" "}
            </div>
          </div>
          <div className="mask-group-2-2520" id="id-31190">
            <div className="nodeBg-31190" id="id-bg-31190">
              {" "}
            </div>
          </div>
        </div>
        <div className="frame-2-1-3232" id="id-2747">
          <div className="group-3-1-3720" id="id-3149">
            <div className="mask-group-1-605" id="id-2144">
              <div className="nodeBg-2144" id="id-bg-2144">
                {" "}
              </div>
            </div>
            <div className="mask-group-2-1230" id="id-2128">
              <div className="nodeBg-2128" id="id-bg-2128">
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div> */}