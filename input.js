let connection;
const {MOVE_KEY} = require('./constants');

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (MOVE_KEY[key]) {
    connection.write(MOVE_KEY[key]);
  }
};

module.exports = {
  setupInput,
};