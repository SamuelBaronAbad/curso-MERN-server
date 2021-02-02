// Usamos el paquete jwt-simple y moment (fechas)
// importamos con require
const jwt = require("jwt-simple");
const moment = require("moment");
const user = require("../models/user");

const SECRET_KEY = "hF48d9Lop4SK633Wep7seA4aqn7f4d5f1d89fvou21j";

// exports.nombreFuncion = function (param) {} Otra forma de crear y exportar funciones
// Creaciond de tokens para login (ver docum en la web => Yarn => jwt-simple)
exports.createAccessToken = function (user) {

    // Token: String de datos codificados que cuando se desencripta devuelve unos datos
    /* createToken y exp: fecha de creación y expiracion del Token, 
    creamos con moment() (ver docum en la web => Yarn => moment.js o en su web) y en formato unix() */
    const payload = {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        rol: user.rol,
        createToken: moment().unix(),
        exp: moment().add(3, "hours").unix()
    }
    // pasamos el objeto codificado
    return jwt.encode(payload, SECRET_KEY);
}

// Token que actualizará el Token de acceso
exports.createRefreshToken = function (user) {
    const payload = {
        id: user._id,
        exp: moment().add(30, "days").unix()
    }

    return jwt.encode(payload, SECRET_KEY);
}

// Funcion para descodificar los tokens
exports.decodeToken = function (token) {
return jwt.decode(token, SECRET_KEY, true);
}