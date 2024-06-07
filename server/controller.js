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
    getColorImage, 
    getEmitterImage, 
    getColoredEmitterImage, 
    getGuardImage, 
    getSwitchImage, 
    getPommelImage,
    getEmitter2Image, 
    getColoredEmitter2Image, 
    getGuard2Image, 
    getSwitch2Image
} = queryFunctions

const saberData = await getAllSabers()

const handlerFunctions = {
    getSabers: (req, res) => {
        res.status(200).send(saberData)
    },
    getSaberUrls: async (req, res) =>{
        const saber = req.body
        const urls = {
            color: await getColorImage(saber),
            emitter: await getEmitterImage(saber),
            guard: await getGuardImage(saber),
            switch: await getSwitchImage(saber),
            pommel: await getPommelImage(saber),
            emitter2: await getEmitter2Image(saber),
            coloredEmitter2: await getColoredEmitter2Image(saber),
            guard2: await getGuard2Image(saber),
            switch2: await getSwitch2Image(saber)
        }

        res.status(200).send(urls)
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