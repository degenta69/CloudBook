import * as React from 'react';
import {useContext} from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import ShareIcon from '@material-ui/icons/Share';
import noteContext from '../context/notes/NoteContext'


export default function Notesitems(props) {
  const {note, updateNote} = props; 
  const date = new Date(note.Date).toGMTString()

  const context = useContext(noteContext)
    const { deleteNote} = context
  return (
    <Card className="col-md-4 my-3"
      sx={{ 
        maxWidth: 280,
        borderWidth: '5px',
        backgroundColor: '#FFEF60',
        boxShadow: '10px 10px 45px -1px rgba(0,0,0,0.75)',
        borderRadius: "0px 17px 0px 36px / 150px 98px 150px 150px"
        }}>
    {
        note.img===null
        ?<CardHeader
        title={note.title}
        subheader={date.split('GMT')[0]}
        />
        : <CardMedia
        component="img"
        height="194"
        image={`${note.img}`}
        alt="Note Image"
      />
    }
      
     
      <CardContent>
        {
            note.img===null
         ?""
        :<><Typography gutterBottom variant="h5" component="div">
           {note.title}
        </Typography>
        <small>{date.split('GMT')[0]}</small>
        </>
        }

          <Typography paragraph>
              <br/>
            {note.description}
          </Typography>
        <small>
        <Typography variant="body2" color="text.secondary">

          {note.tag}
        </Typography>
        </small>
            <CardActions className="d-flex justify-content-around align-items-end" disableSpacing>

            <IconButton aria-label="edit" onClick={()=>{updateNote(note)}}>
            <EditRoundedIcon />
            </IconButton>
            <IconButton onClick={()=>{deleteNote(note._id)}} aria-label="delete">
            <BackspaceOutlinedIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>

        </CardActions>
      </CardContent>
      
    </Card>
  );
}



















// import React from 'react'

// const Notesitem = (props) => {
//     const {note} = props; 
//     return (
//         <div>
            
//             {note.title}
//             <img src={note.img} alt="img" srcset="" />
//             {note.description}
//         </div>
//     )
// }

// export default Notesitem
