const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const http = require('http')
const index = require('./routes/index')

const app = express()

app.disable('x-powered-by')
app.set('port', '9500')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', index)

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error')
})

const server = http.createServer(app)
server.listen('9500')

server.on('error', (error) => {
    if (error.syscall === 'listen' && error.code === 'EADDRINUSE') {
        process.exit(1)
    }
    throw error
})

module.exports = app
