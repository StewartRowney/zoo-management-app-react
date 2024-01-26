import './Home.css';
import '../media/lion_3898345.png'
import '../media/webbootcamphotoshop.png'

const Home = () => {
    return (
      <div className="frame">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper">Animals</div>
              <img className="img" alt="Rectangle" src="rectangle-6.svg" />
              <div className="text">{""}</div>
              
              <img className="image" alt="Imagelion" src="lion_3898345.png" />
              <div className="ellipse" />
              <div className="div">BUG BUSTERS ZOO</div>
              <p className="the-best-zoo">
                The best Zoo Management App
                <br />
                for your Zoos in the UK and World.
              </p>
              <div className="text-wrapper-2">www.bustingbugszoo.com</div>
              <div className="text-wrapper-3">Follow Us For Less!</div>
              {/* <img className="button" alt="Button" src="button-1.svg" />
              <p className="p">Click to see our story</p> */}
            </div>
            <div className="text-wrapper-4">Zoos</div>
            <div className="text-wrapper-5">Home</div>
            {/* <img className="button-2" alt="Button" src="button.png" /> */}
          </div>
        </div>
      </div>
    );
  };

  export default Home;