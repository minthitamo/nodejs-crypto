
import express, {Request, Response, request} from "express";
import {readdirSync} from 'fs'; // auto read direct ไม่ต้องติดตั้งเพิ่มเติม
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

require('dotenv').config()
const { initMySQL, sequelize } = require('./config/db');

const { Currency } = require('./models/currency');
const { Cryptocurrency } = require('./models/cryptocurrency');

const app = express()


// show log middleware => เมื่อมีการเรียก api จะแสดง log การเรียกทั้งหมด
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({limit : '10mb'}))

readdirSync('./src/routes')
  .map((r: any) => app.use('/api', require('./routes/'+r)));


app.listen(process.env.APP_PORT, async() =>{
  await initMySQL(),
  await sequelize.sync({ force: true }),
  Currency,
  Cryptocurrency,
  console.log('Server is running port '+process.env.APP_PORT)
})

