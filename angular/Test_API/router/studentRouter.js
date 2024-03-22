
const express = require('express');
const StudentController = require('../controller/studentController');

class StudentRouter {
  constructor() {
    this.router = express.Router();
    this.initRoutes();
  }

  initRoutes() {
    this.router.get('/', StudentController.getAllStudents);
    this.router.post('/', StudentController.createStudent);
    this.router.get('/:roll_no',StudentController.getStudentByRollNo);
    this.router.put('/:id', StudentController.updateStudent);
    this.router.delete('/:id', StudentController.deleteStudent);
  }
}

module.exports = new StudentRouter().router;
