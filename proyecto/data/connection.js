require('dotenv').config();
const mongoclient = require('mongodb').MongoClient;

//TODO: reemplazar con variables de entorno
const uri = 'mongodb+srv://CamilaCapua:cami95@cluster0.mng6m.mongodb.net/?retryWrites=true&w=majority'

const client = new mongoclient(uri);

//TODO: reemplazar con un singlenton para generar siempre una sola connection
async function getConnection(){
    const instance = await client.connect();

    return instance;
}

module.exports = {getConnection};
