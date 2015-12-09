'use strict'

const js2Xml = require('js2xmlparser')
  , Promise = require('bluebird')
  , request = Promise.promisifyAll(require('request'))
  , Pending = require('../api/pending/collection')
  , forwardersUrl = require('./forwarders.url')

exports.start = () => {
  return Pending.
    findAsync().
    then(aggregate).
    each(process)
}

function aggregate(docs) {
  let works = []
  docs.forEach(doc =>  {
    const options = {
      url: forwardersUrl[doc.carrierName],
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml'
      },
      body: toXML(doc)
    }
    const work = request(options)
    works.push(work)
  })
  return works
}

function process(work) {
  return work.spread((res, body) => {
    console.log(body)
    // transform data from specific forwarder
    // and store on db
  })
}

function toXML() {
  return js2Xml('v10:TrackRequest', {
    '@': {
      'xmlns:v10': 'http://fedex.com/ws/track/v10'
    },
    'v10:WebAuthenticationDetail': {
      'v10:UserCredential': {
        'v10:key': 'CQrCTZVUE43FwEWR',
        'v10:password': 'D41kPVe5dxsUEouEG3JHEdvwb'
      }
    }
  })
}

