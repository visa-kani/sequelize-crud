const { DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const userDetailsModel = sequelize.define("user_details", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'User name value is required!',
            },
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Email value is required!',
            },
        },
    },
    address: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //     notNull: {
        //         msg: 'Address value is required!',
        //     },
        // },
    },
    city: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //     notNull: {
        //         msg: 'City value is required!',
        //     },
        // },
    },
    state: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //     notNull: {
        //         msg: 'State value is required!',
        //     },
        // },
    },
    phone_number: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        // validate: {
        //     notNull: {
        //         msg: 'Phone number value is required!',
        //     },
        // },
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'User password value is required!',
            },
        },
    },
    createdAt: {
        type: DataTypes.DATE,
        // allowNull: false,
        // validate: {
        //     notNull: {
        //         msg: 'Created at value is required!',
        //     },
        // },
    },
    updatedAt: {
        type: DataTypes.DATE
    },

})

module.exports = userDetailsModel;
