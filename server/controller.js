import { Saber, 
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
    getSaberColorImage, 
    getSaberEmitterImage, 
    getSaberColoredEmitterImage, 
    getSaberGuardImage, 
    getSaberSwitchImage, 
    getSaberPommelImage,
    getSaberEmitter2Image, 
    getSaberColoredEmitter2Image, 
    getSaberGuard2Image, 
    getSaberSwitch2Image
} = queryFunctions

const saberData = await getAllSabers()

const handlerFunctions = {
    getSabers: (req, res) => {
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
        }

        res.status(200).send(componentData)
    },
    addSaber: async (req, res) => {
        const newSaber = await Saber.create(req.body)
        console.log(newSaber)

        res.status(200).send(saberData)
    },
    editSaber: async (req, res) => {
        const {id} = req.params
        const saberToEdit = await Saber.findByPk(id)

        for (let component in saberToEdit) {
            saberToEdit[component] = req.body.component
        }

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
    }
}

export default handlerFunctions