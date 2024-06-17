import db, { Saber, Color, Emitter, ColoredEmitter, Guard, Switch, 
    Pommel, Soundfont, User, Post, Like } from './model.js'
import saberData from './sabers.json' assert { type: 'json' }
import colorData from './colors.json' assert { type: 'json' }
import emitterData from './emitters.json' assert { type: 'json' }
import coloredEmitterData from './coloredEmitters.json' assert { type: 'json' }
import guardData from './guards.json' assert { type: 'json' }
import switchData from './switches.json' assert { type: 'json' }
import pommelData from './pommels.json' assert { type: 'json' }
import soundfontData from './soundfonts.json' assert { type: 'json' }
import userData from './users.json' assert { type: 'json' }
import postData from './posts.json' assert { type: 'json' }
import likeData from './likes.json' assert { type: 'json' }

console.log('Syncing database...')
await db.sync({force: true})
console.log('Seeding database...')

// add colorData to database
// const colorsInDB = await Promise.all(colorData.map((color) => {
//     const { colorCode, image } = color
    
//     const newColor = Color.create({
//         colorCode,
//         image
//     })

//     return newColor
// }))
const colorsInDB = colorData.map(async (color) => {
    const { colorCode, image } = color
    
    const newColor = await Color.create({
        colorCode,
        image
    })

    return newColor
})

// let colorsToCreate = []
// for (const color of colorData) {
//     colorsToCreate({ 
//         colorCode: color.colorCode,
//         image: color.image
//     })
// }

// await Color.bulkCreate(colorsToCreate)

// add emitterData to database
const emittersInDB = (emitterData.map(async (emitter) => {
    const { emitterCode, image } = emitter
    
    const newEmitter = await Emitter.create({
        emitterCode,
        image
    })
    
    return newEmitter
}))

// add coloredEmitterData to database
const coloredEmittersInDB = (coloredEmitterData.map(async (coloredEmitter) => {
    const { coloredEmitterCode, image } = coloredEmitter
    
    const newColoredEmitter = await ColoredEmitter.create({
        coloredEmitterCode,
        image
    })
    
    return newColoredEmitter
}))

// add guardData to database
const guardsInDB = (guardData.map(async (guard) => {
    const { guardCode, image } = guard
    
    const newGuard = await Guard.create({
        guardCode,
        image
    })
    
    return newGuard
}))

// add switchData to database
const switchesInDB = (switchData.map(async (bladeSwitch) => {
    const { switchCode, image } = bladeSwitch
    
    const newSwitch = await Switch.create({
        switchCode,
        image
    })

    return newSwitch
}))

// add pommelData to database
const pommelsInDB = (pommelData.map(async (pommel) => {
    const { pommelCode, image } = pommel
    
    const newPommel = await Pommel.create({
        pommelCode,
        image
    })

    return newPommel
}))

// add soundfontData to database
const soundfontsInDB = (soundfontData.map(async (soundfont) => {
    const { soundfontCode, clash1, clash2, clash3, deactivate, deflect, hum, 
        ignite, swoosh1, swoosh2, swoosh3 } = soundfont
        
    const newSoundfont = await Soundfont.create({
        soundfontCode,
        clash1,
        clash2,
        clash3,
        deactivate,
        deflect,
        hum,
        ignite,
        swoosh1,
        swoosh2,
        swoosh3
    })

    return newSoundfont
}))

// add userData to database
const usersInDB = (userData.map(async (user) => {
    const { username, password } = user
    
    const newUser = await User.create({
        username,
        password,
    })
    
    return newUser
}))

// add saberData to database
const sabersInDB = (saberData.map(async (saber) => {
    const { isDefault, name, colorId, bladeStyle, emitterId, coloredEmitterId,
         guardId, switchId, pommelId, isDoubleBladed, emitter2Id, 
         coloredEmitter2Id, guard2Id, switch2Id, userId, soundfontId, 
         isPublic } = saber

         const newSaber = await Saber.create({
            isDefault: isDefault,
            name: name,
            colorId: colorId,
            bladeStyle: bladeStyle,
            emitterId: emitterId,
            coloredEmitterId: coloredEmitterId,
            guardId: guardId, 
            switchId: switchId, 
            pommelId: pommelId,
            isDoubleBladed: isDoubleBladed,
            emitter2Id: emitter2Id,
            coloredEmitter2Id: coloredEmitter2Id,
            guard2Id: guard2Id,
            switch2Id: switch2Id,
            userId: userId,
            soundfontId: soundfontId,
            isPublic: isPublic
         })

         return newSaber
}))

console.log('sabersInDB:', sabersInDB)

// add postData to database
const postsInDB = (postData.map(async (post) => {
    console.log("HELLO THERE")
    const { userId, saberId, body } = post

    const newPost = await Post.create({
        userId,
        saberId,
        body
    })

    return newPost
}))

// add likeData to database
const likesInDB = await Promise.all(likeData.flatMap(async (like) => {
    const { userId, postId } = like

    const newLike = await Like.create({
        userId,
        postId
    })

    return newLike
}))

await db.close()

console.log('Finished seeding database!')