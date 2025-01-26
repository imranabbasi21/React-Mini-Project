import React, { useState, useEffect } from 'react';
import './Card.css';

const CardApp = ({ image, title, description, carDetails, carImage, engineNumber, fuelEfficiency, Performance }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentCarDetails, setCurrentCarDetails] = useState('');
  const [currentCarImage, setCurrentCarImage] = useState('');
  const [currentEngineNumber, setCurrentEngineNumber] = useState('');
  const [currentFuelEfficiency, setCurrentFuelEfficiency] = useState(''); 
  const [currentPerformance, setCurrentPerformance] = useState('');

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('blurred'); 
    } else {
      document.body.classList.remove('blurred'); 
    }

    return () => {
      document.body.classList.remove('blurred'); 
    };
  }, [showPopup]);

  const handleButtonClick = () => {
    setCurrentCarDetails(carDetails);
    setCurrentCarImage(carImage);
    setCurrentEngineNumber(engineNumber);  
    setCurrentFuelEfficiency(fuelEfficiency); 
    setCurrentPerformance(Performance);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentCarDetails('');
    setCurrentCarImage('');
    setCurrentEngineNumber('');
    setCurrentFuelEfficiency('');
    setCurrentPerformance('');
  };

  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
        <div className="ButDiv">
          <button className="btnCard" onClick={handleButtonClick}>More Details</button>
        </div>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>Car Details</h3>
              <p>{currentCarDetails}</p>
              <div className='spec-dev'>
                <p><strong>Engine Number : </strong> {currentEngineNumber}</p>
                <p><strong>Fuel Efficiency : </strong> {currentFuelEfficiency}</p>
                <p><strong>Performance : </strong> {currentPerformance}</p>
              </div>
              <img className='PopImage' src={currentCarImage} alt="Car" />
              <button className="CrossBtn" onClick={closePopup}>X</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Imran = () => {
  const carDetailsArray = [
    {
      image: 'https://i.pinimg.com/736x/d3/8c/c0/d38cc0069879cbd26e8f47d614c59fac.jpg',
      title: 'Tesla Model S',
      description: 'Electric luxury sedan',
      carDetails: 'Tesla Model S: Year 2024, Range 370 miles, 0-60 in 2.3 seconds',
      carImage: 'https://avatars.mds.yandex.net/i?id=e6fadf2f27a4dc40d49ba25b96e2d365-5273370-images-thumbs&ref=rim&n=33&w=300&h=200',
      engineNumber: 'TSM1234567890',
      fuelEfficiency: '120 MPGe city / 112 MPGe highway',
      Performance: 'Horsepower, torque, 0-60 time, top speed'
    },
    {
      image: 'https://a.d-cd.net/f971968s-960.jpg',
      title: 'BMW X5',
      description: 'Luxury SUV with dynamic handling',
      carDetails: 'BMW X5: Year 2021, 0-60 in 5.3 seconds, Luxurious interior',
      carImage: 'https://avatars.mds.yandex.net/i?id=c33090cc14755032b6cb353e8ad92a65-5237668-images-thumbs&n=13',
      engineNumber: 'BMWX51234567',
      fuelEfficiency: '21 MPG city / 26 MPG highway', 
      Performance: 'Horsepower, torque, 0-60 time, top speed'
    },
    {
      image: 'https://a.d-cd.net/9ab44b4s-960.jpg',
      title: 'Audi Q7',
      description: 'Spacious and high-tech SUV',
      carDetails: 'Audi Q7: Year 2023, Advanced safety features, 3-row seating',
      carImage: 'https://images.caricos.com/k/kia/2012_kia_trackster_concept/images/1600x1200/2012_kia_trackster_concept_7_1600x1200.jpg',
      engineNumber: 'AUDI-Q7001234',
      fuelEfficiency: '19 MPG city / 25 MPG highway' ,
      Performance: 'Horsepower, torque, 0-60 time, top speed'
    },
    {
      image: 'https://auto.vercity.ru/gallery/img/automobiles/Kia/2007%20Kia%20Kee%20Concept/900x/2007%20Kia%20Kee%20Concept%20040.jpg',
      title: 'Kia Kee Concept',
      description: 'Innovative concept car',
      carDetails: 'Kia Kee Concept: Year 2007, Advanced styling, Concept vehicle',
      carImage: 'https://s.alicdn.com/@sc04/kf/Hd99b3a9a563c45a49f12a217499a8aef8.jpg',
      engineNumber: 'KIA-KEE2007',
      fuelEfficiency: '18 MPG city / 26 MPG highway',
      Performance: 'Horsepower, torque, 0-60 time, top speed'
    },
  ];

  return (
    <div className="card-container">
      {carDetailsArray.map((car, index) => (
        <CardApp
          key={index}
          image={car.image}
          title={car.title}
          description={car.description}
          carDetails={car.carDetails}
          carImage={car.carImage}
          engineNumber={car.engineNumber}
          fuelEfficiency={car.fuelEfficiency}
          Performance={car.Performance}
        />
      ))}
    </div>
  );
};

export default Imran;




// import React, { useState } from 'react';
// import './Card.css';

// const CardApp = ({ image, title, description, carDetails, carImage }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [currentCarDetails, setCurrentCarDetails] = useState('');
//   const [currentCarImage, setCurrentCarImage] = useState('');

//   const handleButtonClick = () => {
//     setCurrentCarDetails(carDetails);
//     setCurrentCarImage(carImage);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setCurrentCarDetails('');
//     setCurrentCarImage('');
//   };

//   return (
//     <div className="card">
//       <img src={image} alt={title} className="card-image" />
//       <div className="card-content">
//         <h2 className="card-title">{title}</h2>
//         <p className="card-description">{description}</p>
//       </div>
//       <div className="ButDiv">
//         <button className="btnCard" onClick={handleButtonClick}>More Details</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Car Details</h3>
//             <p>{currentCarDetails}</p>
//             <img className='PopImage' src={currentCarImage} alt="Car" />
//             <button className="CrossBtn" onClick={closePopup}>X</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// const Imran = () => {
//   const carDetailsArray = [
//     {
//       image: 'https://i.pinimg.com/736x/d3/8c/c0/d38cc0069879cbd26e8f47d614c59fac.jpg',
//       title: 'Tesla Model S',
//       description: 'Electric luxury sedan',
//       carDetails: 'Tesla Model S: Year 2024, Range 370 miles, 0-60 in 2.3 seconds',
//       carImage: 'https://avatars.mds.yandex.net/i?id=e6fadf2f27a4dc40d49ba25b96e2d365-5273370-images-thumbs&ref=rim&n=33&w=300&h=200'
//     },
//     {
//       image: 'https://a.d-cd.net/f971968s-960.jpg',
//       title: 'BMW X5',
//       description: 'Luxury SUV with dynamic handling',
//       carDetails: 'BMW X5: Year 2021, 0-60 in 5.3 seconds, Luxurious interior',
//       carImage: 'https://avatars.mds.yandex.net/i?id=c33090cc14755032b6cb353e8ad92a65-5237668-images-thumbs&n=13'
//     },
//     {
//       image: 'https://a.d-cd.net/9ab44b4s-960.jpg',
//       title: 'Audi Q7',
//       description: 'Spacious and high-tech SUV',
//       carDetails: 'Audi Q7: Year 2023, Advanced safety features, 3-row seating',
//       carImage: 'https://images.caricos.com/k/kia/2012_kia_trackster_concept/images/1600x1200/2012_kia_trackster_concept_7_1600x1200.jpg'
//     },
//     {image: 'https://auto.vercity.ru/gallery/img/automobiles/Kia/2007%20Kia%20Kee%20Concept/900x/2007%20Kia%20Kee%20Concept%20040.jpg',
//       title: 'Audi Q7',
//       description: 'Spacious and high-tech SUV',
//       carDetails: 'Audi Q7: Year 2023, Advanced safety features, 3-row seating',
//       carImage: 'https://s.alicdn.com/@sc04/kf/Hd99b3a9a563c45a49f12a217499a8aef8.jpg'},
      
//     {
//       image: 'https://www.supercars.net/blog/wp-content/uploads/2016/01/2007_Kia_KueConcept2.jpg',
//       title: 'BMW X5',
//       description: 'Luxury SUV with dynamic handling',
//       carDetails: 'BMW X5: Year 2021, 0-60 in 5.3 seconds, Luxurious interior',
//       carImage: 'https://www.carbodydesign.com/archive/2007/01/12-kia-kue-concept/Kia-Kue-Concept-1.jpg'},
//   ];

//   return (
//     <div className="card-container">
//       {carDetailsArray.map((car, index) => (
//         <CardApp
//           key={index}
//           image={car.image}
//           title={car.title}
//           description={car.description}
//           carDetails={car.carDetails}
//           carImage={car.carImage}
//         />
//       ))}
//     </div>
//   );
// };

// export default Imran;


