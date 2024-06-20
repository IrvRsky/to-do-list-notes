import { Sequelize } from "sequelize";
import db from "../config/Db.js";

const { DataTypes } = Sequelize;

const Note = db.define('notes',{
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
    title:{
        type: DataTypes.TEXT
    },
    datetime:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    note:{
        type: DataTypes.TEXT
    },
},{
    freezeTableName : true,
    timestamps: false
});

export default Note;