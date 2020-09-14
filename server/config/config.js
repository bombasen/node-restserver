//------------------------------------------
//PUERTO
//-----------------------------------------

process.env.PORT = process.env.PORT || 3000;

//------------------------------------------
//Entorno
//-----------------------------------------

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//------------------------------------------
//Vencimiento del token
//-----------------------------------------
//60 segundos
//60 minutos
//24 horas
//30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//------------------------------------------
//SEED de autenticacion
//-----------------------------------------

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//------------------------------------------
//Base de datos
//-----------------------------------------

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = "mongodb://localhost:27017/cafe";

} else {


    urlDB = process.env.MONGO_URL;
}
process.env.URLDB = urlDB;

//------------------------------------------
//SEED de autenticacion
//-----------------------------------------

process.env.CLIENT_ID = process.env.CLIENT_ID || "225986566103-t8var40mrab903jh2ri4rjq5dsuaa91a.apps.googleusercontent.com";