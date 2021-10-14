import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Slide from '@mui/material/Slide'
import noteContext from '../context/notes/NoteContext'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { Button } from '@mui/material'

const Addnote = () => {
  const [checked, setChecked] = React.useState(false)
  const containerRef = React.useRef(null)

  const [note, setnote] = useState({
    title: '',
    description: '',
    tag: 'Testing',
    img:''
  })

  const context = useContext(noteContext)
  const { addNote } = context

  const handleChange = () => {
    setChecked(prev => !prev)
  }

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
  }

  const handleNote = () => {
    addNote(note.title, note.description, note.img, note.tag)
  }

  return (
    <>
      <FormControlLabel
        className='d-flex justify-content-center'
        control={<Switch checked={checked} onChange={handleChange} />}
        label='Add Note'
        labelPlacement='top'
      />
      <Slide direction='up' in={checked} container={containerRef.current}>
        <form
          className='d-flex flex-column justify-content-center'
          noValidate
          autoComplete='off'
        >
          <TextField
            className='m-4 w-5 d-flex justify-content-center'
            id='filled-basic'
            name='title'
            label='Title Of note'
            variant='filled'
            sx={{
              ':hover': {
                backgroundColor: '#a1e943',
                transition: 'backgroundColor 0.8s ease-in-out'
              }
            }}
            color='info'
            onChange={onChange}
            required={true}
          />
          <TextField
            className='m-4 w-5 d-flex justify-content-center'
            id='description'
            sx={{
              ':hover': {
                backgroundColor: '#a1e943',
                transition: 'backgroundColor 0.8s ease-in-out'
              }
            }}
            name='description'
            label='Description'
            multiline
            rows='5'
            variant='filled'
            color='info'
            onChange={onChange}
            required={true}
          />
          <div className='d-flex justify-content-center flex-wrap p-2'>
             <div>
                <TextField
                  className="mx-5"
                  id='outlined-name'
                  label='Tag'
                  name="tag"
                  onChange={onChange}
                  margin='dense'
                  variant="filled"
                  color="info"
                  sx={{
                    ':hover': {
                      backgroundColor: '#a1e943',
                      transition: 'backgroundColor 0.8s ease-in-out'
                    }
                  }}
                  />

                <TextField
                  className="mx-5"
                  id='outlined-uncontrolled'
                  label='img-URL'
                  name="img"
                  placeholder='Add image URL'
                  onChange={onChange}
                  margin="dense"
                  variant="filled"
                  color="info"
                  sx={{
                    ':hover': {
                      backgroundColor: '#a1e943',
                      transition: 'backgroundColor 0.8s ease-in-out'
                    }
                  }}
                  />
              </div>   

            <Button
            disabled={note.title.length<3 || note.description.length<5? true : false}
            className="m-3"
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
              ADD NOTE
            </Button>
          </div>
        </form>
      </Slide>
    </>
  )
}

export default Addnote
