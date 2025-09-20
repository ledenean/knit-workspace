const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;
// require("dotenv").config({path: "./config.env"});

let patternRoutes = express.Router();

// Get all patterns
patternRoutes.route("/").get(async (request, response) => {
    let db = database.getDb();
    let data = await db.collection("patterns").find({}).toArray();
    if (data.length > 0) {
        response.json(data);
    } else {
        throw new Error("No patterns found");
    }
});

// Get one pattern
patternRoutes.route("/:id").get(async (request, response) => {
    let db = database.getDb();
    let patternId = new ObjectId.createFromHexString(request.params.id);
    let data = await db.collection("patterns").findOne({_id: patternId });
    if (Object.keys(data) > 0) {
        response.json(data);
    } else {
        throw new Error("No patterns found");
    }
});

// Create pattern
patternRoutes.route("/").post(async (request, response) => {
    let db = database.getDb();
    let mongoObject = {
        patternTitle: request.body.patternTitle,
        patternDesigner: request.body.patternDesigner,
        fileURL: request.body.pdfKey
    };
    let data = await db.collection("patterns").insertOne(mongoObject);
    response.json(data);
});

//Update pattern
patternRoutes.route("/:id").put(async (request, response) => {
    let db = database.getDb();
    let patternId = new ObjectId.createFromHexString(request.params.id);
    let updates = request.body;
    
    updates.lastModified = new Date();

    let mongoObject = {set: updates};

    let data = await db.collection("patterns").updateOne({_id: patternId }, mongoObject);
    response.json(data);
});

// Delete pattern
patternRoutes.route("/:id").delete(async (request, response) => {
    let db = database.getDb();
    let patternId = new ObjectId.createFromHexString(request.params.id);
    let data = await db.collection("patterns").deleteOne({_id: patternId });
    response.json(data);
});

module.exports = patternRoutes;