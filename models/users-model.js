const { DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const UsersModel = sequelize.define("users", {
    usersID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'First name value is required!',
            },
        },
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Last name value is required!',
            },
        },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Address value is required!',
            },
        },
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'City value is required!',
            },
        },
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Created at value is required!',
            },
        },
    },
    updatedAt: {
        type: DataTypes.DATE
    },  
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Employee id value is required!',
            },
            isInt: {
                msg: 'Invalid employee id format!',
            },
        },
    }
})

module.exports = UsersModel;
