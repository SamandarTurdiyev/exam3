import { DataTypes , Model } from "sequelize";
import { newsequelize } from "../db/database.js";

export class User extends Model{}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
     } ,
     img:{
            type: DataTypes.TEXT
     },
     username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        
    },
    firstName: {
        type: DataTypes.STRING,
       
    },
    secondName: {
        type: DataTypes.STRING,
    },
    description:{
        type: DataTypes.TEXT,
    }
}, {
    tableName:'Users',
    modelName:'Users',
    updatedAt: 'users_update_at',
    createdAt:  'users_create_at', 
    deletedAt: 'users_delete_at',
    underscored:true,
    sequelize :newsequelize
})