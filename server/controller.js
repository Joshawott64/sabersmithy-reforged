import { Saber, Color, Emitter, ColoredEmitter, Guard, Switch, 
    Pommel, Soundfont, User, Post, Like } from '../database/model.js'

// select every saber in the saber table
const saberData = await Saber.findAll()

const handlerFunctions = {
    getSabers: (req, res) => {
        res.status(200).send(saberData)
    },
    addSaber: async (req, res) => {
        const newSaber = await Saber.create(req.body)

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