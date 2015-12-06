'use strict'

const Promise = require('bluebird')
  , mongoose = Promise.promisifyAll(require('mongoose'))
  , Schema = mongoose.Schema

const Pending = Schema({
  userId: Schema.Types.ObjectId,
  accountNumber: String,
  carrierName: String,
  carrierCode: String
})

module.exports = mongoose.model('pendings', Pending)
