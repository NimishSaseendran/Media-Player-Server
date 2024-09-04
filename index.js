//importing json-server
const jsonServer = require('json-server')

//creating server
const mpServer = jsonServer.create()

//initializing middleware
const middleWare = jsonServer.defaults()

//creating router instance
const router = jsonServer.router('db.json')

//configuring middleware and routes to server
mpServer.use(middleWare)
mpServer.use(router)

//setting port

const PORT = 3000 || process.env.PORT

//calling listen method with server server for activating server
mpServer.listen(PORT,()=>{
    console.log('Server running at PORT:'+PORT);
    
})