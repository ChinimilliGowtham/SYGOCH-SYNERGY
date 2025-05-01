import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ViewMembers.css";

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/members");
        setMembers(response.data);
      } catch (err) {
        setError("Error fetching members");
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="view-members-page">
      <header className="header">
        <h1>SygOCh Synergy</h1>
        <h2>Team Members</h2>
      </header>
      <div className="members-container">
        {error && <p className="error-message">{error}</p>}
        {members.length === 0 ? (
          <p>No members found.</p>
        ) : (
          <div className="members-grid">
            {members.map((member) => (
              <div key={member._id} className="member-card">
                {member.image && (
                  <img
                    src={`http://localhost:5000/uploads/${member.image}`}
                    alt={member.name}
                    className="member-image"
                  />
                )}
                <h3>{member.name}</h3>
                <p>Roll Number: {member.rollNumber}</p>
                <Link to={`/member/${member._id}`}>
                  <button className="view-details-button">View Details</button>
                </Link>
              </div>
            ))}
          </div>
        )}
        <Link to="/">
          <button className="back-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ViewMembers;
