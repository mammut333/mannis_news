const router = require('express').Router();
const newsController = require('./controllers/newsController');
const settingsController = require('./controllers/settingsController');

router.get('/admin', newsController.renderHome);
router.get('/home', newsController.renderHome);
router.get('/', settingsController.renderSettings);
router.get('/settings', settingsController.renderSettings);
router.post('/settings', settingsController.receiveSettings);

module.exports = router;