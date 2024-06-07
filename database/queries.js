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
    getColorImage: async (saber) => {
        const colorImage = await Color.findOne({
            attributes: [ 'image' ],
            where: { colorId: saber.colorId }
        })

        return colorImage
    },
    getEmitterImage: async (saber) => {
        const emitterImage = await Emitter.findOne({
            attributes: [ 'image' ],
            where: { emitterId: saber.emitterId }
        })

        return emitterImage
    },
    getColoredEmitterImage: async (saber) => {
        const coloredEmitterImage = await ColoredEmitter.findOne({
            attributes: [ 'image' ],
            where: { coloredEmitterId: saber.coloredEmitterId }
        })

        return coloredEmitterImage
    },
    getGuardImage: async (saber) => {
        const guardImage = await Guard.findOne({
            attributes: [ 'image' ],
            where: { guardId: saber.guardId }
        })

        return guardImage
    },
    getSwitchImage: async (saber) => {
        const switchImage = await Switch.findOne({
            attributes: [ 'image' ],
            where: { switchId: saber.switchId }
        })

        return switchImage
    },
    getPommelImage: async (saber) => {
        const pommelImage = await Pommel.findOne({
            attributes: [ 'image' ],
            where: { pommelId: saber.pommelId }
        })

        return pommelImage
    }
}

export default queryFunctions