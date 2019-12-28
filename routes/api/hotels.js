const express = require('express')
const router = express.Router()
const HotelsServices = require('../../services/hotels')

const hotelServices = new HotelsServices()

router.get('/', async function(req, res, next){
    const { tags } = req.query
    console.log('req', req.query)

    try {
        const hotels = await hotelServices.getHotels({ tags })

        res.status(200).json({
            data: hotels,
            message: 'hotels list'
        })
    } catch(err) {
        next(err)
    }
})

router.get('/:hotelCity', async function(req, res, next){
    const { hotelCity } = req.params
    console.log('req', req.params)

    try {
        const hotels = await hotelServices.hotelCity({ hotelCity })

        res.status(200).json({
            data: hotels,
            message: 'hotels city'
        })
    } catch(err) {
        next(err)
    }
})

router.get('/:hotelId', async function(req, res, next){
    const { hotelId } = req.params
    console.log('req', req.params)

    try {
    const hotel = await hotelServices.getHotel({ hotelId })

    res.status(200).json({
        data: hotel,
        message: 'hotels retrieved'
        })
    } catch(err) {
        next(err)
    }
})

router.post('/', async function(req, res, next){
    const { body: hotel } = req
    console.log('req', req.body)

    try{
    const createHotel = await hotelServices.createHotel({ hotel })

    res.status(201).json({
        data: createHotel,
        message: 'hotels list'
    })
    } catch(err) {
        next(err)
    }
})

router.put('/:hotelId', async function(req, res, next){
    const { hotelId } = req.params
    const { body: hotel } = req
    console.log("req", req.params, req.body)

    try {
    const updateHotel = await hotelServices.updateHotel({ hotelId, hotel })

    res.status(200).json({
        data: updateHotel,
        message: 'hotels update'
    })
    } catch(err) {
        next(err)
    }
})

router.delete('/:hotelId', async function(req, res, next){
    const { hotelId } = req.params
    console.log("req", req.params)

    try{
    const hotel = await hotelServices.deleteHotel({ hotelId })

    res.status(200).json({
        data: hotel,
        message: 'hotels delete'
    })
    } catch(err) {
        next(err)
    }
})

module.exports = router