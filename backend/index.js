const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const memberRoutes = require ('./routes/members');
require ('dotenv').config ();

const app = express ();

// Middleware
app.use (cors ()); // Allow cross-origin requests from frontend
app.use (express.json ()); // Parse JSON bodies
app.use ('/uploads', express.static ('uploads')); // Serve uploaded images

// Connect to MongoDB
mongoose
  .connect (process.env.MONGO_URI)
  .then (() => console.log ('MongoDB connected'))
  .catch (err => console.error ('MongoDB connection error:', err));

// Mount routes
app.use ('/api/members', memberRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen (PORT, () => {
  console.log (`Server running on port ${PORT}`);
});
