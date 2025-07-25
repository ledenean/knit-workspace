const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;

let projectRoutes = express.Router();

// Get all projects
projectRoutes.route("/projects").get(async (request, response) => {
    let db = database.getDb();
    let data = await db.collection("projects").find({}).toArray();
    if (data.length > 0) {
        response.json(data);
    } else {
        throw new Error("No projects found");
    }
});

// Get one project
projectRoutes.route("/projects/:id").get(async (request, response) => {
    let db = database.getDb();
    let projId = new ObjectId.createFromHexString(request.params.id);
    let data = await db.collection("projects").findOne({_id: projId });
    if (Object.keys(data) > 0) {
        response.json(data);
    } else {
        throw new Error("No projects found");
    }
});

// Create project
projectRoutes.route("/projects").post(async (request, response) => {
    let db = database.getDb();
    console.log(request.body);
    let mongoObject = {
        title: request.body.title,
        notes: request.body.notes,
        dateStarted: request.body.dateStarted
    };
    let data = await db.collection("projects").insertOne(mongoObject);
    response.json(data);
});

//Update project
projectRoutes.route("/projects/:id").put(async (request, response) => {
    let db = database.getDb();
    let projId = new ObjectId.createFromHexString(request.params.id);
    let mongoObject = {
        $set: {
            title: request.body.title,
            notes: request.body.notes,
            dateStarted: request.body.dateStarted
        }
    };
    let data = await db.collection("projects").updateOne({_id: projId }, mongoObject);
    response.json(data);
});

// Delete project
projectRoutes.route("/projects/:id").delete(async (request, response) => {
    let db = database.getDb();
    let projId = new ObjectId.createFromHexString(request.params.id);
    let data = await db.collection("projects").deleteOne({_id: projId });
    response.json(data);
});

module.exports = projectRoutes;