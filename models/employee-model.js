const { DataTypes } = require('sequelize');
const sequelize = require("../database.js");

const EmployeeModel = sequelize.define("employees", {
    employee_id: {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
            notNull: {
                msg: 'Email value is required!',
            },
            isEmail: {
                msg: 'Invalid Email format!',
            },
        },
    },
    hire_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Hire date value is required!',
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
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Department id value is required!',
            },
            isInt: {
                msg: 'Invalid department id format!',
            },
        },
    }
})

module.exports = EmployeeModel;
