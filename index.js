var mysql = require('mysql');

var DatabaseConnectionconfig ={

    host:"localhost",
    user:"root",
    Password: "" ,
    database: "nodejs"
}

var con =  mysql.createConnection(DatabaseConnectionconfig);

con.connect(function(error){
    if(error){
        console.log("Connection Failed");
    }
    else{

        console.log("Success");
        InsertData(con);
    }
});


function InsertData(con) {

    let SQLQuery =
      "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Ramim Hossain','01','Ten','0342342342','Dhaka' )";
    con.query(SQLQuery,function(error){

        if(error){
            console.log("Data Insert Fail");

        }else{
           console.log("Data Insert Success");
        }

    });
}