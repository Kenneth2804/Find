const {DataTypes} = require ('sequelize');
module.exports = (sequelize) =>{

sequelize.define('people',{

    id: 
    {type:
     DataTypes.UUID,
     defaultValue: DataTypes.UUIDV4,
     primaryKey: true,
     allowNull: false
    },
    
    name: {
         type: DataTypes.STRING,
         allowNull:false
        },
    
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    photo : {
        type: DataTypes.STRING,
    allowNull: false
    },
    tattoos: {
        type: DataTypes.STRING,
        allowNull: true
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    


},{timestamps: false,   updatedAt: false,   createdAt: false, recipeId: false, dietId: false, recipe_diet: false});


}