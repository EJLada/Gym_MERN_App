import './App.css';
import React, {useState} from "react";
import {Route} from 'react-router-dom';
import Home from "./pages/Home";
import CreateExercise from "./pages/CreateExercise";
import EditExercise from "./pages/EditExercise";
import Logo from "./images/Crunchforge.png";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  return (
    <div className="App">
        <div className='home_header'>
            <img id='main_logo' src={Logo} alt='CrunchForge Exercise Tracker, main logo'/>
            <div className='title'>
                <h2>Exercise Log</h2>
            </div>
        </div>
          <Route path='/edit'>
            <EditExercise exerciseToEdit={exerciseToEdit} />
          </Route>
          <Route path='/create'>
            <CreateExercise />
          </Route>
          <Route path='/' exact>
            <Home setExerciseToEdit={setExerciseToEdit} />
          </Route>
    </div>
  );
}

export default App;
