import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Cyptocurrency = sequelize.define('cryptocurrency',{
    crypto_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    crypto_name:{
        type:DataTypes.STRING(150),
        allowNull: false
    },
    crypto_symbol:{
        type:DataTypes.STRING(10),
        allowNull: false
    },
    crypto_amount:{
        type:DataTypes.DOUBLE,
        allowNull: false
    },
    crypto_balance:{
        type:DataTypes.DOUBLE,
        allowNull: false
    },
    create_at:{
        type:DataTypes.DATE,
        allowNull:false
    },
    update_at:{
        type:DataTypes.DATE,
        allowNull:false
    },
    deleteflag:{
        type : DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports =  Cyptocurrency
