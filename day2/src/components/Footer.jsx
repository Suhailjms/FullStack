// Footer.jsx
import '../assets/css/Footer.css'; // Import the CSS file for styling
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us.</p>
        <ul className="contact-info">
          <li>Email: eventhub@gmail.com</li>
          <li>Phone: 7585748734</li>
        </ul>
      </div>
      <div className="footer-social">
        <h2>Follow Us</h2>
        <ul className="social-icons">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
