import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react';

function Notes(props) {
  const deleteEvent=()=>{
    props.passDelete(props.id);
  }
  return (
    <>
        <div className="note-container">
            <div className="note">
                <h4 className="note-title"> {props.title} </h4>
                <p className="note-text"> {props.text} </p>
                <IconButton className="delete-icon" onClick={deleteEvent}><DeleteIcon className="del-icn" /></IconButton>
            </div>
        </div>
    </>
  );
}

export default Notes;
