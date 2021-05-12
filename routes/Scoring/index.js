const Score = require('express').Router();
const db = require('../../models');


Score.get("/score",(async (req,res)=>{

   const scores = await db.save.savunit.findAll();

    res.json(scores);

}))


module.exports = Score;