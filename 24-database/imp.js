

const db=require('./db');


function insertData(name,grade,subject){
    const sql="insert into student(name,grade,subject) values(?,?,?)";
    db.query(sql,[name,grade,subject],(err,res)=>{
        if(err){
            console.log(err)
        }
        console.log("Inserted",res);
    })
}

// insertData("Rajan","A++","coding")
// insertData("King","A+","coding")

function updateData(grade,subject,name){
    const sql="update student set grade=?,subject=? where name=?";
    db.query(sql,[grade,subject,name],(err,res)=>{
        if(err){
            console.log(err)
        }
        console.log("Updated",res)
    })

}


// updateData("A","JS","King")


function deleteData(name){
    const sql="delete from student where name=?";
    db.query(sql,name,(err,res)=>{
        if(err){
            console.log(err);
        }
        console.log("Deleted",res)
    })
}

// deleteData("King");

function showData(){
    const sql="select * from student";
    db.query(sql,(err,res)=>{
        if(err){
            console.log(err);
        }
        console.log(res);
    })
}

showData();