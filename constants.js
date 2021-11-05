const IP = 'localhost';
const PORT = '50541';
const MOVE_KEY = {
  w: "Move: up",
  W: "Move: up",
  // 38: "Move: up",
  s: "Move: down",
  S: "Move: down",
  // 40: "Move: down",
  a: "Move: left",
  A: "Move: left",
  // 37: "Move: left",
  d: "Move: right",
  D: "Move: right",
  // 39: "Move: right",
  g: "Say: GGEZ",
  G: "Say: GGEZ",
  t: "Say: Ez pz",
  T: "Say: Ez pz"
}


module.exports = {
  IP,
  PORT,
  MOVE_KEY,
}