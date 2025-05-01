import {Link} from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage () {
  return (
    <div className="landing-page">
      <div className="header">
        <h1>SYGOCH Synergy</h1>
        <h2>Welcome to the Synergy Team Management</h2>
      </div>
      <div className="content">
        <h3>Manage Team</h3>
        <div className="button-group">
          <Link to="/add-member">
            <button className="button">Add Member</button>
          </Link>
          <Link to="/view-members">
            <button className="button">View Members</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
