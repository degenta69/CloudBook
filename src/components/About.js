import React, {useContext} from 'react'
import noteContext from '../context/notes/NoteContext';

const About = () => {
    const liberal = useContext(noteContext);
    return (
        <div>
            <h1 className="m-3">liberal Queen</h1>
            <h2 className="m-3">{liberal.name} </h2>
            <h3 className="m-3">{liberal.age}</h3>
            {
                (liberal.married === false)
                ?<h4 className="m-3">not married single bitch</h4>
                :<h4 className="m-3">ho gayo saxsux</h4>
            }
            <h5 className="m-3">{liberal.gender}</h5>
        </div>
    )
}

export default About
