// studentController.js
const StudentModel = require('../model/studentModel');


class StudentController {
  async getAllStudents(req, res) {
    try {
      const students = await StudentModel.getAllStudents();
      res.json(students);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createStudent(req, res) {
    try {
      const { roll_no, name, date_of_birth, score } = req.body;
      const studentId = await StudentModel.createStudent(
        roll_no,
        name,
        date_of_birth,
        score
      );
      res.json({ id: studentId, roll_no, name, date_of_birth, score });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getStudentByRollNo(req, res) {
    try {
      const roll_no = req.params.roll_no;
      const student = await StudentModel.getByRollNo(roll_no);
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async updateStudent(req, res) {
    try {
      const id = req.params.id;
      const { roll_no,name, date_of_birth, score } = req.body;

      const updatedStudent = await StudentModel.updateStudent(
        roll_no,
        name,
        date_of_birth,
        score
      );

      if (updatedStudent) {
        res.json(updatedStudent);
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteStudent(req, res) {
    try {
      const id = req.params.id;

      const deletedStudent = await StudentModel.deleteStudent(id);

      if (deletedStudent) {
        res.json({ message: 'Student deleted successfully' });
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new StudentController();
