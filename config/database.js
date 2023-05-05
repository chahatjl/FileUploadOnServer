const mongoose=require("mongoose");

require("dotenv").config();

exports.connnect=()=>{
    mongoose.connect(process.env.URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("DB connection is done"))
    .catch((error)=>
    {
        console.log("issue in db connection")
        console.error(error.message);
        process.exit(1);

    })
}
