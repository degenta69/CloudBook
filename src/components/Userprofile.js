import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  IconButton from '@mui/material/IconButton';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import TextField from '@mui/material/TextField'


const Userprofile = () => {

  const [show, setshow] = useState(false);

  const [aboutMe, setaboutMe] = useState({aboutMe:''});
  
  const dataInitial = []
  const [data, setdata] = useState(dataInitial);
  
  window.onload = ()=>{
    const ButtonID = 'getUserData';
    document.getElementById(ButtonID).click();
    console.log(aboutMe)
  }

  const getData=async()=>{ 
    const response = await fetch('http://localhost:5000/api/auth/getuser', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {

        'auth-token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
     // body: JSON.stringify({name,pfp,email,date}) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json)
    console.log(data.pfp)
    setdata(json.user)
  }

  const date = new Date(data.Date).toGMTString()

  const onChange= (e)=>{
    setaboutMe({aboutMe :e.target.value});
  }

  return (
  <>
  <Card sx={{ 
      maxWidth: 340,
      widht: '50%',
      borderWidth: '10px',
      height: '30rem',
      backgroundColor: '#212529',
      boxShadow: '5px 5px 17.5px -0.5px rgba(0,0,0,0.75)',
      borderRadius: "0px 4.25px 0px 8px / 37.5px 84.5px 37.5px 37.5px"
      }}>
    <Button
     className="d-none"
     size='large'
    //  sx={{
    //    display: 'none',
    //  }}
     onClick={getData}
     variant='contained'
     id='getUserData'
   >
     ADD NOTE
   </Button>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${data.pfp}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography className="text-white" gutterBottom variant="h5" component="div">
            Name: {data.name}
          </Typography>
          <Typography className="text-white" variant="h6" color="inherit">
            Email ID: {data.email}
          </Typography>
          <small>
        <Typography className="text-white" variant="body2" color="text.secondary">

            Account created on: {date.split('GMT')[0]}
        </Typography>
        </small>
        </CardContent>
        <CardContent>
          <IconButton aria-labelledby='AboutMe' sx={{margin:'auto'}} size='large' aria-label="edit" onClick={()=>{setshow(show => !show)}}>
            <AssignmentIndIcon sx={{margin:'auto'}} color='primary'/>
          </IconButton>

          {show===true?
            <TextField
            className='m-4 w-5 d-flex justify-content-center'
            id='aboutMe'
            sx={{
              ':hover': {
                backgroundColor: '#6c757d',
                transition: 'backgroundColor 3s ease-in-out'
              }
            }}
            name='aboutMe'
            label='About Me'
            multiline
            rows='5'
            variant='filled'
            color='info'
            onChange={onChange}
            // value={note.description}
          />
          :<div></div>
        
        }
        </CardContent>
      </CardActionArea>
    </Card>
  </>
  );
}

export default Userprofile;