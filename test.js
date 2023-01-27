const http = require('http')
const _=require('lodash')

const server=http.createServer((req,res)=>{
    console.log('request made')
    res.setHeader('Content-type','text/plain')
    res.write('hello')
    res.end()
    let p=_.random(1,10)
    console.log(p)

})

server.listen(3000,'localhost',()=>{
    console.log('listen from 3000')
})