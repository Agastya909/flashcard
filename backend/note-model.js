import mongoose from "mongoose";

const schema = mongoose.Schema;

const noteSchema = new schema(
  {
    noteTitle: {
      type: String,
      maxlength: 64,
      minlength: 1,
      required: true,
    },
    noteData: {
      type: String,
      maxlength: 256,
      minlength: 1,
      required: true,
    },
    notePriority: {
      type: String,
      required: true,
    },
    noteColor: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
