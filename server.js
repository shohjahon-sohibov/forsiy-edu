const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const router = require('./controllers')
const { PORT } = require('./config')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({ extended: true }))
app.use('/assets', express.static(path.resolve(__dirname, 'public')))
app.use(express.json())
app.use(cookieParser())
app.set('view engine', 'ejs')
app.use(router);

app.listen({ port:PORT }, console.log(PORT))