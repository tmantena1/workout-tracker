const router = require('express').Router();
const db = require('../models');

//Get Workouts

router.get('/workouts', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});


//Add exercise

router.put('/workouts/:id', ({ params, body }, res) => 
{
    db.Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {
                exercises: body,
            },
        },
        {
            new: true,
            runValidators: true
        }
    )
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
}) 

// Create New Workouts 

router.post('/workouts', ({ body }, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
})

// GET 7 day workout
router.get('/workouts/range', (req, res) => {
    db.Workout.find({}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
})

// Export API routes
module.exports = router;