import '../App.css';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function CreateExercise() {
    const [name, setName] = useState('Exercise Name');
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('01-01-01');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const requestData = {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {'Content-Type': 'application/json',
                      'Accept': 'application/json'}
            };
        const response = await fetch('http://localhost:8000/exercises', requestData);
        if (response.status === 201) {
            window.alert(`Successfully added new exercise "${name}"!`);
        }
        else {
            window.alert(`Failed to add exercise, status code = ${response.status}`)
        }
        history.push('/');
    }

    return (
        <form className='addForm'>
            <h2>Add Exercise</h2>
            <div className='form_field'>
                <label>Name:
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required/>
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
                        required/>
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
                        required/>
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
                        required/>
                </label>
            </div>
            <button type='button' value='CREATE' onClick={addExercise}>CREATE</button>
        </form>
    );
}