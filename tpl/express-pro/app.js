const express = require('express')
const app = express()
const router = require('./core')
const redis = require('redis')
const session = require('express-session')

app.use(router)




app.listen(3000)
