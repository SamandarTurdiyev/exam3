import { DataTypes , Model } from "sequelize";
import { newsequelize } from "../db/database.js";

export class Channel extends Model{}

Channel.init({
    channel_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
     } ,
     img:{
            type: DataTypes.TEXT
     },
     channel_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    channel_link: {
        type: DataTypes.STRING,
        unique: true,
    }
}, {
    tableName:'Channel',
    modelName:'Channel',
    updatedAt: 'channel_update_at',
    createdAt:  'channel_create_at', 
    deletedAt: 'channel_delete_at',
    underscored:true,
    sequelize :newsequelize
})