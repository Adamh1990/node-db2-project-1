const express = require('express')
const Car = require('./cars-model')
const router = express.Router()
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid,
} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res) => {
   res.json(req.car)
})

router.post(
    '/',
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid,
    async (req, res, next) => {
    try {
        const car = await Car.create(req.body)
        res.json(car)
    } catch (err) {
        next()
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
    })
  })

module.exports = router