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
const colorsInDB = await Promise.all(colorData.map((color) => {
    const { colorCode, image } = color
    
    const newColor = Color.create({
        colorCode,
        image
    })

    return newColor
}))

// add emitterData to database
const emittersInDB = await Promise.all(emitterData.map((emitter) => {
    const { emitterCode, image } = emitter
    
    const newEmitter = Emitter.create({
        emitterCode,
        image
    })
    
    return newEmitter
}))

// add coloredEmitterData to database
const coloredEmittersInDB = await Promise.all(coloredEmitterData.map((coloredEmitter) => {
    const { coloredEmitterCode, image } = coloredEmitter
    
    const newColoredEmitter = ColoredEmitter.create({
        coloredEmitterCode,
        image
    })
    
    return newColoredEmitter
}))

// add guardData to database
const guardsInDB = await Promise.all(guardData.map((guard) => {
    const { guardCode, image } = guard
    
    const newGuard = Guard.create({
        guardCode,
        image
    })
    
    return newGuard
}))

// add switchData to database
const switchesInDB = await Promise.all(switchData.map((bladeSwitch) => {
    const { switchCode, image } = bladeSwitch
    
    const newSwitch = Switch.create({
        switchCode,
        image
    })

    return newSwitch
}))

// add pommelData to database
const pommelsInDB = await Promise.all(pommelData.map((pommel) => {
    const { pommelCode, image } = pommel
    
    const newPommel = Pommel.create({
        pommelCode,
        image
    })

    return newPommel
}))

// add soundfontData to database
const soundfontsInDB = await Promise.all(soundfontData.map((soundfont) => {
    const { soundfontCode, clash1, clash2, clash3, deactivate, deflect, hum, 
        ignite, swoosh1, swoosh2, swoosh3 } = soundfont
        
    const newSoundfont = Soundfont.create({
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
const usersInDB = await Promise.all(userData.map((user) => {
    const { username, password } = user
    
    const newUser = User.create({
        username,
        password,
    })
    
    return newUser
}))

// add saberData to database
const sabersInDB = await Promise.all(saberData.map((saber) => {
    const { isDefault, name, colorId, bladeStyle, emitterId, coloredEmitterId,
         guardId, switchId, pommelId, isDoubleBladed, emitter2Id, 
         coloredEmitter2Id, guard2Id, switch2Id, userId, soundfontId, 
         isPublic } = saber

         console.log('saber:', saber)

         const newSaber = Saber.create({
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

         console.log('newSaber:', newSaber)

         return newSaber
}))

console.log('sabersInDB:', sabersInDB)

// add postData to database
const postsInDB = await Promise.all(postData.map((post) => {
    console.log("HELLO THERE")
    const { userId, saberId, body } = post

    const newPost = Post.create({
        userId,
        saberId,
        body
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