const Problem = require('../models/problems.model.js');

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Content can not empty!"
        })
    }else if(!req.body.title || !req.body.description || !req.body.short_name || !req.body.long_name || !req.body.author){
        res.status(400).send({
            message: "Missing require request data."
        })
    }
    const problem = new Problem({
        short_name: req.body.short_name,
        long_name: req.body.long_name,
        description: req.body.description,
        author: req.body.author,
        public: req.body.public || true,
        time_limit: req.body.time_limit,
        memory_limit: req.body.memory_limit
    });
    Problem.create(problem, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || "Error while creating problem."
            });
        }else res.send(data)
    });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  Problem.getAll((err, data) => {
      if(err){
          res.status(500).send({
              message: "Some error white get problems data!"
          })
      }else res.send(data);
  })
};
// Find a single Tutorial with a id
exports.findOne = (req, res) => {
  
};

exports.findAllPublic = (req, res) => {
    Problem.getAllPublic((err, data) => {
        if(err){
            res.status(500).send({
                message: "Some error white get problems data!"
            })
        }else res.send(data);
    })
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};