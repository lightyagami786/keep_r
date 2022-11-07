const express=require('express');
const path=require('path');
// const hbs=require('hbs');
const app=express();

const staticPath=path.join(__dirname,"public/html");

app.use(express.static(staticPath));

// app.get('/',(req,res)=>{
//     res.send()
// })

// const viewPath=path.join(__dirname,'template/views');

// const partialPath=path.join(__dirname,'template/partials');

const cssPath=path.join(__dirname,'public/css');
// const imgPath=path.join(__dirname,'public/images');
const jsPath=path.join(__dirname,'src');

app.use(express.static(cssPath));

// app.use(express.static(imgPath));
app.use(express.static(jsPath));
// app.use(express.static(jsPathDsa));
// app.set('views',viewPath);
// hbs.registerPartials(partialPath);
// app.set('view engine','hbs');



// app.get('',(req,res)=>{
//     res.render('index')
// });

// app.get('/dsa',(req,res)=>{
//     res.render('dsa')
// });

app.listen(8000,()=>console.log('listening'));
