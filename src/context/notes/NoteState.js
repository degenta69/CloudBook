import noteContext from "./NoteContext";
import { useState } from 'react';

const NoteState = (props)=>{
  const HOST = "http://localhost:5000"
    const notesInitial=[]
      const [notes, setNotes] = useState(notesInitial);

      //get all notes
      const getNote=async()=>{
        const response = await fetch(`${HOST}/api/notes/fetchallnotes`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2NDNkMzU2Yjc4Y2ZhZTE2MGViODUwIn0sImlhdCI6MTYzMzk1OTMwM30.P8BpwHMYt4IdatyQ54oYtqBeeT_7vqslzmpJJF7-qrs',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        console.log(json);
        setNotes(json);
      }
      // const apiCall = async()=>{
      //   const response = await fetch(url, {
      //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //     headers: {
      //       'Content-Type': 'application/json'
      //       // 'Content-Type': 'application/x-www-form-urlencoded',
      //     },
      //     body: JSON.stringify(data) // body data type must match "Content-Type" header
      //   });
      //   return response.json(); // parses JSON response into native JavaScript objects
      // } 

      const addNote=async(title, description, img, tag)=>{
        const response = await fetch(`${HOST}/api/notes/addnote/`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2NDNkMzU2Yjc4Y2ZhZTE2MGViODUwIn0sImlhdCI6MTYzMzk1OTMwM30.P8BpwHMYt4IdatyQ54oYtqBeeT_7vqslzmpJJF7-qrs',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({title, description, img, tag}) // body data type must match "Content-Type" header
        });
        const note = await response.json(); // parses JSON response into native JavaScript objects
        setNotes(notes.concat(note));
      }
      
      const deleteNote=async(id)=>{
        const response = await fetch(`${HOST}/api/notes/deletenote/${id}`, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2NDNkMzU2Yjc4Y2ZhZTE2MGViODUwIn0sImlhdCI6MTYzMzk1OTMwM30.P8BpwHMYt4IdatyQ54oYtqBeeT_7vqslzmpJJF7-qrs',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const json = response.json(); // parses JSON response into native JavaScript objects
        console.log(json)

        const newNotes= notes.filter((note)=>{return note._id !==id})
        setNotes(newNotes)
      }
      const editNote=async(id,title,description,img,tag)=>{
        const response = await fetch(`${HOST}/api/notes/updatenote/${id}`, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2NDNkMzU2Yjc4Y2ZhZTE2MGViODUwIn0sImlhdCI6MTYzMzk1OTMwM30.P8BpwHMYt4IdatyQ54oYtqBeeT_7vqslzmpJJF7-qrs',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({title, description, img, tag}) // body data type must match "Content-Type" header
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        console.log(json)

        let updateNotes = JSON.parse(JSON.stringify(notes))
         for (let index = 0; index < updateNotes.length; index++) {
           const element = updateNotes[index];
           if(element._id === id){
              updateNotes[index].title = title;
              updateNotes[index].description = description;
              updateNotes[index].img = img;
              updateNotes[index].tag = tag;
              break;
           }
           
          }
          setNotes(updateNotes)
      }

      return(
    <>
        <noteContext.Provider value={{notes,setNotes,addNote,editNote,deleteNote, getNote}}>
            {props.children}
        </noteContext.Provider>
    </>
    )

}
export default NoteState;