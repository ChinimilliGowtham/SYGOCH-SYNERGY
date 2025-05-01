const express = require ('express');
const router = express.Router ();
const Member = require ('../models/Member');
const multer = require ('multer');

// Configure multer for image upload
const storage = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb (null, 'uploads/'); // Store images in the uploads/ directory
  },
  filename: (req, file, cb) => {
    cb (null, Date.now () + '-' + file.originalname); // Unique filename with timestamp
  },
});
const upload = multer ({storage});

// POST /api/members - Add a new member
router.post ('/', upload.single ('image'), async (req, res) => {
  try {
    const {
      name,
      rollNumber,
      year,
      degree,
      aboutProject,
      hobbies,
      certificate,
      internship,
      aboutAim,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !rollNumber ||
      !year ||
      !degree ||
      !aboutProject ||
      !hobbies ||
      !certificate ||
      !internship ||
      !aboutAim
    ) {
      return res.status (400).json ({message: 'All fields are required'});
    }

    // Create a new member
    const member = new Member ({
      name,
      rollNumber,
      year,
      degree,
      aboutProject,
      hobbies,
      certificate,
      internship,
      aboutAim,
      image: req.file ? req.file.filename : null, // Store the image filename if uploaded
    });

    // Save to MongoDB
    await member.save ();
    res.status (201).json ({message: 'Member added successfully', member});
  } catch (err) {
    res
      .status (500)
      .json ({message: 'Error adding member', error: err.message});
  }
});

// GET /api/members - Retrieve all members
router.get ('/', async (req, res) => {
  try {
    const members = await Member.find ();
    res.status (200).json (members);
  } catch (err) {
    res
      .status (500)
      .json ({message: 'Error retrieving members', error: err.message});
  }
});

// GET /api/members/:id - Retrieve a single member by ID
router.get ('/:id', async (req, res) => {
  try {
    const member = await Member.findById (req.params.id);
    if (!member) {
      return res.status (404).json ({message: 'Member not found'});
    }
    res.status (200).json (member);
  } catch (err) {
    res
      .status (500)
      .json ({message: 'Error retrieving member', error: err.message});
  }
});

module.exports = router;
