import React, { useEffect, useState } from "react";
import "./note.css";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import jwtDecode from "jwt-decode";

const Note = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, user, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch(
      "https://computer-shop-drf.onrender.com/api/notes/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    let data = await response.json();

    // if the token is valid then get data
    if (response.status === 200) {
      setNotes(data);
    }
    // if the token has expired then logout the user
    else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <div className="container mt-5">
      <p>You are on the note page!</p>
      <div className="row">
        <span>Owner notes: </span>
        <span className="text-primary">{user.username}</span>
      </div>
      <div className="row">
        <p>Notes:</p>
        <div className="ms-5">
          <ul>
            {notes.map((note) => (
              <li key={note.id}>{note.body}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Note;
