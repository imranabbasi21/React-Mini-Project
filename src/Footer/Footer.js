import React from 'react';
import '../Footer/Footer.css'; // Make sure your CSS is properly imported

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Racing</h3>
        <ul>
          <li>Scuderia Ferrari HP</li>
          <li>Charles Leclerc</li>
          <li>Carlos Sainz</li>
          <li>Hypercar</li>
          <li>GT Series</li>
          <li>Esports</li>
          <li>Scuderia Ferrari Driver Academy</li>
          <li>Scuderia Ferrari Member</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Sports Cars</h3>
        <ul>
          <li>Range</li>
          <li>Configure your Ferrari</li>
          <li>MyFerrari</li>
          <li>Pre-owned</li>
          <li>Dealers</li>
          <li>Recall information</li>
          <li>TechInfo</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Collections</h3>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Shoes</li>
          <li>Eyewear</li>
          <li>Collectibles</li>
          <li>Scuderia Ferrari Selection</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Experiences</h3>
        <ul>
          <li>Corse Clienti</li>
          <li>Ferrari Esports Series</li>
          <li>Ristorante Cavallino</li>
          <li>Ferrari Museums</li>
          <li>Ferrari World Abu Dhabi</li>
          <li>Ferrari Land Barcelona</li>
        </ul>
      </div>
      
      {/* Social Media Section */}
      <div className="social-icons">
        <h3>Follow Us</h3>
        <div className="social-icons-container">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;






// import '../Footer/Footer.css';
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-section">
//         <h3>Racing</h3>
//         <ul>
//           <li>Scuderia Ferrari HP</li>
//           <li>Charles Leclerc</li>
//           <li>Carlos Sainz</li>
//           <li>Hypercar</li>
//           <li>GT Series</li>
//           <li>Esports</li>
//           <li>Scuderia Ferrari Driver Academy</li>
//           <li>Scuderia Ferrari Member</li>
//         </ul>
//       </div>
//       <div className="footer-section">
//         <h3>Sports Cars</h3>
//         <ul>
//           <li>Range</li>
//           <li>Configure your Ferrari</li>
//           <li>MyFerrari</li>
//           <li>Pre-owned</li>
//           <li>Dealers</li>
//           <li>Recall information</li>
//           <li>TechInfo</li>
//         </ul>
//       </div>
//       <div className="footer-section">
//         <h3>Collections</h3>
//         <ul>
//           <li>Men</li>
//           <li>Women</li>
//           <li>Kids</li>
//           <li>Shoes</li>
//           <li>Eyewear</li>
//           <li>Collectibles</li>
//           <li>Scuderia Ferrari Selection</li>
//         </ul>
//       </div>
//       <div className="footer-section">
//         <h3>Experiences</h3>
//         <ul>
//           <li>Corse Clienti</li>
//           <li>Ferrari Esports Series</li>
//           <li>Ristorante Cavallino</li>
//           <li>Ferrari Museums</li>
//           <li>Ferrari World Abu Dhabi</li>
//           <li>Ferrari Land Barcelona</li>
//         </ul>
//       </div>
//       <div className="footer-section">
//         <h3>About Us</h3>
//         <ul>
//           <li>Corporate</li>
//           <li>Sustainability</li>
//           <li>Media Centre</li>
//           <li>News</li>
//           <li>Magazine</li>
//           <li>History</li>
//           <li>Join us</li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

