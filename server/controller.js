import { 
    Saber, 
    Color, 
    Emitter, 
    ColoredEmitter, 
    Guard, 
    Switch, 
    Pommel, 
    Soundfont, 
    User, 
    Post, 
    Like 
} from '../database/model.js'
import queryFunctions from '../database/queries.js'

// destructure query functions
const { 
    getDefaultSabers,
    getUserSabers,
    getSaberById,
    queryUsernameById,
    getAllColors,
    getAllEmitters,
    getAllColoredEmitters,
    getAllGuards,
    getAllSwitches,
    getAllPommels, 
    getAllSoundfonts,
    getSaberColorImage, 
    getSaberEmitterImage, 
    getSaberColoredEmitterImage, 
    getSaberGuardImage, 
    getSaberSwitchImage, 
    getSaberPommelImage,
    getSaberEmitter2Image, 
    getSaberColoredEmitter2Image, 
    getSaberGuard2Image, 
    getSaberSwitch2Image,
    getSaberSounds,
    determineColoredEmitter,
    getUser,
    getAllPosts,
    queryLikesByPostId
} = queryFunctions

const handlerFunctions = {
    getDefaultSabers: async (req, res) => {
        const saberData = await getDefaultSabers()
        
        res.status(200).send(saberData)
    },
    getUserSabers: async (req, res) => {
        const {id} = req.params
        const defaultSaberData = await getDefaultSabers()
        const userSaberData = await getUserSabers(id)
        const allSaberData = [...defaultSaberData, ...userSaberData]

        // console.log('allSaberData:', allSaberData)

        res.status(200).send(allSaberData)
    },
    getSaberById: async (req, res) => {
        const {id} = req.params

        const saber = await getSaberById(id)

        // console.log('saber:', saber)

        res.status(200).send(saber)
    },
    getUserById: async (req, res) => {
        const {id} = req.params

        console.log('id:', id)

        if (id === null) {
            console.log('HIT THE IF STATEMENT')
            res.status(200).send('')
        }

        const username = await queryUsernameById(id)

        res.status(200).send(username)
    },
    getSaberUrls: async (req, res) => {
        const saber = req.body
        // console.log('saber:', saber)
        const urls = {
            color: await getSaberColorImage(saber),
            emitter: await getSaberEmitterImage(saber),
            coloredEmitter: await getSaberColoredEmitterImage(saber),
            guard: await getSaberGuardImage(saber),
            switch: await getSaberSwitchImage(saber),
            pommel: await getSaberPommelImage(saber),
            emitter2: await getSaberEmitter2Image(saber),
            coloredEmitter2: await getSaberColoredEmitter2Image(saber),
            guard2: await getSaberGuard2Image(saber),
            switch2: await getSaberSwitch2Image(saber),
            sounds: await getSaberSounds(saber)
        }

        res.status(200).send(urls)
    },
    getComponents: async (req, res) => {
        const componentData = {
            colors: await getAllColors(),
            emitters: await getAllEmitters(),
            coloredEmitters: await getAllColoredEmitters(),
            guards: await getAllGuards(),
            switches: await getAllSwitches(),
            pommels: await getAllPommels(),
            soundfonts: await getAllSoundfonts()
        }

        res.status(200).send(componentData)
    },
    addSaber: async (req, res) => {
        const newSaber = await Saber.create(req.body)
        // console.log(newSaber)
        
        res.status(200).send("Success")
    },
    editSaber: async (req, res) => {
        const {id} = req.params
        const saberToEdit = await Saber.findByPk(id)
        
        // tried to use a for-in loop and couldn't get it to work (might come back to this later)
        saberToEdit.name = req.body.name
        saberToEdit.colorId = req.body.colorId
        saberToEdit.bladeStyle = req.body.bladeStyle
        saberToEdit.emitterId = req.body.emitterId
        saberToEdit.coloredEmitterId = req.body.coloredEmitterId
        saberToEdit.guardId = req.body.guardId
        saberToEdit.switchId = req.body.switchId
        saberToEdit.pommelId = req.body.pommelId
        saberToEdit.isDoubleBladed = req.body.isDoubleBladed
        saberToEdit.emitter2Id = req.body.emitter2Id
        saberToEdit.guard2Id = req.body.guard2Id
        saberToEdit.switch2Id = req.body.switch2Id
        saberToEdit.soundfontId = req.body.soundfontId
        
        await saberToEdit.save()

        res.status(200).send("Success")
    },
    deleteSaber: async (req, res) => {
        const {id} = req.params
        
        await Saber.destroy({
            where: {
                saberId: id
            }
        })

        const defaultSaberData = await getDefaultSabers()
        const userSaberData = await getUserSabers(id)
        const allSaberData = [...defaultSaberData, ...userSaberData]

        // console.log('allSaberData:', allSaberData)

        res.status(200).send(allSaberData)
    },
    queryColoredEmitter: async (req, res) => {
        const {name, color, style} = req.body

        const coloredEmitter = await determineColoredEmitter(name, color, style)

        res.status(200).send(coloredEmitter)
    },
    login: async (req, res) => {
        const { username, password } = req.body

        const user = await getUser(username, password)

        if (!user) {
            res.send({
                message: 'no username found',
                success: false
            })
            return
        }

        if (password !== user.password) {
            res.send({
                message: 'password does not match',
                success: false
            })
            return
        }

        req.session.userId = user.userId

        res.status(200).send({
            message: 'user logged in',
            success: true,
            userId: req.session.userId
        })
    },
    logout: async (req, res) => {
        req.session.destroy()

        res.send({
            message: "user logged out",
            success: true
        })
        return
    },
    register: async (req, res) => {
        const { username, password } = req.body

        if (await User.findOne({ where: { username: username } })) {
            res.send({
                message: 'username already exists',
                success: false
            })
            return
        }

        const newUser = await User.create({
            username: username,
            password: password
        })

        req.session.userId = newUser.userId

        res.send({
            message: 'user created',
            success: true,
            userId: newUser.userId
        })
    },
    sessionCheck: async (req, res) => {
        if (req.session.userId) {
            res.send({
                message: 'user is still logged in',
                success: true,
                userId: req.session.userId
            })
            return
        } else {
            res.send({
                message: 'no user logged in',
                success: false
            })
            return
        }
    },
    getPostData: async (req, res) => {
        const {sort} = req.params
        const allPostData = await getAllPosts(sort)

        res.status(200).send(allPostData)
    },
    getLikes: async (req, res) => {
        const {id} = req.params

        const likes = await queryLikesByPostId(id)

        res.status(200).send(likes)
    },
    createPost: async (req, res) => {
        const newPost = await Post.create(req.body)

        res.status(200).send("Success")
    },
    deletePost: async (req, res) => {
        const {id} = req.params

        await Post.destroy({
            where: {
                postId: id
            }
        })

        const allPostData = await getAllPosts()

        res.status(200).send(allPostData)
    },
    editPost: async (req, res) => {
        const {id} = req.params

        const postToEdit = await Post.findByPk(id)

        console.log('postToEdit:', postToEdit)

        console.log('req.body:', req.body)

        postToEdit.body = req.body.body

        await postToEdit.save()

        res.status(200).send("Success")
    },
    addLike: async (req, res) => {
        const newLike = await Like.create(req.body)

        const likeData = await Like.findAll()

        res.status(200).send(likeData)
    },
    removeLike: async (req, res) => {
        const {id} = req.params

        await Like.destroy({
            where: {
                userId: id
            }
        })

        const likeData = await Like.findAll()

        res.status(200).send(likeData)
    }

}

export default handlerFunctions