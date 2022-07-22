const express = require('express');
const app = express();

app.set("view engine", "ejs")  


app.get("/", (req, res) => {
    const item = [
        {
            title: "D",
            message:"Desenvolver apliações/Serviõs de forma fácil"
        },
        {
            title: "E",
            message:"EJs usa java script para render html"
        },
        {
            title: "M",
            message:"Muito faciil "
        },
        {
            title: "A",
            message:"Muito dificl "
        },
        {
            title: "I",
            message:"Muito pouco "
        },
        {
            title: "S",
            message:"Muito js "
        }

    ]
    res.render("pages/index",{
        qualitys: items,
    })
} )

app.get('/sobre', (req, res) =>{
    res.render('pages/about')
} )


app.listen(8080)
console.log('Servidor em pé')