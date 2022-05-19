const express = require('express');
const data = require('./../data/inventors');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  const inventors = await data.getInventors();
  res.json(inventors);
});

router.get('/:id', async(req, res) =>{
    const inventor = await data.getInventor(req.params.id);
    res.json(inventor);
});

router.post('/', async(req, res)=>{
    const inventor = req.body;
    const result = await data.addInventor(inventor);
    res.json(result);
});

// TODO: PUT: /:id BODY: inventor

router.put('/:id', async(req,res)=>{
  const inventor = req.body;
  inventor.id = req.params.id;
  const result = await data.updateInventor(inventor);
  res.json(result);
});

// TODO: DELETE: /:id

router.delete('/:id', async(req,res)=>{
  const result = await data.deleteInventor(req.params.id);
  res.json(result);
});

module.exports = router;