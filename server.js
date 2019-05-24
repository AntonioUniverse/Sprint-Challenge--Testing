const express = require('express');

const Game = require('./games-model');

const server = express();

server.use(express.json())



server.post('/game', (req, res) =>{
    const {title, genre} = req.body
    if(!title || !genre){
        res.status( 422 ).json( { message: 'You are missing title or genre.'})
    }else{
        Game.insert({title, genre})
    .then( game=>{
        res.status(200).json(game)
    }).catch( error =>{
        res.status(500).json({message : "unable to add game", error })
    })

    }
    

  })


  server.get('/game', async (req, res) => {
    const rows = await Game.getAll();
  
    res.status(200).json(rows);
  });

  module.exports = server
  