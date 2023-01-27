const express=require('express')
const app=express()
const morgan=require('morgan')
var path =require('path')
app.set('views', path.join(__dirname))
app.set('view engine','ejs')

app.listen(3000)

app.use(express.static('public'))
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title:'Home',blogs})
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'about'})
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'new blog'})
})
app.use((req,res)=>{
    res.status(404).render('404',{title:'not found'})
})