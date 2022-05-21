import express from 'express';
import chalk from 'chalk';
import fs from 'fs';


const PORT = 3100;
const app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//Tomando el archivo json inventors
//Lo leo porque es un JSON, no un JS.

// GET /api/inventors --> retorna todos los inventores
app.get('/api/inventors', (req, res) => {
    try{
        const inventors = fs.readFileSync('./inventors.json', 'utf-8');
        res.json(JSON.parse(inventors));
    }catch(err){
        res.sendStatus(400).json(err)
    }
    
})

// GET /api/inventors/:id --> retorna un inventor determinado por ID
app.get('/api/inventors/:id', (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const inventors = fs.readFileSync('./inventors.json', 'utf-8');
        const inventorsJson = JSON.parse(inventors);
        const inventor = inventorsJson.filter(inventor => inventor._id === id)
        res.json(inventor);
    }catch(err){
        res.sendStatus(400).json(err)
    }
    
})

// POST /api/inventors/  --> da de alta un nuevo inventor
app.post('/api/inventors', (req, res) => {
    try{
        const inventorNuevo = req.body;
        const inventors = fs.readFileSync('./inventors.json', 'utf-8');
        const inventores = JSON.parse(inventors);
        inventores.push(inventorNuevo);
        fs.writeFileSync('./inventors.json', JSON.stringify(inventores, null, ' '));
        res.sendStatus(200); 
    }catch(err){
        res.sendStatus(400).json(err)
    }
})

// PUT /api/inventors/:id  --> actualiza las propiedades de un inventor segund ID
app.put('/api/inventors/:id', (req, res) => {
    try{
        const id = parseInt(req.params.id); //Porque cuando lo mando por POSTMAN es un String
        const inventors = JSON.parse(fs.readFileSync('./inventors.json', 'utf-8'));
        const newInventor = req.body
        const inventorID = inventors.filter(inventor => inventor._id === newInventor._id);

        if(inventorID.length>0){
            inventorID[0].first = newInventor.first;
            inventorID[0].last = newInventor.last;
            inventorID[0].year = newInventor.year;
            fs.writeFileSync('./inventors.json', JSON.stringify(inventors));
        }
        res.json(inventors)
    }catch(err){
        res.sendStatus(400).json(err)
    }
})

// DELETE /api/inventors/:id  --> elimina un inventor por ID
app.delete('/api/inventors/:id', (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const inventors = fs.readFileSync('./inventors.json', 'utf-8');
        const inventores = JSON.parse(inventors);
        const inventoresFiltrados = inventores.filter(inventor => inventor._id !== id);
        fs.writeFileSync('./inventors.json', JSON.stringify(inventoresFiltrados, null, ' '));
        res.sendStatus(200);
    }catch(err){
        res.sendStatus(400).json(err)
    }
})


app.listen(PORT, () => {
    console.log(chalk.bgGreen.blue(`Server express levantado en el puerto: ${PORT}`));
});

