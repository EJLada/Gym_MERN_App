import '../App.css';
import React from 'react';
import Exercise from "./Exercise";

export default function ExerciseTable({exercises, onDelete, onEdit}) {
    return (
        <table className='exercise-table'>
            <caption>Logged Exercises</caption>
            <thead>
            <tr>
                <th>Name</th>
                <th>Reps</th>
                <th>Weight</th>
                <th>Units</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {exercises.map((item) => <Exercise exercise={item}
                                                  onDelete={onDelete}
                                                  onEdit={onEdit}
                                                  key={item._id}/>)}
            </tbody>
        </table>
    );
}