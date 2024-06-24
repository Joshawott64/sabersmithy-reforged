import { Model, DataTypes } from 'sequelize'
import util from 'util'
import url from 'url'
import connectToDB from './db.js'

export const db = await connectToDB('postgresql:///sabersmithy_reforged')

export class Saber extends Model {
    // simplify console logs
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Saber.init(
    {
        saberId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        isDefault: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bladeStyle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isDoubleBladed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isPublic: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        modelName: 'saber',
        sequelize: db
    }
)

export class Color extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Color.init(
    {
        colorId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        colorCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'color',
        sequelize: db
    }
)

export class Emitter extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Emitter.init(
    {
        emitterId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        emitterCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'emitter',
        sequelize: db
    }
)

export class ColoredEmitter extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

ColoredEmitter.init(
    {
        coloredEmitterId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        coloredEmitterCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'colored_emitter',
        sequelize: db
    }
)

export class Guard extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Guard.init(
    {
        guardId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        guardCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'guard',
        sequelize: db
    }
)

export class Switch extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Switch.init(
    {
        switchId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        switchCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'switch',
        sequelize: db
    }
)

export class Pommel extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Pommel.init(
    {
        pommelId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pommelCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'pommel',
        sequelize: db
    }
)

export class Soundfont extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Soundfont.init(
    {
        soundfontId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        soundfontCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        clash1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        clash2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        clash3: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deactivate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deflect: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hum: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ignite: {
            type: DataTypes.STRING,
            allowNull: false
        },
        swoosh1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        swoosh2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        swoosh3: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'soundfont',
        sequelize: db
    }
)

export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'user',
        sequelize: db
    }
)

export class Post extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Post.init(
    {
        postId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'post',
        sequelize: db,
        timestamps: true
    }
)

export class Like extends Model {
    [util.inspect.custom]() {
        this.toJSON()
    }
}

Like.init(
    {
        likeId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        modelName: 'like',
        sequelize: db
    }
)

// table relationships
Color.hasMany(Saber, { foreignKey: 'colorId' })
Saber.belongsTo(Color, { foreignKey: 'colorId' })

Emitter.hasMany(Saber, { foreignKey: 'emitterId' })
Emitter.hasMany(Saber, { foreignKey: 'emitter2Id' })
Saber.belongsTo(Emitter, { foreignKey: 'emitterId' })

ColoredEmitter.hasMany(Saber, { foreignKey: 'coloredEmitterId' })
ColoredEmitter.hasMany(Saber, { foreignKey: 'coloredEmitter2Id' })
Saber.belongsTo(ColoredEmitter, { foreignKey: 'coloredEmitterId' })

Guard.hasMany(Saber, { foreignKey: 'guardId' })
Guard.hasMany(Saber, { foreignKey: 'guard2Id' })
Saber.belongsTo(Guard, { foreignKey: 'guardId' })

Switch.hasMany(Saber, { foreignKey: 'switchId' })
Switch.hasMany(Saber, { foreignKey: 'switch2Id' })
Saber.belongsTo(Switch, { foreignKey: 'switchId' })

Pommel.hasMany(Saber, { foreignKey: 'pommelId' })
Saber.belongsTo(Pommel, { foreignKey: 'pommelId' })

Soundfont.hasMany(Saber, { foreignKey: 'soundfontId' })
Saber.belongsTo(Soundfont, { foreignKey: 'soundfontId' })

User.hasMany(Saber, { 
    foreignKey: 'userId',
    onDelete: 'CASCADE' 
})
Saber.belongsTo(User, { foreignKey: 'userId' })

User.hasMany(Post, { 
    foreignKey: 'userId',
    onDelete: 'CASCADE' 
})
Post.belongsTo(User, { foreignKey: 'userId' })

User.hasMany(Like, { 
    foreignKey: 'userId',
    onDelete: 'CASCADE'
 })
Like.belongsTo(User, { foreignKey: 'userId' })

Saber.hasMany(Post, {
     foreignKey: 'saberId',
     onDelete: 'CASCADE' 
    })
Post.belongsTo(Saber, { foreignKey: 'saberId' })

Post.hasMany(Like, {
     foreignKey: 'postId', 
     onDelete: 'CASCADE'
    })
Like.belongsTo(Post, { foreignKey: 'postId' })

User.hasMany(Post, { 
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})
Post.belongsTo(User, { foreignKey: 'userId' })

User.hasMany(Like, { 
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})
Like.belongsTo(User, { foreignKey: 'userId' })

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...')
    await db.sync()
    console.log('Finished syncing database!')
}

export default db