const express = require('express')
const opn = require('opn')
const app = express();
var path = require('path');
const bodyParser = require('body-parser')
var watchify = require('watchify');
const port = 5000
var cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded())



//app.set("views", "./routes/users.js");
//app.use('/', require('./routes/users.js'));

/*
var routes = require('./routes/index.js');
var users = require('./routes/users.js');
*/
var sqlite3 = require('sqlite3').verbose();

if (sqlite3) console.log('success');


var db = new sqlite3.Database('./sys_user1.db')

db.run('CREATE TABLE IF NOT EXISTS sys_user1(name TEXT, password TEXT)')


app.post('/test', function (req, res) {
console.log("USERNAME :: " + req.body.name + " PW :: " + req.body.password);
console.log('Hello World again!')
  res.send('Hello World!');
})





/*
db.run("INSERT INTO sys_user1(name, password) VALUES ('Richie', 'testPassword')", function(err) {
	if (err) {
		return console.log(err.message)
	}
	console.log('A row has been inserted with rowid' + this.lastID);
	});
db.close()
*/


/*
var db = new sqlite3.Database('./sys_user','OPEN_CREATE', ()=> (err) => console.log(err));

function queryDB(){

let sql = `SELECT id, name, pass FROM sys_user`;
 
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

 
// close the database connection
db.close();

}

var loader =  {
	loadUserListDB: function (){
    db.run("INSERT INTO sys_user (id, name, pass) VALUES ('5','Brian','password')")
},
    get: function (tx1){
    db.get("SELECT id, name, pass FROM sys_user",[],function(tx1,result){
    	var rows = result.rows
    	for (var i = 0; i< rows.length; i++){
    		console.log(rows[i].name);
    		console.log(rows[i].pass);
    	}
    })

},
}

/*function insertUser(){
  alias1 = "Richie";
  pass1 = "Test1";
  db.run('INSERT INTO myList (name, pass) VALUES(?,?)', [alias1,pass1])
}
*/


function returnUsers(){
  db.run(function(tx){
    tx.executeSQL('SELECT * userList', [], function(tx,result){
      var rows = result.rows;
      for (var i = 0; i < rows.length; i++){
        console.log(rows[i].name);
        console.log(rows[i].pass);
      }
    })
  }, 'null');
}




//console.log(queryDB())
//insertUser();
//returnUsers();



// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');





function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}
app.use(allowCrossDomain)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(__dirname + '/public'))


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
  opn('http://localhost:5000')
})


//app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
