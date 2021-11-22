import '../App.css';
import React from 'react';
import {GrTrash, GrEdit} from "react-icons/all";

export default function Exercise({exercise, onDelete, onEdit}) {
    const id = exercise._id;
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><GrEdit onClick={() => onEdit(exercise)} /></td>
            <td><GrTrash onClick={() => onDelete(id)} /></td>
        </tr>
    );
}