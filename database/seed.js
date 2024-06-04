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

// add saberData to database
const sabersInDB = await Promise.all(saberData.map((saber) => {
    const { isDefault, name, colorId, bladeStyle, emitterId, coloredEmitterId,
         guardId, switchId, pommelId, isDoubleBladed, emitter2Id, 
         coloredEmitter2Id, guard2Id, switch2Id, userId, soundfontId, 
         isPublic } = saber

         const newSaber = Saber.create({
            isDefault,
            name,
            colorId,
            bladeStyle,
            emitterId,
            coloredEmitterId,
            guardId, 
            switchId, 
            pommelId,
            isDoubleBladed,
            emitter2Id,
            coloredEmitter2Id,
            guard2Id,
            switch2Id,
            userId,
            soundfontId,
            isPublic
         })

         return newSaber
}))

console.log(sabersInDB)

// add colorData to database
const colorsInDB = await Promise.all(colorData.map((color) => {
    const { colorId, image } = color
    
    const newColor = Color.create({
        colorId,
        image
    })

    return newColor
}))

// add emitterData to database
const emittersInDB = await Promise.all(emitterData.map((emitter) => {
    const { emitterId, image } = emitter

    const newEmitter = Emitter.create({
        emitterId,
        image
    })

    return newEmitter
}))

// add coloredEmitterData to database
const coloredEmittersInDB = await Promise.all(coloredEmitterData.map((coloredEmitter) => {
    const { coloredEmitterId, image } = coloredEmitter

    const newColoredEmitter = ColoredEmitter.create({
        coloredEmitterId,
        image
    })

    return newColoredEmitter
}))

// add guardData to database
const guardsInDB = await Promise.all(guardData.map((guard) => {
    const { guardId, image } = guard

    const newGuard = Guard.create({
        guardId,
        image
    })

    return newGuard
}))

// add pommelData to database
const pommelsInDB = await Promise.all(pommelData.map((pommel) => {
    const { pommelId, image } = pommel

    const newPommel = Pommel.create({
        pommelId,
        image
    })

    return newPommel
}))

// add soundfontData to database
const soundfontsInDB = await Promise.all(soundfontData.map((soundfont) => {
    const { soundfontId, clash1, clash2, clash3, deactivate, deflect, hum, 
        ignite, swoosh1, swoosh2, swoosh3 } = soundfont

    const newSoundfont = Soundfont.create({
        soundfontId,
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
const usersInDB = await Promise.all(userData.map((user) => {
    const { username, password } = user

    const newUser = User.create({
        username,
        password
    })

    return newUser
}))

// add postData to database
const postsInDB = await Promise.all(postData.map((post) => {
    const { userId, saberId, body, timestamp } = post

    const newPost = Post.create({
        userId,
        saberId,
        body,
        timestamp
    })

    return newPost
}))

// add likeData to database
const likesInDB = await Promise.all(usersInDB.flatMap((user) => {
    const likesOnPost = postsInDB.map(post => {
        return Like.create({
            userId: user.userId,
            postId: post.postId
        })
    })
    return likesOnPost
}))

await db.close()

console.log('Finished seeding database!')