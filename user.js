const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "698ee757148d901016c3df7880180feb",
  database: "my_db1",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("CONNECTION SUCCESS!!!");
  await connection.endAsync();
}

async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  sql = `insert into user1(id,name,email,password,mobile_no) values(?,?,?,?,?)`;
  await connection.queryAsync(sql, [
    user.id,
    user.name,
    user.email,
    user.password,
    user.mobile_no,
  ]);

  console.log("User added");
  await connection.endAsync();
}
// const user = {
//   name: "Mrrobot",
//   email: "sam-esmail@ecorp.us",
//   password: "926782667597d71479677e8aab0ad4dc",
//   mobile_no: "7427466391",
// };
// addUser(user);

async function selectUser() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection to the DataBase is a success!");
  // let sql = `select * from user1 where id=3`;
  let sql = `select * from user1`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log(list);
  return list;
}

//select user after connection success
selectUser();
//export user
module.exports = { selectUser, addUser };
