import React, { useState } from 'react';
import "./Note.css"
import AddNote from './AddNote';
import ListNote from './ListNote';

const Note = () => {
  const[notes, setNotes]=useState([
    {title:"note 1"},
    {title:"note 2"},
    {title:"note 3"},
  ]);
  return (
    <>
        <div className='note-container'>
            <div className='header'>NOTE APP</div>
            <div className='add-note'>
                <AddNote /> </div>
            <div className='list-note'>
              {notes.map((note)=>(
                 <ListNote note={note} />

              ))}
         </div>      
        </div>
    </>
  )
}

export default Note