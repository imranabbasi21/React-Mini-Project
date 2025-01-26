import './NewCar.css'; 

const NewCar = () => {
  return (
    <div className="banner-container">
      <div className="NewCarcontent">
        <div className="text-container">
          <h1>Find your next new car</h1>
        </div>
        <div className="image-container">
          <img 
            // src="https://autoelectric24.ru/wp-content/uploads/2020/10/kia-sportage.png" 
            src="https://images.cars.com/xxlarge/in/v2/stock_photos/ae79248d-d7c9-4adb-bbfb-7715663a351d/f4a64172-86bd-4c85-8ff9-c564819ad4bc.png" 
            alt="Banner" 
            className="banner-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default NewCar;
