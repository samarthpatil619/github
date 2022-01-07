const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
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
//   name: "Rohit",
//   email: "samdwfn@123",
//   password: "kjsbvkjw",
//   mobile_no: "1239875090",
// };
// addUser(user);

async function selectUser() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("CONNECTION SUCCESS!!!");
  // let sql = `select * from user1 where id=3`;
  let sql = `select * from user1`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log(list);
  return list;
}

selectUser();

module.exports = { selectUser, addUser };
