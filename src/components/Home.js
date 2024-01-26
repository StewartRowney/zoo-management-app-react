import './Home.css';
import facebook from "../media/facebook-02.svg";
import insta from "../media/instagram.svg";
import twitter from "../media/new-twitter.svg";
import github from "../media/github.svg";

const Home = () => {
    return (
      <div className='background'>
        <div className='header'>
        <p className="slogan">
            The best Zoo Management App
            <br />
            for your Zoos in the UK and World.
          </p>
          <h1>BUG BUSTERS ZOO</h1>
          <button className="button">Click to see our story</button>
        </div>
        <div className="socials">
          <div>
            <img src={facebook} alt='Facebook' className='social-image'></img>
            <img src={insta} alt='Instagram' className='social-image'></img>
            <img src={twitter} alt='Twitter' className='social-image'></img>
            <img src={github} alt='Github' className='social-image'></img>
          </div>
          <p className="text-wrapper-2">www.bustingbugszoo.com</p>
          <p className="text-wrapper-3">Follow Us For Less!</p>
        </div>
      </div>
    
    );
  };

  export default Home;