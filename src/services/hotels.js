const MongoLib = require('../../db/mongo')

class HotelsServices {
    constructor() {
        this.collection = 'hotels'
        this.mongoDB = new MongoLib()
    }

    async getHotels({ tags }) {
        const query = tags && { tags: { $in: tags} }
        const hotels = await this.mongoDB.getAll(this.collection, query)
        
        return hotels || []
    }

    async hotelCity({ tags }) {
        const query = tags && { tags: { $in: tags} }
        const hotels = await this.mongoDB.getAll(this.collection, query)
        return hotels || {}
    }

    async getHotel({ hotelId }) {
        const hotel = await this.mongoDB.get(this.collection, hotelId)
        return hotel || {}
    }

    async createHotel({ hotel }) {
        const createHotelId = await this.mongoDB.create(this.collection, hotel)
        return createHotelId
    }

    async updateHotel({ hotelId, hotel }) {
        const updateHotelId = await this.mongoDB.update(this.collection, hotelId, hotel)
        return updateHotelId
    }

    async deleteHotel({ hotelId }) {
        const deleteHotelId = await this.mongoDB.delete(this.collection, hotelId)
        return deleteHotelId
    }
}

module.exports = HotelsServices