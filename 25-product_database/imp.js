

const db=require('./db');


function insertData(name,price){
    const sql="insert into product(name,price) values(?,?)";
    db.query(sql,[name,price],(err,res)=>{
        if(err){
            console.log(err)
        }
        console.log("Inserted",res);
    })
}

// insertData("Laptop",800000)
// insertData("Mobile",250000);

function updateData(price,name){
    const sql="update product set price=? where name=?";
    db.query(sql,[price,name],(err,res)=>{
        if(err){
            console.log(err)
        }
        console.log("Updated",res)
    })

}


// updateData(1000000,"Laptop")


function deleteData(name){
    const sql="delete from product where name=?";
    db.query(sql,name,(err,res)=>{
        if(err){
            console.log(err);
        }
        console.log("Deleted",res)
    })
}

// deleteData("Mobile");

function showData(){
    const sql="select * from product";
    db.query(sql,(err,res)=>{
        if(err){
            console.log(err);
        }
        console.log(res);
    })
}

showData();