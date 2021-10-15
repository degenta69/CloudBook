import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/notes/NoteContext'
import Addnote from './Addnote'
import Notesitem from './Notesitem'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@mui/material'

const useStyles = makeStyles({
  backgroundColor: '#61b33b'
})

const Notes = () => {
  const classes = useStyles()
  const context = useContext(noteContext)
  const { notes, addNote, getNote, editNote } = context
  const noteInitial = {
    e_id: '',
    e_title: '',
    e_description: '',
    e_tag: '',
    e_img: ''
  }
  const [note, setnote] = useState(noteInitial)

  useEffect(() => {
    getNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = e => {
    setnote({ ...note, [e.target.name]: e.target.value })
  }

  const [toggle, setToggle] = useState(false)

  const updateNote = currentNote => {
    setToggle(true)
    setnote({
      e_id: currentNote._id,
      e_title: currentNote.title,
      e_description: currentNote.description,
      e_tag: currentNote.tag,
      e_img: currentNote.img
    })
  }

  const handleNote = e => {
    e.preventDefault()
    editNote(
      note.e_id,
      note.e_title,
      note.e_description,
      note.e_img,
      note.e_tag
    )
    setnote(noteInitial)
    setToggle(false)
  }
  const closeDrawer = () => {
    setToggle(false)
  }
  return (
    <>
      <Addnote addNote={addNote} />
      <SwipeableDrawer
        anchor='bottom'
        open={toggle}
        onClose={() => {
          setToggle(false)
        }}
        onOpen={() => {}}
        hideBackdrop={true}
        elevation={10}
      >
        <div
          className={classes.backgroundColor}
          style={{
            backgroundColor: '#FFEF60'
          }}
        >
          <TextField
            className='m-4 w-5 d-flex justify-content-center'
            id='filled-basic'
            name='e_title'
            label='Title Of note'
            variant='filled'
            sx={{
              ':hover': {
                backgroundColor: '#f7e32a',
                transition: 'backgroundColor 0.8s ease-in-out'
              }
            }}
            color='info'
            onChange={onChange}
            value={note.e_title}
            required={true}
            inputProps={{
              minLength: '5'
            }}
          />
          <TextField
            className='m-4 w-5 d-flex justify-content-center'
            id='e_description'
            sx={{
              ':hover': {
                backgroundColor: '#f7e32a',
                transition: 'backgroundColor 0.8s ease-in-out'
              }
            }}
            name='e_description'
            label='Description'
            multiline
            rows='5'
            variant='filled'
            color='info'
            onChange={onChange}
            value={note.e_description}
            required={true}
            inputProps={{
              minLength: '5'
            }}
          />
          <div>
            <TextField
              className='mx-5'
              id='outlined-name'
              label='e_Tag'
              name='e_tag'
              onChange={onChange}
              margin='dense'
              variant='filled'
              color='info'
              sx={{
                ':hover': {
                  backgroundColor: '#f7e32a',
                  transition: 'backgroundColor 0.8s ease-in-out'
                }
              }}
              value={note.e_tag}
            />

            <TextField
              className='mx-5'
              id='outlined-uncontrolled'
              label='e_img-URL'
              name='e_img'
              placeholder='Add image URL'
              onChange={onChange}
              margin='dense'
              variant='filled'
              color='info'
              sx={{
                ':hover': {
                  backgroundColor: '#f7e32a',
                  transition: 'backgroundColor 0.8s ease-in-out'
                }
              }}
              value={note.e_img}
            />
            <Button
              className='m-3'
              size='large'
              sx={{
                width: '30%',
                ':hover': {
                  backgroundColor: '#6cb310',
                  borderRadius: '0px 17px 34px 36px / 150px 98px 150px 150px',
                  transition: 'borderRadius 0.5s ease-in-out',
                  // eslint-disable-next-line no-dupe-keys
                  transition: 'backgroundColor 0.8s ease-in-out'
                }
              }}
              onClick={handleNote}
              variant='contained'
              color='success'
            >
              UPDATE NOTE
            </Button>
            <Button
              className='m-3'
              size='small'
              sx={{
                width: '15%',
                ':hover': {
                  backgroundColor: '#912626',
                  borderRadius: '0px 17px 34px 36px / 150px 98px 150px 150px',
                  transition: 'borderRadius 0.5s ease-in-out',
                  // eslint-disable-next-line no-dupe-keys
                  transition: 'backgroundColor 0.8s ease-in-out'
                }
              }}
              onClick={closeDrawer}
              variant='contained'
              color='error'
            >
              CLOSE
            </Button>
          </div>
        </div>
      </SwipeableDrawer>
      <h3 className='text-center'>Your Notes</h3>
      <hr />
      <div
        className='row d-flex justify-content-around'
        style={{ marginRight: '0' }}
      >
        {notes.map(note => {
          return (
            <Notesitem key={note._id} updateNote={updateNote} note={note} />
          )
        })}
      </div>
    </>
  )
}

export default Notes
