const express = require('express');
const router = express.Router()
var schedulesCtrl = require('../../controllers/schedules');

router.get('/getSchedule', isLoggedIn, schedulesCtrl.getSchedules)
router.post('/addSchedule', isLoggedIn, schedulesCtrl.addSchedules)
router.put('/updateSchedule/:id', isLoggedIn, schedulesCtrl.updateSchedules)
router.put('/removeSchedule/:patient_id', isLoggedIn, schedulesCtrl.removeSchedules)

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/signup');
}