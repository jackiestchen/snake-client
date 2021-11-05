let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === "W" || key === "w") {connection.write("Move: up")}
  if (key === "S" || key === "s") {connection.write("Move: down")}
  if (key === "A" || key === "a") {connection.write("Move: left")}
  if (key === "D" || key === "d") {connection.write("Move: right")}
  if (key === "G" || key === "g") {connection.write("Say: GGWP")};

}

module.exports = {
  setupInput,
}