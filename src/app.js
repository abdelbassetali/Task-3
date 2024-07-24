const express = require("express")
const app = express()

const port = process.env.PORT || 3000

const path = require("path")
const { title } = require("process")
const publicDirectory = path.join(__dirname, "../public")
app.use(express.static(publicDirectory))




app.listen(port, () => {
    console.log(`app is listeing on port  ${port}`)
})

app.set('view engine', 'hbs');

app.get("/", (req, res) => {
    res.render('index', {
        title: 'Home',
        desc: "This is home page",
        name:"Abd elbasset",
        job: "I work as a website developer",
        img: "images/home.jpg"
    })
})
app.get('/service', (req, res) => {
    res.render('service', {
        title: 'service',
        name: 'alaa',
        age: 22,
        city: 'qena',
        desc: "The service is available 24 hours",
        img: "images/service.jpg"
    })
})
app.get('/team', (req, res) => {
    res.render('team', {
        title: 'team',
        name: 'yasmeen - alaa- eslam -aly ',
        age: 22,
        city: 'qena',
        desc: "my team is great",
        img: "images/team.jpg"
    })
})

app.get('/details', (req, res) => {
    res.render('details', {
        title: 'details',
        name: 'Abd elbasset',
        age: 22,
        city: 'qena',
        desc: "iam full stack devoleper",
        img: "images/details.jpg"
    })
})
app.get('/conect',(req,res)=>{
    res.render('conect',{
title:'conect',
name:"the support",
desc:'How can we help you',
call:'01123242526',
img: "images/conect.jpg"

    })
})
const hbs= require('hbs');
const partialsPath = path.join(__dirname , '../partials')
hbs.registerPartials(partialsPath)