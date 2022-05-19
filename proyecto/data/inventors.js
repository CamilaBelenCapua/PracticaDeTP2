const connection = require('./connection');
const objectId = require('mongodb').ObjectId;

async function getInventors(){
    const clientMongo = await connection.getConnection();
    const inventors = await clientMongo
                .db('sample_tp2')
                .collection('inventors')
                .find()
                .toArray();
    return inventors;
}

async function getInventor(id){
    const clientMongo = await connection.getConnection();
    const inventor = await clientMongo
                .db('sample_tp2')
                .collection('inventors')
                .find({_id: new objectId(id)})
                .toArray();
    return inventor;
}

async function addInventor(inventor){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                .db('sample_tp2')
                .collection('inventors')
                .insertOne(inventor);
    return result;
}

// TODO: updateInventor(inventor)

async function updateInventor(inventor){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                .db('sample_tp2')
                .collection('inventors')
                .updateOne({_id: new objectId(inventor.id)}, { $set: { first: inventor.first, last: inventor.last ,year: inventor.year } })
    return result;

}

// TODO: deleteInventor(id)

async function deleteInventor(id){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                .db('sample_tp2')
                .collection('inventors')
                .deleteOne({_id: new objectId(id)})
    return result;
}


module.exports = {getInventors, getInventor, addInventor, updateInventor, deleteInventor};