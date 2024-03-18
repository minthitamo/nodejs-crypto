import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Currency = sequelize.define('currency',{
    currency_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true
    },
    currency_name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    deleteflag:{
        type : DataTypes.INTEGER,
        allowNull:false
    },
    create_at:{
        type:DataTypes.DATE,
        allowNull:false
    }
},{})

module.exports = Currency
//console.log(Currency === sequelize.models.Currency); // true
