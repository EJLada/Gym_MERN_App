'use strict';

import * as exercises from './exercise_model.mjs';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// Create a new exercise via POST route
app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name,
            req.body.reps,
            req.body.weight,
            req.body.unit,
            req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch( error => {
            console.error(error);
            res.status(500).json(error);
        });
});

// Retrieve one exercise by `_id` via GET route
app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.retrieveExercises({_id: exerciseId}, '', 1)
        .then(exercise => {
            if (exercise !== null) {
                res.status(200).json(exercise[0]);
            }
            else {
                res.status(404).json({Error: 'Resource not found'});
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

// Retrieve all exercises via GET route
app.get('/exercises', (req, res) => {
    exercises.retrieveExercises({}, '', 0)
        .then(exercises => {
            res.status(200).json(exercises)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});

// Update an exercise by `_id` using fields in `req.body`.
app.put('/exercises/:_id', (req, res) => {
    exercises.updateExercise(req.params._id, req.body)
        .then(query => {
            if (query !== null) {
                res.status(200).json(query);
            }
            else {
                res.status(404).json({Error: 'Resource not found'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});

// Delete an exercise by `_id`
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteExercises({_id: req.params._id})
        .then(result => {
            if (result.deletedCount === 1) {
                res.status(204).json(result);
            }
            else {
                res.status(404).json({Error: 'Resource not found'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});