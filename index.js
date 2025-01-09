const jsonServer=require('json-server')
const Mpserver=jsonServer.create()
const midilware=jsonServer.defaults()
const router=jsonServer.router('db.json')
const PORT=3000||process.env.PORT
Mpserver.use(midilware)
Mpserver.use(router)
Mpserver.listen(PORT,()=>{
    console.log(`mpserver start at port ${PORT} `);
    
})