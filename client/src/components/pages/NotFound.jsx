import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>404</h1>
      <p className="lead">SORRY, THIS PAGE DOES NOT EXIST</p>
      <hr />
      <Link to="/" className="btn btn-primary">
        Go BACK
      </Link>
      <Footer />
    </div>
  );
};

export default NotFound;
