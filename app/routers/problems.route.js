module.exports = app => {
    const problem = require('../controllers/problems.controller.js');
    var router = require("express").Router();
    // create problem
    //router.post("/", problem.create);
    // get All
    router.get("/", problem.findAll);
    // Get all public problems
    router.get("/public", problem.findAllPublic);
    // Get by ID
    //router.get("/:id", problem.findOne);
    // Update by ID
    //router.put("/:id", problem.update);
    // Delete by ID
    //router.delete("/:id", problem.delete);

    app.use("/api/problems", router);
}