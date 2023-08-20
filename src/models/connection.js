import { DataTypes , Model } from "sequelize";
import { newsequelize } from "../db/database.js";

export class Connection extends Model{}

Connection.init({
    connection_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
    }, {
        tableName: "connection",
        timestamps: true,
        sequelize: newsequelize
        })