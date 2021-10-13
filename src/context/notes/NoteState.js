import noteContext from "./NoteContext";
import { useState } from 'react';

const NoteState = (props)=>{
    const notesInitial=[
        {
          "_id": "61658asd219ceb5asx81cc8ac130f5",
          "user": "61643dbved356b78cfae160eb850",
          "title": "Hey THis IS a NOTE",
          "description": "i AM alonhe ANd gOing tO diE PlEaSe hElP",
          "img": "google.png",
          "tag": "dead",
          "Date": "2021-10-12T12:39:53.317Z",
          "__v": 0
        },
        {
          "_id": "616582d8ceb581asccceefb8ac130f7",
          "user": "61643d356bwefvb78cfae160eb850",
          "title": "this is a genuin note",
          "description": "i AM alonhe ANd gOing tO diE PlEaSe hElP blah blah music fusicb ug words ahaha nt too lobg descriptiong description ios good for a n exampole oghghh lala rocka nd a d morty",
          "img": "https://www.clipartmax.com/png/middle/24-241553_clip-arts-related-to-colourful-music-notes-clipart.png",
          "tag": "dead music",
          "Date": "2021-10-12T12:43:04.725Z",
          "__v": 0
        },
        {
          "_id": "61658219ceb581vdscc8ac130f5",
          "user": "61643d356b78cfae160eb850",
          "title": "a NOTE",
          "description": "bhto hsa rah lore posim andre topy kone caise it hwool ajofd djapp; ahd aojoe hoda",
          "img": null,
          "tag": "dead",
          "Date": "2021-10-12T12:39:53.317Z",
          "__v": 0
        },
        {
          "_id": "616582d8ceb581ccccsac8ac130f7",
          "user": "61643d356b78czxcfae160eb850",
          "title": "this is a genuin note",
          "description": "i AM alonhe ANd gOing tO diE PlEaSe hElP blah blah music fusicb ug words ahaha nt too lobg descriptiong description ios good for a n exampole oghghh lala rocka nd a d morty",
          "img": "https://www.clipartmax.com/png/middle/24-241553_clip-arts-related-to-colourful-music-notes-clipart.png",
          "tag": "dead music",
          "Date": "2021-10-12T12:43:04.725Z",
          "__v": 0
        },
        {
          "_id": "61asx6582d8ceb581cc8ac1asc30f7",
          "user": "61asx643d356b78cfae160eb850",
          "title": "this is a genuin note",
          "description": "i AM alonhe ANd gOing tO diE PlEaSe hElP blah blah music fusicb ug words ahaha nt too lobg descriptiong description ios good for a n exampole oghghh lala rocka nd a d morty",
          "img": null,
          "tag": "dead music",
          "Date": "2021-10-12T12:43:04.725Z",
          "__v": 0
        },
        {
          "_id": "616582d8ceb58asxasx1cc8ac130cdsf7",
          "user": "61643d356bzxc78cfae160eb850",
          "title": "this is a genuin note",
          "description": "i AM alonhe ANd gOing tO diE PlEaSe hElP blah blah music fusicb ug words ahaha nt too lobg descriptiong description ios good for a n exampole oghghh lala rocka nd a d morty",
          "img": "https://www.clipartmax.com/png/middle/24-241553_clip-arts-related-to-colourful-music-notes-clipart.png",
          "tag": "dead music",
          "Date": "2021-10-12T12:43:04.725Z",
          "__v": 0
        },
        {
          "_id": "616582dds8ceb58thn1cc8ac130f7",
          "user": "61643d356b78csebfae160eb850",
          "title": "this is a genuin note",
          "description": "i AM alonhe ANd gOing tO diE PlEaSe hElP blah blah music fusicb ug words ahaha nt too lobg descriptiong description ios good for a n exampole oghghh lala rocka nd a d morty",
          "img": null,
          "tag": "dead music",
          "Date": "2021-10-12T12:43:04.725Z",
          "__v": 0
        },
        {
          "_id": "616582d8ceb581ccsfgdn8ac130f7",
          "user": "61643d356b78cfbfdsae160eb850",
          "title": "this is a genuin note",
          "description": "i AM alonhe ANd gOing tO diE PlEaSe hElP blah blah music fusicb ug words ahaha nt too lobg descriptiong description ios good for a n exampole oghghh lala rocka nd a d morty",
          "img": "https://www.clipartmax.com/png/middle/24-241553_clip-arts-related-to-colourful-music-notes-clipart.png",
          "tag": "dead music",
          "Date": "2021-10-12T12:43:04.725Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial);
      const addNote=()=>{
        const note={
          "_id": "616hkbil82d8ceb581ccsfgdn8ac130f7",
          "user": "616bjkbkd356b78cfbfdsae160eb850",
          "title": "A new NOTE",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt pariatur iste hic perferendis libero in voluptates ipsum odio eius? Vitae voluptatibus, atque minima cupiditate, exercitationem velit voluptatum commodi ex perspiciatis totam excepturi quibusdam.",
          "img": "https://www.clipartmax.com/png/middle/24-241553_clip-arts-related-to-colourful-music-notes-clipart.png",
          "tag": "dead music",
          "Date": "2021-10-12T12:43:04.725Z",
          "__v": 0
        }
        setNotes(notes.concat(note));

      }
      const deleteNote=()=>{
        
      }
      const editNote=()=>{

      }

      return(
    <>
        <noteContext.Provider value={{notes,setNotes,addNote,editNote,deleteNote}}>
            {props.children}
        </noteContext.Provider>
    </>
    )

}
export default NoteState;