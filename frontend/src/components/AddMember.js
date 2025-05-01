import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AddMember.css'; // Correct path to CSS file

function AddMember() {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [year, setYear] = useState('');
  const [degree, setDegree] = useState('');
  const [aboutProject, setAboutProject] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [certificate, setCertificate] = useState('');
  const [internship, setInternship] = useState('');
  const [aboutAim, setAboutAim] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !rollNumber || !year || !degree || !aboutProject || !hobbies || !certificate || !internship || !aboutAim) {
      setError('All fields are required');
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('rollNumber', rollNumber);
    formData.append('year', year);
    formData.append('degree', degree);
    formData.append('aboutProject', aboutProject);
    formData.append('hobbies', hobbies);
    formData.append('certificate', certificate);
    formData.append('internship', internship);
    formData.append('aboutAim', aboutAim);
    if (image) formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/members', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/view-members');
    } catch (err) {
      setError(err.response?.data?.message || 'Error adding member');
    }
  };

  return (
    <div className="add-member-page">
      <header className="header">
        <h1>SygOCh Synergy</h1>
        <h2>Add a New Team Member</h2>
      </header>
      <div className="form-container">
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter member's name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rollNumber">Roll Number</label>
            <input
              type="text"
              id="rollNumber"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              placeholder="Enter roll number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Enter year"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              placeholder="Enter degree"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aboutProject">About Project</label>
            <input
              type="text"
              id="aboutProject"
              value={aboutProject}
              onChange={(e) => setAboutProject(e.target.value)}
              placeholder="Enter project details"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hobbies">Hobbies (comma separated)</label>
            <input
              type="text"
              id="hobbies"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              placeholder="Enter hobbies"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="certificate">Certificate</label>
            <input
              type="text"
              id="certificate"
              value={certificate}
              onChange={(e) => setCertificate(e.target.value)}
              placeholder="Enter certificate details"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="internship">Internship</label>
            <input
              type="text"
              id="internship"
              value={internship}
              onChange={(e) => setInternship(e.target.value)}
              placeholder="Enter internship details"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aboutAim">About Your Aim</label>
            <input
              type="text"
              id="aboutAim"
              value={aboutAim}
              onChange={(e) => setAboutAim(e.target.value)}
              placeholder="Enter your aim"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Browse</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
        <Link to="/">
          <button className="back-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default AddMember;