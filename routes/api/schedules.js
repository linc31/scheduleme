const express = require('express');
const router = express.Router()
var schedulesCtrl = require('../../controllers/schedules');

router.get('/getSchedule', schedulesCtrl.getSchedules)
router.post('/addSchedule', schedulesCtrl.addSchedules)
router.put('/updateSchedule/:id', schedulesCtrl.updateSchedules)
router.put('/removeSchedule/:patient_id', schedulesCtrl.removeSchedules)

module.exports = router;

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/signup');
// }