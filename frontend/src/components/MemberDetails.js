import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/MemberDetails.css";

function MemberDetail() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/members/${id}`
        );
        setMember(response.data);
      } catch (err) {
        setError("Error fetching member details");
      }
    };
    fetchMember();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!member) return <p>Loading...</p>;

  return (
    <div className="member-detail-page">
      <header className="header">
        <h1>SygOCh Synergy</h1>
        <h2>Member Details</h2>
      </header>
      <div className="details-container">
        {member.image && (
          <img
            src={`http://localhost:5000/uploads/${member.image}`}
            alt={member.name}
            className="member-image"
          />
        )}
        <h3>{member.name}</h3>
        <p>
          <strong>Roll Number:</strong> {member.rollNumber}
        </p>
        <p>
          <strong>Year:</strong> {member.year}
        </p>
        <p>
          <strong>Degree:</strong> {member.degree}
        </p>
        <p>
          <strong>About Project:</strong> {member.aboutProject}
        </p>
        <p>
          <strong>Hobbies:</strong> {member.hobbies}
        </p>
        <p>
          <strong>Certificate:</strong> {member.certificate}
        </p>
        <p>
          <strong>Internship:</strong> {member.internship}
        </p>
        <p>
          <strong>Aim:</strong> {member.aboutAim}
        </p>
        <Link to="/view-members">
          <button className="back-button">Back to Members</button>
        </Link>
      </div>
    </div>
  );
}

export default MemberDetail;
