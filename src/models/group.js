import { DataTypes , Model } from "sequelize";
import { newsequelize } from "../db/database.js";

export class Group extends Model{}

Group.init({
    group_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
     } ,
     img:{
            type: DataTypes.TEXT
     },
     group_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    group_link: {
        type: DataTypes.STRING,
        unique: true,
    }
}, {
    tableName:'Group',
    modelName:'Group',
    updatedAt: 'group_update_at',
    createdAt:  'group_create_at', 
    deletedAt: 'group_delete_at',
    underscored:true,
    sequelize :newsequelize
})