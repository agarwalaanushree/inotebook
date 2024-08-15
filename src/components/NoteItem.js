import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-4 col-lg-3 my-3">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="card-title mb-0 text-primary">{note.title}</h5>
              <div className="d-flex align-items-center">
                <i
                  className="fa-solid fa-pen-to-square text-warning mx-2"
                  onClick={() => {
                    updateNote(note);
                  }}
                  style={{ cursor: "pointer" }}
                  title="Edit Note"
                ></i>
                <i
                  className="fa-solid fa-trash-can text-danger mx-2"
                  onClick={() => {
                    deleteNote(note._id);
                    props.showAlert("Deleted Successfully", "success");
                  }}
                  style={{ cursor: "pointer" }}
                  title="Delete Note"
                ></i>
              </div>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
          <div className="text-muted small">
            <span className="badge bg-secondary">{note.tag}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
