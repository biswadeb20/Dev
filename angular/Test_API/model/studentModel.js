// studentModel.js
const db = require('../db');

class StudentModel {
  getAllStudents() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM marksheet', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  createStudent(roll_no, name, date_of_birth, score) {
    return new Promise((resolve, reject) => {
      const values = [roll_no, name, date_of_birth, score];
      db.query(
        'INSERT INTO marksheet (roll_no, name, date_of_birth, score) VALUES (?, ?, ?, ?)',
        values,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results.insertId);
          }
        }
      );
    });
  }

  getByRollNo(roll_no) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM marksheet WHERE roll_no = ?', [roll_no], (err, results) => {
        if (err) {
          reject(err);
        } else if (results.length === 0) {
          resolve(null);
        } else {
          resolve(results[0]);
        }
      });
    });
  }
  updateStudent(id,roll_no, name, date_of_birth, score) {
    return new Promise((resolve, reject) => {
      const values = [name, date_of_birth, score, roll_no,id];
      db.query(
        'UPDATE marksheet SET roll_no = ?,name = ?, date_of_birth = ?, score = ? WHERE id = ?',
        values,
        (err, results) => {
          if (err) {
            reject(err);
          } else if (results.affectedRows === 0) {
            resolve(null);
          } else {
            resolve({ roll_no, name, date_of_birth, score });
          }
        }
      );
    });
  }

  deleteStudent(id) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM marksheet WHERE PersonID = ?', [id], (err, results) => {
        if (err) {
          reject(err);
        } else if (results.affectedRows === 0) {
          resolve(null);
        } else {
          resolve(true);
        }
      });
    });
  }
}

module.exports = new StudentModel();
