const con = require("../config/database");
const bcrypt = require("bcryptjs");
const login = (req, res) => {
  const { email, password } = req.body;
  const findByEmail = `SELECT * FROM users WHERE email = '${email}'`;
  con.query(findByEmail, async (err, result) => {
    if (result.length <= 0) {
      return res.status(400).json({
        status: false,
        msg: "Correo o contraseñas incorrectos, correo",
      });
    }
    //password del usuario que se quiere loguear
    let userPassword = result[0].password;
    const validatePassBcryp = await bcrypt.compare(password, userPassword);
    if (!validatePassBcryp) {
      return res.status(400).json({
        status: false,
        msg: "Correo o contraseñas incorrectos, contraseña",
      });
    }
    return res.json({
      status: true,
      msg: "Usuario logueado correctamente",
    });
  });
};

module.exports = {
  login,
};
