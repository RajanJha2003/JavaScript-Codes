const db=require('./db');
const http = require("http");

const server=http.createServer((req,res)=>{
    const method=req.method;
    const url=req.url.split("?")[0];

    if(url==="/" && method==="GET"){
        const sql="Select * from users";
        db.query(sql,(err,data)=>{
            if(err){
                throw err;
            }
        const rows=data.map((user)=>
        `
        <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
         <a href="/update?id=${user.id}">Edit</a> |
         <a href="/delete?id=${user.id}">Delete</a>
        </td>

        </tr>
        `
        ).join("");

        const html = `
            <html>
                <body>
                    <form method="POST" action="/add">
                        Name:
                        <input type="text" name="name"><br>
                        Email:
                        <input type="text" name="email"><br>
                        <button type="submit">Submit</button>
                    </form>
                    <h2>Users List</h2>
                    <table border="1">
                        <tr>
                            <th>ID</th><th>Name</th><th>Email</th><th>Actions</th>
                        </tr>
                        ${rows}
                    </table>
                </body>
            </html>
        `;
         res.end(html);
        })
    }

})

server.listen(4000,()=>{
    console.log("Server is running")
})
