const express = require('express');
const router = express.Router();
const controller = require('../controllers/resumeController');;

router.get('/dashboard', controller.getList);
router.post('/dashboard', controller.create);
router.get('/dashboard/:id', controller.getOne);
router.put('/dashboard/:id', controller.update);
router.delete('/dashboard/:id', controller.destroy);    

module.exports = router;
