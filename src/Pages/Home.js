
import Banner from '../Banner/Banner';
import CardApp from '../Cards/Card'; 
import './Home.css';
import Review from '../Review/Review'
import '../Review/Review'
import OverviewSection from '../Curser/Curser'

const Home = () => {
  return (
    <><Banner/> 
    <div className='firstHeading' >
      <h1>The road is yours</h1>
      </div>
      <div className='firstPara'>
      <p>SUV inventory available</p>
      </div>
    <div className="card-container">
      <CardApp/>
    </div>
    <Review/> 
    <div>
    </div>
    </>
  );
};

export default Home;
