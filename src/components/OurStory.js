import './Home.css';
import "./Animals.css";
import "./OurStory.css"

const OurStory = () => {
    
    return(
        
      <div className="animal-background">
          <div className="animal-header">
              <h1 className="animal-h1">Our Story</h1>
          </div>
        <div>
            <h2 className='title-h2 big'>Who we are</h2>
            <p className='tab'>We are bug buster and working zoo management app. Our story is one of dedication to creating a haven for animals, fostering education, and inspiring a deep connection between people and the natural world. Our journey began as four individuals with a shared love for animals and a desire to make a difference. United by our common goal, we embarked on this project with the aim of developing a user-friendly and efficient platform to streamline zoo operations and promote wildlife conservation.</p>
            <p className='tab'>Behind every line of code, every carefully crafted exhibit, and every educational program, there's a shared passion that unites our team – a commitment to wildlife conservation and environmental stewardship. We believe that by creating a space where people can connect with animals and nature, we contribute to a collective effort to protect the planet and its inhabitants. </p>
            <h2 className='title-h2 big'>What we do</h2>
            <p className='tab'>At the heart of our project lies a commitment to leveraging technology for the greater good of wildlife and the environment. We believe that by empowering zoos with efficient management tools and promoting awareness about conservation efforts, we can contribute to the protection and preservation of our planet's biodiversity.</p>
            <h3 className='title-h3 big'>The Team Behind the Dream</h3>
            <li className='tab'>Stewart</li>
            <li className='tab'>Ayush</li>
            <li className='tab'>Thomas</li>
            <li className='tab'>Abhijeet</li>
        </div>
      </div>
      
    );
  }
  
  export default OurStory;