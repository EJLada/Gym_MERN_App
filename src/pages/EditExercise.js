import '../App.css';
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export const EditExercise = ({exerciseToEdit}) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();
    let id = exerciseToEdit._id;

    const editExercise = async () => {
        const response = await fetch(`/exercises/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',
            'Accepted': 'application/json'}
        });
        if (response.status === 200) {
            alert(`Successfully edited ${exerciseToEdit.name}!`);
        }
        else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push('/');
    };

    return (
        <form className='editForm'>
            <h2>Edit Exercise</h2>
            <div className='form_field'>
                <label>Name:
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required />
                </label>
            </div>
            <div className='form_field'>
                <label>Reps:
                    <input
                        type='number'
                        id='reps'
                        name='reps'
                        min='0'
                        value={reps}
                        onChange={e => setReps(e.target.value)}
                        required />
                </label>
            </div>
            <div className='form_field'>
                <label>Weight:
                    <input
                        type='number'
                        id='weight'
                        name='weight'
                        min='0'
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        required />
                </label>
                <label>Units:
                    <select
                        id='unit'
                        name='unit'
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                        required>
                        <option value='lbs'>LBs</option>
                        <option value='kgs'>KGs</option>
                    </select>
                </label>
            </div>
            <div className='form_field'>
                <label>Date:
                    <input
                        type='text'
                        id='date'
                        name='date'
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        title='MM-DD-YY'
                        pattern='^((\d{2})-(\d{2})-(\d{2}))'
                        required />
                </label>
            </div>
            <button type='button' onClick={editExercise}>UPDATE</button>
        </form>
    );
}

export default EditExercise;