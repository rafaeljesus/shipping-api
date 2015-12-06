'use strict'

const Promise = require('bluebird')
  , mongoose = Promise.promisifyAll(require('mongoose'))
  , Schema = mongoose.Schema

const Address = {
  countryCode: String,
  countryName: String,
  stateOrProvinceCode: String,
  city: String,
  residential: Boolean
}

const Event = {
  timestamp: Date,
  type: String,
  description: String,
  address: Address
}

const Tracking = Schema({
  carrier: String,
  trackingNumber: String,
  deliveryDate: Date,
  estDeliveryDate: Date,
  pickupDate: Date,
  hasProofOfDelivery: Boolean,
  status: String,
  signedBy: String,
  service: {
    type: String,
    description: String
  },
  identifiers: {
    type: String,
    description: String
  },
  packageDetails: {
    weight: {
      units: String,
      value: Number
    },
    dimensions: {
      units: String,
      lenght: Number,
      width: Number,
      height: Number
    }
  },
  pickupAddress: Address,
  destinationAddress: Address,
  actualDeliveryAddress: Address,
  events: [Event]
})

module.exports = mongoose.model('trackings', Tracking)
