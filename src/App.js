import './App.css';
import React, {useState} from "react";
import {Route} from 'react-router-dom';
import Home from "./pages/Home";
import CreateExercise from "./pages/CreateExercise";
import EditExercise from "./pages/EditExercise";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  return (
    <div className="App">
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
