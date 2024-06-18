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
const { getDefaultSabers, getUserSabers, getSaberById, getUserById, getComponents, getSaberUrls, addSaber, editSaber, deleteSaber, queryColoredEmitter, login, logout, register, sessionCheck, getPostData, getLikes, createPost, deletePost, editPost } = handlerFunctions

app.get('/api/gallery/default-sabers', getDefaultSabers)
app.get('/api/gallery/:id', getUserSabers)
app.post('/api/gallery/urls', getSaberUrls)
app.post('/api/forge/add', addSaber)
app.get('/api/forge/components', getComponents)
app.post('/api/forge/coloredEmitter', queryColoredEmitter)
app.delete('/api/delete/:id', deleteSaber)
app.put('/api/edit/:id', editSaber)
app.post('/api/login', login)
app.get('/api/logout', logout)
app.post('/api/register', register)
app.get('/api/select/:id', getSaberById)
app.get('/api/session-check', sessionCheck)
app.get('/api/forum/posts', getPostData)
app.get('/api/username/:id', getUserById)
app.get('/api/likes/:id', getLikes)
app.post('/api/create-post', createPost)
app.delete('/api/post/delete/:id', deletePost)
app.put('/api/post/edit/:id', editPost)

ViteExpress.listen(app, port, () => console.log(`Execute port 66! http://localhost:${port}`))