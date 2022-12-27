const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

sequelize.define('country', {
   
cname: {
    type: DataTypes.STRING,
    allowNull:false,
    primaryKey: true
    
}


},
{timestamps: false,});


};