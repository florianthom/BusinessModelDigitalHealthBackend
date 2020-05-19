import * as express from "express";

let router: express.Router = express.Router();

// Test Model
class TestModel {
    data: string;
    constructor(data: string) {
        this.data = data;
    }
}

const testModelObject : TestModel = new TestModel("i am a test-model-property");

// @route   GET api/pages -> warum - wir haben doch get("/") -> unser Router ist
// in indexserver.js so definiert, dass nur "/api/pages" hier ankommt
router.get("/", (req, res) => {
    console.log("here is a get requests that gets logged to console");
    res.json(testModelObject);
});

/* 
router.post("/", (req, res) => {
    console.log("newTest.name")

    const newTest = new Test({
        name: req.body.name
    });
    newTest.save().then(test => res.json(test));
});
*/

export = router