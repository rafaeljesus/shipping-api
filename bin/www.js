'use strict'

const http = require('http')
  , app = require('../')
  , port = process.env.PORT || 3000

http.globalAgent.maxSockets = Infinity
http.createServer(app.callback())
app.listen(port)
console.log(`Shipping API - port ${port}`)
