const request = require('supertest');
const db = require('./db.config')
const server = require('./server');  

describe('this is the server', () =>{
    
    it('sets the testing enviornment', () => {
        expect(process.env.DB_ENVI).toBe('testing')
    })
})

describe('endpoints', ()=>{

    beforeEach(async () => {
        await db('games').truncate();
      })

    describe(' post', () =>{
        
        it('should return 200 status', async () => {
            const game ={
                title: "Final Fantasy",
                genre: "RolePlaying",
                releaseYear: 1993

                
            }
            const res = await request(server).post('/game').send(game);
            expect(res.status).toBe(200);
          }) 


          it('should return 422 status', async () => {
            const game ={
                title: "Final Fantasy",
                releaseYear: 1993

                
            }
            const res = await request(server).post('/game').send(game);
            expect(res.status).toBe(422);
          }) 

          it('should send JSON', async () => {
            const game ={
                title: "Final Fantasy",
                genre: "RolePlaying",
                releaseYear: 1993

                
            }
            
            const res = await request(server).post('/game').send(game);
            expect(res.type).toBe('application/json');
          })


    


    })

    describe('GET /', () => {

       
        it('should return 200', async () => {
          const res = await request(server).get('/game');
          expect(res.status).toBe(200);
        }) 
  
        it('should return JSON', async () => {
          const res = await request(server).get('/game');
          expect(res.type).toBe('application/json');
        })
  
       
        it('should return { }', async () => {
          const res = await request(server).get('/games');
          expect(res.body).toEqual({  });
        })
      })

    

})