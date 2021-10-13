import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';


const Addnote = () => {
    const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleNote = ()=>{
      
  }


  return (
    <>
    <FormControlLabel
        className="d-flex justify-content-center"
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Add Note"
          labelPlacement="top"
        />
     <Slide direction="up" in={checked} container={containerRef.current}>
      <form className="d-flex flex-column justify-content-center" noValidate autoComplete="off">

        <TextField
          className='m-4 w-5 d-flex justify-content-center'
          id='filled-basic'
          label='Title Of your NOTE'
          variant='filled'
          sx={{ 
            ":hover": {
                backgroundColor: "#a1e943",
                transition: "backgroundColor 0.8s ease-in-out",
            }  
         }}
          color="info"
        />
        <TextField
          className='m-4 w-5 d-flex justify-content-center'
          id='description'
          sx={{ 
            ":hover": {
                backgroundColor: "#a1e943",
                transition: "backgroundColor 0.8s ease-in-out",
            }  
         }}
          name="description"
          label='description'
          multiline
          rows="5"
          variant='filled'
          color="info"
        />
        <div className="d-flex justify-content-center flex-end">

      <Button size="large"  sx={{ 
          width:"30rem",
          ":hover": {
              backgroundColor: "#6cb310",
              borderRadius: "0px 17px 34px 36px / 150px 98px 150px 150px",
              transition: "borderRadius 0.5s ease-in-out",
              transition: "backgroundColor 0.8s ease-in-out",
            }  
        }} 
        onClick={handleNote}
        variant="contained"
         color="success">
          ADD NOTE
      </Button>
        </div>
      </form>
      </Slide>
        <h3>Your Notes</h3>
    </>
  )
}

export default Addnote
