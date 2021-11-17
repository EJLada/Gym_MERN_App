import mongoose from 'mongoose';

const uri = 'mongodb+srv://ejlada:5!%40MLatFYxx3@exercise-logger.sbrrg.mongodb.net/exercises?useNewUrlParser=true&useUnifiedTopology=true';
mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas using Mongoose!')})
    .catch(err => {
        console.log(err);
    });

// Define the Exercise schema
const {Schema} = mongoose;
const exerciseSchema = new Schema({
    name: {type: String},
    reps: {type: Number},
    weight: {type: Number},
    unit: {type: String},
    date: {type: String}  // Format: 'MM-DD-YY'
});

// Create the 'Exercise' model from the schema
const Exercise = mongoose.model('Exercise', exerciseSchema);

// Build necessary CRUD methods

/**
 * Create an Exercise
 * @param {String} name
 * @param {Number} reps
 * @param {Number} weight
 * @param {string} unit - valid units are 'lbs' and 'kgs'
 * @param {String} date - format: 'MM-DD-YY'
 * @returns {Promise<*>} - resolves to the Exercise object created by `save()`.
 */
async function createExercise(name, reps, weight, unit, date) {
    const exercise = {name: name, reps: reps, weight: weight, unit: unit, date: date};
    return await Exercise.create(exercise);
}

/**
 * Retrieve Exercises matching the parameters in `filter`.
 * @param {Object} filter - contains search parameters
 * @param {String} projection - determines data fields to be returned
 * @param {Number} limit - number of results to return
 * @returns {Promise<Array<HydratedDocument<any, {}, {}>>>} an array of JSON objects matching `filter`.
 */
const retrieveExercises = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

/**
 * Update a single Exercise based on its `_id` and information in `updateData`
 * @param {String} _id - a record's unique id
 * @param {Object} updateData - contains fields to be updated, all or partial.
 * @returns {Promise<*>} resolves to an object containing `updatedCount` or an error.
 */
const updateExercise = async (_id, updateData) => {
    return User.findOneAndUpdate({_id: _id}, updateData);
}

/**
 * Deletes an Exercise (or Exercises) matching the parameters in `query`.
 * Include `_id` in `query` to ensure deletion of only a single Exercise.
 * @param {Object} query - contains filter fields to match for deletion
 * @returns {Promise<*>} resolves to an object containing `deletedCount`.
 */
const deleteExercises = async (query) => {
    return User.deleteMany(query);
}

export {createExercise, retrieveExercises, updateExercise, deleteExercises};


