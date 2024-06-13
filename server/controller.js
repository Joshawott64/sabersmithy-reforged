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
    determineColoredEmitter
} = queryFunctions

const saberData = await getAllSabers()

const handlerFunctions = {
    getSabers: async (req, res) => {
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

        res.status(200).send(saberData)
    },
    editSaber: async (req, res) => {
        console.log('YOU MADE IT HERE')
        console.log('req.body:', req.body)
        const {id} = req.params
        console.log('id:', id)
        const saberToEdit = await Saber.findByPk(id)
        console.log('saberToEdit:', saberToEdit)

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

        res.status(200).send(saberData)
    },
    deleteSaber: async (req, res) => {
        const {id} = req.params

        await Saber.destroy({
            where: {
                saberId: id
            }
        })
    },
    selectSaber: async (req, res) => {
        const {id} = req.params

        const selectedSaber = await Saber.findByPk(id)

        res.status(200).send(selectedSaber)
    },
    queryColoredEmitter: async (req, res) => {
        console.log('req.body:', req.body)
        const {name, color, style} = req.body

        const coloredEmitter = await determineColoredEmitter(name, color, style)

        console.log("coloredEmitter:", coloredEmitter)

        res.status(200).send(coloredEmitter)
    }

}

export default handlerFunctions