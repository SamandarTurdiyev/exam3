import Sequelize  from "sequelize";

import "dotenv/config"

export const newsequelize = new Sequelize(process.env.DATABASE , { logging: false})

try {
    await newsequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

