const net = require('net');
const {IP, PORT} = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
    }, 
    
  );

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: Jac');
    // setTimeout(() => {conn.write('Move: up')}, 1000);
    // setTimeout(() => {conn.write('Move: right')}, 2000);
    // setTimeout(() => {conn.write('Move: up')}, 3000);
    // setTimeout(() => {conn.write('Move: left')}, 4000);
  });



  // conn.on("data", (data) => {
  //   console.log(data);
  //   data.write("Name: Jack")
  // })

  return conn;
};


module.exports = {connect};



// console.log("Connecting ...");
// connect();
