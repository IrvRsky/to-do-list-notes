import express from "express";
import { getNote , createNote, getNoteById, updateNote, deleteNote } from "../controllers/Note.js";

const router = express.Router();
// note routes
router.get('/notes', getNote);
router.get('/notes/:id', getNoteById);
router.post('/notes-create', createNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

export default router;
