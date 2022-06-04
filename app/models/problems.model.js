const sql = require('./db.js');
// Problems Model

const Problem = function(problem) {
    this.short_name = problem.short_name;
    this.long_name = problem.long_name;
    this.description = problem.description;
    this.time_limit = problem.time_limit;
    this.memory_limit = problem.memory_limit;
    this.author = problem.author;
    this.public = problem.public;
}

Problem.create = (newProblem, result) => {
    sql.query("INSERT INTO problems SET ?", newProblem, (err, res) => {
        if(err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }
        console.log("Đã tạo Problem: ", { id: res.insertId, ...newProblem });
        result(null, { id: res.insertId, ...newProblem });
    })
}

Problem.findByID = (id, result) => {
    sql.query(`SELECT * FROM problems WHERE ID = ${id}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.length) {
          console.log("Found: ", res[0]);
          result(null, res[0]);
          return;
        }
        // not found Tutorial with the id
        result({ kind: "NotFound" }, null);
      });
}
Problem.getAll = result => {
    sql.query("SELECT * FROM problems", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        console.log("Problems: ", res);
        result(null, res);
      });
}
Problem.getAllPublic = result => {
    sql.query("SELECT * FROM problems WHERE public = true", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        console.log("Problems: ", res);
        result(null, res);
      });
}
Problem.updateByID = (id, problem, result) => {
    sql.query(
        "UPDATE tutorials SET short_name = ?, long_name = ?, description = ?, time_limit = ?, memory_limit = ?, public = ? WHERE ID = ?",
        [problem.short_name, problem.long_name, problem.description, problem.time_limit, problem.memory_limit, problem.public, id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
          if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
            return;
          }
          console.log("updated tutorial: ", { id: id, ...problem });
          result(null, { id: id, status: 'OK', ...problem });
        }
      );
}
Problem.remove = (id, result) => {
    sql.query("DELETE FROM problems WHERE id = ?", id, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Tutorial with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("deleted tutorial with id: ", id);
        result(null, res);
      });
}

module.exports = Problem;