import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import './home.css';

const Home = () => {
  const { session, expenditure } = useSelector((state) => state);

  const { target } = session;

  const {
    total,
    education,
    grocery,
    leisure,
    living,
    transport,
  } = expenditure.summary;

  return (
    <div>
      <div className="home-container">
        <div className="home-summary">
          <div className="home-summary-container">
            <div className="home-summary-info">
              {(total)}
              &nbsp;
              Ksh
            </div>
            <p>Spent</p>
          </div>
          <div className="home-summary-container">
            <div className="home-summary-info">
              {(target)}
              &nbsp;
              Ksh
            </div>
            <p>Target</p>
          </div>
          <div className="home-summary-container">
            <div className="home-summary-info">
              {(target - total)}
              &nbsp;
              Ksh
            </div>
            <p>Balance</p>
          </div>
        </div>
        <div className="home-catalogue-container">
          <div className="home-catalogue">
            <div className="home-catalogue-item">
              <i className="fas fa-graduation-cap" />
              <div>
                <p>
                  {(education)}
                  &nbsp;
                  Ksh
                </p>
                <span>Education</span>
              </div>
            </div>
            <div className="home-catalogue-item">
              <i className="fas fa-shopping-cart" />
              <div>
                <p>
                  {(grocery)}
                  &nbsp;
                  Ksh
                </p>
                <span>Grocery</span>
              </div>
            </div>

            <div className="home-catalogue-item">
              <i className="fas fa-gamepad" />
              <div>
                <p>
                  {(leisure)}
                  &nbsp;
                  Ksh
                </p>
                <span>Leisure</span>
              </div>
            </div>
            <div className="home-catalogue-item">
              <i className="fas fa-home" />
              <div>
                <p>
                  {(living)}
                  &nbsp;
                  Ksh
                </p>
                <span>Living</span>
              </div>
            </div>
            <div className="home-catalogue-item">
              <i className="fas fa-bus" />
              <div>
                <p>
                  {(transport)}
                  &nbsp;
                  Ksh
                </p>
                <span>Transport</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
