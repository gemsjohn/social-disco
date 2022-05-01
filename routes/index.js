const router = require('express').Router();


// If invalid route, let user know with 404 error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
