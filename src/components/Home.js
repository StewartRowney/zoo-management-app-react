import './Home.css';
import '../media/lion_3898345.png'
import '../media/webbootcamphotoshop.png'

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
          <p className="text-wrapper-2">www.bustingbugszoo.com</p>
          <p className="text-wrapper-3">Follow Us For Less!</p>
        </div>
      </div>
    
    );
  };

  export default Home;