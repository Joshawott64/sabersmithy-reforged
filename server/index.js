import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import handlerFunctions from './controller.js'

const app = express()
const port = '66'
ViteExpress.config({ printViteDevServerHost: true })

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }))

// endpoints
const { getSabers, getComponents, getSaberUrls, addSaber, editSaber, deleteSaber, queryColoredEmitter, login, logout, register, sessionCheck } = handlerFunctions

app.get('/api/gallery', getSabers)
app.post('/api/gallery/urls', getSaberUrls)
app.post('/api/forge/add', addSaber)
app.get('/api/forge/components', getComponents)
app.post('/api/forge/coloredEmitter', queryColoredEmitter)
app.delete('/api/delete/:id', deleteSaber)
app.put('/api/edit/:id', editSaber)
app.post('/api/login', login)
app.get('/api/logout', logout)
app.post('/api/register', register)
app.get('/api/select:id')
app.get('/api/session-check', sessionCheck)


ViteExpress.listen(app, port, () => console.log(`Execute port 66! http://localhost:${port}`))