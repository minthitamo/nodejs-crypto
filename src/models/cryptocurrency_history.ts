import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const  { Cryptocurrency }  = require('./cryptocurrency');

const CyptocurrencyHistory = sequelize.define('cryptocurrency_history',{
    crypto_his_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    crypto_id:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    crypto_current_price:{
        type:DataTypes.DOUBLE,
        allowNull: false
    },
    create_at:{
        type:DataTypes.DATE,
        allowNull:false
    }
})

Cryptocurrency.hasMany(CyptocurrencyHistory)
CyptocurrencyHistory.belongsTo(Cryptocurrency)

module.exports =  CyptocurrencyHistory
