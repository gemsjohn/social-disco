const router = require('express').Router();
const { getAllUsers } = require('../../controllers/users-controller');

// Set up GET all /api/users
router
  .route('/')
  .get()
  .post();

module.exports = router;