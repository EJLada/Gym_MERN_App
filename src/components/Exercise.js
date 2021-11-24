import '../App.css';
import React from 'react';
import {GrTrash, GrEdit} from "react-icons/all";

export default function Exercise({exercise, onDelete, onEdit}) {
    const id = exercise._id;
    return (
        <tr>
            <td className='name_column'>{exercise.name}</td>
            <td className='reps_column'>{exercise.reps}</td>
            <td className='weight_column'>{exercise.weight}</td>
            <td className='unit_column'>{exercise.unit}</td>
            <td className='date_column'>{exercise.date}</td>
            <td className='edit_column'><GrEdit onClick={() => onEdit(exercise)} /></td>
            <td className='delete_column'><GrTrash onClick={() => onDelete(id)} /></td>
        </tr>
    );
}