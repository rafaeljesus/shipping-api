'use strict'

module.exports = name => {
  const map = {
    'FEDEX': 'https://gatewaybeta.fedex.com/xml'
  }

  return map[name]
}
