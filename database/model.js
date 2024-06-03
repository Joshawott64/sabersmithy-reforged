import { Model, DataTypes } from 'sequelize'
import util from 'util'
import url from 'url'
import connectToDB from './db.js'
import { timeStamp } from 'console'

export const db = await connectToDB('postgresql:///sabers')

export class Saber extends Model {
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
        colorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bladeStyle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emitterId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        coloredEmitterId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        guardId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        switchId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pommelId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        isDoubleBladed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        emitter2Id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        coloredEmitter2Id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        guard2Id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        switch2Id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        soundfontId: {
            type: DataTypes.INTEGER,
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
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
        name: {
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
            type: DataTyps.STRING,
            allowNull: false
        }
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
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        saberId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        timestamp: {
            type: DataTypes.TIMESTAMP,
            allowNull: false
        }
    }
)

// !!!!! CREATE MIDDLE TABLE FOR LIKES !!!!!