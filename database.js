const { Sequelize } = require('sequelize');


// Replace 'your_database', 'your_username', 'your_password' and 'your_host' with your actual database credentials
const db= new Sequelize('kani','root','Applogiq@123',{
    host:"127.0.0.1",
    dialect:"mysql"
});


module.exports = db;
