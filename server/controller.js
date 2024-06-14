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
    getAllSabers,
    getAllColors,
    getAllEmitters,
    getAllColoredEmitters,
    getAllGuards,
    getAllSwitches,
    getAllPommels, 
    getAllSoundFonts,
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
    determineColoredEmitter,
    getUser
} = queryFunctions

const handlerFunctions = {
    getSabers: async (req, res) => {
        const saberData = await getAllSabers()
        
        res.status(200).send(saberData)
    },
    getSaberUrls: async (req, res) => {
        const saber = req.body
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
            switch2: await getSaberSwitch2Image(saber)
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
            soundfonts: await getAllSoundFonts()
        }

        res.status(200).send(componentData)
    },
    addSaber: async (req, res) => {
        const newSaber = await Saber.create(req.body)
        console.log(newSaber)
        const saberData = await getAllSabers()

        res.status(200).send(saberData)
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
        
        const saberData = await getAllSabers()

        res.status(200).send(saberData)
    },
    deleteSaber: async (req, res) => {
        const {id} = req.params
        
        await Saber.destroy({
            where: {
                saberId: id
            }
        })

        const saberData = await getAllSabers()
                
        res.status(200).send(saberData)
    },
    selectSaber: async (req, res) => {
        const {id} = req.params

        const selectedSaber = await Saber.findByPk(id)

        res.status(200).send(selectedSaber)
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
    }

}

export default handlerFunctions