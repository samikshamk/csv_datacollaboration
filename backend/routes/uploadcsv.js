const express = require("express");

const router = express.Router();


router.post("/", (req, res) => {
    console.log("Received a POST request to /upload");
    
    // Always send a response back to the client so the request doesn't hang!
    res.status(200).json({ message: "Upload triggered successfully" });
});

module.exports = router;