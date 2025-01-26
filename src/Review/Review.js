import './Review.css';
const CardList = () => {
  const cards = [
    { id: 1, image: 'https://images.cars.com/cldstatic/wp-content/uploads/honda-passport-trailsport-2024-exterior-oem-01.jpg?w=800',
      text:         'Kia-passport-trailsport-2024-exterior-oem-01 Departures: 2025 Kia Passport Priced From $43,795' },
    { id: 2, image: 'https://images.cars.com/cldstatic/wp-content/uploads/dodge-hornet-2025-exterior-oem-04.jpg?w=800', text: 'Mitsubishi Teases 2025 Outlander Due in February' },
    { id: 3, image: 'https://images.cars.com/cldstatic/wp-content/uploads/mercedes-benz-glc-350e-2025-07-exterior-rear-angle.jpg?w=800', text: '10 Biggest News Stories of the Week: Mercedes-Benz GLC350e Pulls Plug on Chevrolet Traverse' },
    { id: 4, image: 'https://images.cars.com/cldstatic/wp-content/uploads/gmc-acadia-2024-interior-csc-02.jpg?w=800', text: 'How Do Car Seats Fit in a 2024 GMC Hummer EV SUV?' }
  ];

  return (
    <>
    <div className='ReviewHeading'>
    <h2> News & Reviwe</h2>
    <div className="Reviewcontainer">
   
      {cards.map(card => (
        <div key={card.id} className="cardReview">
           <img src={card.image} alt={`Card ${card.id}`} className="cardReview-image"/>
           <div className="cardReview-text"> {card.text}</div>
        </div>
      ))}
    </div>
    </div>
  </>
  );
};

export default CardList;
