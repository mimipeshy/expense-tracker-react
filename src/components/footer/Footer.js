import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => (
  <div className="footer-container">
    <Link className="footer-link" to="/measures">
      <i className="fas fa-balance-scale-right" />
      <span>Create Measurement</span>
    </Link>
    <Link className="footer-link" to="/">
      <i className="fas fa-bars" />
      <span> View All </span>
    </Link>
    <Link className="footer-link" to="/progress">
      <i className="fas fa-tasks" />
      <span>View Expenses</span>
    </Link>
    <Link className="footer-link" to="/more">
      <i className="fas fa-info" />
      <span>Create Expense</span>
    </Link>
  </div>
);

export default Footer;
