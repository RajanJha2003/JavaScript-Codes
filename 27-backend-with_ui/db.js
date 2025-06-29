
const mysql=require('mysql2');

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Rajan@2003",
    database:"user_crud"
})

db.connect((err)=>{
    if(err){
        console.log(err)

    }
    console.log("Database connected")
})

module.exports=db;