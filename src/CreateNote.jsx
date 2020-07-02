import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { useState } from 'react';

const CreateNote=(props)=>{
    const [note,setNote]=useState({
        title: "",
        text: ""
    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        console.log(note);
        setNote((prev)=>{
            return {
                ...prev,
                [name]:value
            };
        });
    };
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title: "",
            text: ""
        });
    };
    return (
        <>
            <div className="main_note">
                <form className="main_form">
                    <TextField id="standard-basic" name="title" label="Title" autoComplete="off" value={note.title} onChange={InputEvent} />
                    <IconButton color="primary" onClick={addEvent} className="add_btn" aria-label="upload picture" component="span">
                        <NoteAddIcon />
                    </IconButton>
                    <TextField
                        className="text-area"
                        id="standard-full-width"
                        label="Note"
                        style={{ margin: 8 }}
                        placeholder="Write Note"
                        fullWidth
                        margin="normal" 
                        name="text"  
                        value={note.text} 
                        onChange={InputEvent}
                        autoComplete="off"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                </form>
            </div>
        </>
    );
};

export default CreateNote;