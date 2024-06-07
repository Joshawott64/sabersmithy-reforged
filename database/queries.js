const { Saber, 
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
} = await import ('./model.js')

const queryFunctions = {
    getAllSabers: async () => {
        const saberData = await Saber.findAll()

        return saberData
    },
    getColorImage: async (saber) => {
        const colorImage = await Color.findOne({
            attributes: [ 'image' ],
            where: { colorId: saber.colorId }
        })

        return colorImage.image
    },
    getEmitterImage: async (saber) => {
        const emitterImage = await Emitter.findOne({
            attributes: [ 'image' ],
            where: { emitterId: saber.emitterId }
        })

        return emitterImage.image
    },
    getColoredEmitterImage: async (saber) => {
        const coloredEmitterImage = await ColoredEmitter.findOne({
            attributes: [ 'image' ],
            where: { coloredEmitterId: saber.coloredEmitterId }
        })

        return coloredEmitterImage.image
    },
    getGuardImage: async (saber) => {
        const guardImage = await Guard.findOne({
            attributes: [ 'image' ],
            where: { guardId: saber.guardId }
        })

        return guardImage.image
    },
    getSwitchImage: async (saber) => {
        const switchImage = await Switch.findOne({
            attributes: [ 'image' ],
            where: { switchId: saber.switchId }
        })

        return switchImage.image
    },
    getPommelImage: async (saber) => {
        const pommelImage = await Pommel.findOne({
            attributes: [ 'image' ],
            where: { pommelId: saber.pommelId }
        })

        return pommelImage.image
    },
    getEmitter2Image: async (saber) => {
        const emitter2Image = await Emitter.findOne({
            attributes: [ 'image' ],
            where: { emitterId: saber.emitter2Id }
        })

        console.log('emitter2Image:', emitter2Image) // start here

        return emitter2Image.image
    },
    getColoredEmitter2Image: async (saber) => {
        const coloredEmitter2Image = await ColoredEmitter.findOne({
            attributes: [ 'image' ],
            where: { coloredEmitterId: saber.coloredEmitter2Id }
        })

        return coloredEmitter2Image.image
    },
    getGuard2Image: async (saber) => {
        const guard2Image = await Guard.findOne({
            attributes: [ 'image' ],
            where: { guardId: saber.guard2Id }
        })

        return guard2Image.image
    },
    getSwitch2Image: async (saber) => {
        const switch2Image = await Switch.findOne({
            attributes: [ 'image' ],
            where: { switchId: saber.switch2Id }
        })

        return switch2Image.image
    }
}

export default queryFunctions