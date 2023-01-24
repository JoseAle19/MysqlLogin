const mysql = require("mysql");

let dB_con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sockSerJos"
});

dB_con.connect( (err) =>{
  if (err) {
    console.log("Error de conexión");
    return;
  }
    console.log("Conexión exitosa");
});


module.exports = dB_con