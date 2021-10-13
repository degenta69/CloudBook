import React, {useContext} from 'react'
import noteContext from '../context/notes/NoteContext'
import Addnote from './Addnote'
import Notesitem from './Notesitem'


const Notes = () => {
    const context = useContext(noteContext)
    const { notes, addNote , editNote , deleteNote} = context
    return (
    <>
        <Addnote addNote={addNote}/>   
        <div className="row my-4 d-flex justify-content-around">
            {notes.map((note) => {
                return <Notesitem key={note._id} note={note} />
            })}

        </div>
    </> 
    )
}

export default Notes
