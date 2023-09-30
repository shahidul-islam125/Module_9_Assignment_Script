/**
 * Title: Assignment Script on Module-09
 * Description: Project structure with Express Js
 * Author: SHAHIDUL ISLAM
 * Date: 30 Sep 23 
 */

const app = require('./app')
const mongoose = require('mongoose')

//Configuration
const dotenv = require('dotenv')
dotenv.config({path: "./config.env"})

//  Connet to Database and Running the server
mongoose
        .connect(process.env.DATABASE)
        .then(() => {
            console.log("Database Connected!")
            app.listen(process.env.RUNNING_PORT, () => {
                console.log("Server is running on " + process.env.RUNNING_PORT)
            })
        })
        .catch((err) => console.log(err))

