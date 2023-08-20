import { DataTypes , Model } from "sequelize";
import { newsequelize } from "../db/database.js";

export class ConnectionChannel extends Model{}

ConnectionChannel.init({
    ConnectionChannel_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
    }, {
        tableName: "ConnectionChannel",
        timestamps: true,
        sequelize: newsequelize
        })