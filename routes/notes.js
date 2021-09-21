const express = require("express");
const router = express.Router();
const { validateNote, validateNoteCard } = require("../config/validators");
const NoteController = require("../controller/notes");

router.post("/", validateNote, NoteController.postNote);
router.post("/:noteId", validateNoteCard, NoteController.postNoteCard);

router.get("/",NoteController.getAllNotes);
router.put("/card/:noteCardId", NoteController.updateNoteCard);
router.delete("/:noteId", NoteController.deleteNote);
router.delete("/card/:noteCardId", NoteController.deleteNoteCard);

module.exports = router;