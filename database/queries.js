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
        const saberData = await Saber.findAll({
            order: ['saberId']
        })

        return saberData
    },
    getAllColors: async () => {
        const colorData = await Color.findAll({
            order: ['colorId']
        })

        return colorData
    },
    getAllEmitters: async () => {
        const emitterData = await Emitter.findAll({
            order: ['emitterId']
        })

        return emitterData
    },
    getAllColoredEmitters: async () => {
        const coloredEmitterData = await ColoredEmitter.findAll({
            order: ['coloredEmitterId']
        })

        return coloredEmitterData
    },
    getAllGuards: async () => {
        const guardData = await Guard.findAll({
            order: ['guardId']
        })

        return guardData
    },
    getAllSwitches: async () => {
        const switchData = await Switch.findAll({
            order: ['switchId']
        })

        return switchData
    },
    getAllPommels: async () => {
        const pommelData = await Pommel.findAll({
            order: ['pommelId']
        })

        return pommelData
    },
    getAllSoundFonts: async () => {
        const soundfontData = await Soundfont.findAll({
            order: ['soundfontId']
        })

        return soundfontData
    },
    getSaberColorImage: async (saber) => {
        const colorImage = await Color.findOne({
            attributes: [ 'image' ],
            where: { colorId: saber.colorId }
        })

        return colorImage.image
    },
    getSaberEmitterImage: async (saber) => {
        const emitterImage = await Emitter.findOne({
            attributes: [ 'image' ],
            where: { emitterId: saber.emitterId }
        })

        return emitterImage.image
    },
    getSaberColoredEmitterImage: async (saber) => {
        const coloredEmitterImage = await ColoredEmitter.findOne({
            attributes: [ 'image' ],
            where: { coloredEmitterId: saber.coloredEmitterId }
        })

        return coloredEmitterImage.image
    },
    getSaberGuardImage: async (saber) => {
        const guardImage = await Guard.findOne({
            attributes: [ 'image' ],
            where: { guardId: saber.guardId }
        })

        return guardImage.image
    },
    getSaberSwitchImage: async (saber) => {
        if (saber.switchId === null) {
            return ''
        }

        const switchImage = await Switch.findOne({
            attributes: [ 'image' ],
            where: { switchId: saber.switchId }
        })

        return switchImage.image
    },
    getSaberPommelImage: async (saber) => {
        if (saber.pommelId === null) {
            return ''
        }

        const pommelImage = await Pommel.findOne({
            attributes: [ 'image' ],
            where: { pommelId: saber.pommelId }
        })

        return pommelImage.image
    },
    getSaberEmitter2Image: async (saber) => {
        if (saber.emitter2Id === null) {
            return ''
        }

        const emitter2Image = await Emitter.findOne({
            attributes: [ 'image' ],
            where: { emitterId: saber.emitter2Id }
        })

        return emitter2Image.image
    },
    getSaberColoredEmitter2Image: async (saber) => {
        if (saber.coloredEmitter2Id === null) {
            return ''
        }

        const coloredEmitter2Image = await ColoredEmitter.findOne({
            attributes: [ 'image' ],
            where: { coloredEmitterId: saber.coloredEmitter2Id }
        })

        return coloredEmitter2Image.image
    },
    getSaberGuard2Image: async (saber) => {
        if (saber.guard2Id === null) {
            return ''
        }

        const guard2Image = await Guard.findOne({
            attributes: [ 'image' ],
            where: { guardId: saber.guard2Id }
        })

        return guard2Image.image
    },
    getSaberSwitch2Image: async (saber) => {
        if (saber.switch2Id === null) {
            return ''
        }

        const switch2Image = await Switch.findOne({
            attributes: [ 'image' ],
            where: { switchId: saber.switch2Id }
        })

        return switch2Image.image
    },
    determineColoredEmitter: async (name, color, style) => {
        const testEmitter = await ColoredEmitter.findOne({
            where: { coloredEmitterCode: `${name}${color}${style}` }
        })

        return testEmitter
    },
    getUser: async (username, password) => {
        const user = await User.findOne({
            where: {
                username: username,
                password: password
            }
        })

        return user
    }
}

export default queryFunctions