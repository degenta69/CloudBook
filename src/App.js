import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from './components/Login'
import Signup from './components/Signup'
import { useState } from 'react'
import Cbians from './components/Cbians'

function App () {
  const [alert, setAlert] = useState({msg:'', type:''})

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert({msg:'',type:''});
    }, 1500);
}
  return (
    <>
       <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>

          <Switch>
            <Route exact path='/'>
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/login'>
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path='/signup'>
              <Signup showAlert={showAlert} />
            </Route>
            <Route exact path='/cbians'>
              <Cbians showAlert={showAlert} />
            </Route>
            

          </Switch>
        </Router>
        </NoteState>
    </>
  )
}

export default App
