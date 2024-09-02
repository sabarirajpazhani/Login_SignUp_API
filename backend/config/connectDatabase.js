const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URl).then((con)=>{
        console.log("Mongoose connect to host:" +con.connection.host)
    })

}

module.exports = connectDatabase;     