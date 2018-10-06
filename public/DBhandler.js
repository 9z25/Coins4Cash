var app = require('../server.js');


function loadUserListDB(user,pass){
  /*
  db.transaction(function(tx) {
    tx.executeSQL("CREATE TABLE IF NOT EXISTS userList ( id INTEGER PRIMARY KEY, name TEXT, pass TEXT)");
  });
  */

}

function insertUser(user,pass){

console.log(app);
console.log('test');
alert('test' + user + pass);
/*
app.post("http://localhost:5000/login",
{user: user, password: pass}, function(data){
if(data === 'done')
{
  alert("login success");
}
})
*/
  /*
  db.transaction('INSERT INTO myList (name, pass) VALUES(?,?)', [alias,pass])
  */
}

function returnUsers(){
/*  db.transaction(function(tx){
    tx.executeSQL('SELECT * userList', [], function(tx,result){
      var rows = result.rows;
      for (var i = 0; i < rows.length; i++){
        console.log(rows[i].name);
        console.log(rows[i].pass);
      }
    })
  }, 'null');
  */
}
