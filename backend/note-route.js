import express from "express";
import Note from "./note-model.js";
const router = express.Router();

// get

router.route("/").get((req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json(`error : ${err}`));
});

router.route("/:id").get((req, res) => {
  Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json(`error : ${err}`));
});

// router.get("/note/:id", (req, res) => {
//   const id = req.params.id;
//   const findBy = req.body;
//   console.log(findBy);
//   Note.findOne(findBy)
//     .then((note) => res.send(note))
//     .catch((err) => res.status(400).json(`Error is ${err}`));
// });

// post

router.route("/").post((req, res) => {
  const noteTitle = req.body.noteTitle;
  const noteData = req.body.noteData;
  const noteColor = req.body.noteColor;
  const notePriority = req.body.notePriority;

  const newNote = new Note({ noteTitle, noteData, notePriority, noteColor });

  newNote
    .save()
    .then(() => res.json(`Note created.`))
    .catch((err) => res.status(400).json(`error is ${err}`));
});

// delete

router.route("/:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json(`Note deleted.`))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

// update

router.patch("/update/:id", (req, res) => {
  const id = req.params.id;
  const update = req.body;
  const options = { new: true };

  Note.findByIdAndUpdate(id, update, options)
    .then(() => res.json(`Note updated.`))
    .catch((err) => res.status(400).json(`Error is : ${err}`));
});

export default router;
