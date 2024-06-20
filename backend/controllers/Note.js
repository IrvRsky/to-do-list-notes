import Note from "../models/NoteModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// MELIHAT DATA NOTES
export const getNote = async (req, res) => {
    try {
      const note = await Note.findAll({
        attributes: ["id", "title", "datetime", "note"],
      });
      res.json(note);
    } catch (error) {
      console.log(error);
    }
  };

//   MEMBUAT NOTES
  export const createNote = async (req, res) => {
    const { title, datetime, note } = req.body;
    try {
        const newNote = await Note.create({ title, datetime, note });
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findByPk(id);
        if (!note) {
            res.status(404).json({ message: 'Note not found' });
        } else {
            res.json(note);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// MENGUBAH NOTES
export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, datetime, note } = req.body;
    try {
        const [updated] = await Note.update({ title, datetime, note }, {
            where: { id }
        });
        if (!updated) {
            res.status(404).json({ message: 'Note not found' });
        } else {
            res.json({ message: 'Note updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// MENGHAPUS NOTES
export const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Note.destroy({
            where: { id }
        });
        if (!deleted) {
            res.status(404).json({ message: 'Note not found' });
        } else {
            res.json({ message: 'Note deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};