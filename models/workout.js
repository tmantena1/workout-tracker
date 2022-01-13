const {Schema, model} = require('mongoose');

// Schema for a workout entry
const workoutSchema = new Schema(
    {
        day: {
            type: Date, 
            default: Date.now
        },
        exercises: [
            {

          type: {
                type: String,
                trim: true,
                required: "Enter type of exercise"
            }, 
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name"
            },
            duration: {
                type: Number,
                required: "Enter the length of the exercise in minutes"
            }, 
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = model('Workout', workoutSchema)

module.exports = Workout;

