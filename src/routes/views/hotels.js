const express = require('express')
const router = express.Router()
const HotelsServices = require('../../services/hotels')

const hotelServices = new HotelsServices()

router.get('/', async function(req, res, next) {
    const { tags } = req.query
    try{
        const hotels = await hotelServices.getHotels({ tags })
        res.render("hotels", { hotels })
    } catch(err) {
        next(err)
    }
})

module.exports = router