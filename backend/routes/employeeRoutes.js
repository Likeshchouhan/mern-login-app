const express = require('express');
const { createEmployee, getEmployees, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

const router = express.Router();

router.post('/create', createEmployee);
router.get('/dashboard', getEmployees);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

module.exports = router;
