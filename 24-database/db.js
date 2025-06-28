const mysql=require('mysql2');

const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Rajan@2003",
    database:"school"
})

conn.connect((err)=>{
    if(err){
        console.log(err)

    }
    console.log("Database connected")
})