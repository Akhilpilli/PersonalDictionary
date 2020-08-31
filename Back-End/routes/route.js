const express = require("express");
const router = express.Router();

const Dictionary = require("../models/dictionary");
// display
router.get("/getWords", (req, res, next) => {
  Dictionary.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

// add word
router.post("/createWord", (req, res, next) => {
  let newWord = new Dictionary({
    word: req.body.word,
    meaning: req.body.meaning,
  });

  newWord
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

router.put("/updateWord", (req, res, next) => {
  const data = req.body;
  Dictionary.updateOne(
    { _id: data.id },
    {
      $set: {
        word: data.word,
        meaning: data.meaning,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

//delete word
router.delete("/removeWord/:id", (req, res, next) => {
  Dictionary.deleteOne({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;
