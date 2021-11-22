import '../App.css';
import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import ExerciseTable from "../components/ExerciseTable";

export default function Home({setExerciseToEdit}) {
    const history = useHistory();
    const [exercises, setExercises] = useState([]);

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const newExercises = await getResponse.json();
            setExercises(newExercises);
        } else {
            console.error(`Failed to delete exercise with id = ${_id}, status code = ${response.status}`)
        }
    }

    const onEdit = async exercise => {
        setExerciseToEdit(exercise);
        history.push('/edit');
    }

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const newExercises = await response.json();
        setExercises(newExercises);
    }

    useEffect(() => {
        loadExercises().then();
    }, []);

    return (
        <div className='home'>
            <h2>Exercise Log</h2>
            <ExerciseTable exercises={exercises}
                           onDelete={onDelete}
                           onEdit={onEdit}>
            </ExerciseTable>
            <Link to='/create'>Add New Exercise</Link>
        </div>
    );
}