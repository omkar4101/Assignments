var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // configuration for database
    var config = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost', 
        database: 'SchoolDB' 
    };

    // connecting the database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // creating Request to the object
        var request = new sql.Request();

        request.query('select * from Student', function (err, recordset) {
            if (err) console.log(err)

     
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
            