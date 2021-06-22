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
       // DeleteData(con)
       //UpdateData(con);
        SelectData(con);
        
    }
});


//for Data insert

function InsertData(con) {

    let SQLQuery =
      "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Ramim Hossain','02','Ten','0342342342','Dhaka' )";
    con.query(SQLQuery,function(error){

        if(error){
            console.log("Data Insert Fail");

        }else{
           console.log("Data Insert Success");
        }

    });
}


//for Data Delete

function DeleteData(con) {

    let SQLQuery = "DELETE FROM `students_list` WHERE `id` ='2'";
    
 con.query(SQLQuery, function (error) {
   if (error) {
     console.log("Data Delete Fail");
   } else {
     console.log("Data Delete Success");
   }
 });
}


//for Data Update


function UpdateData(con) {
  let SQLQuery =
    "UPDATE `students_list` SET   `phone`='554',`city`='Raj' WHERE `id` = '3'";

  con.query(SQLQuery, function (error) {
    if (error) {
      console.log("Data Update Fail");
    } else {
      console.log("Data Update Success");
    }
  });
}


//for Data Select


function SelectData(con) {
  let SQLQuery ="SELECT * FROM `students_list` WHERE 1"
     

  con.query(SQLQuery, function (error,result) {
    if (error) {
      console.log("Data Select Fail");
    } else {
      console.log(result);
    }
  });
}