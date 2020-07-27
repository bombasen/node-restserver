//------------------------------------------
//PUERTO
//-----------------------------------------

process.env.PORT = process.env.PORT || 3000;

//------------------------------------------
//Entorno
//-----------------------------------------

process.env.NODE_ENV = process.env.NODE_ENV || 3000;

//------------------------------------------
//Base de datos
//-----------------------------------------

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = "mongodb://localhost:27017/cafe";

} else {


    urlDB = 'mongodb+srv://bombasen:euringa666@cluster0.bu4es.mongodb.net/cafe?retryWrites=true&w=majority';
}
process.env.URLDB = urlDB;