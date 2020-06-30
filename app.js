const express = require ('express');
const app = express();

app.listen(3000, ()=>console.log('El servidor está levantado'));

const rutaMain = require('./routes/main');

const rutaHeroes = require('./routes/heroes');

app.use('/', rutaMain)

app.use('/heroes', rutaHeroes)

app.get('/creditos', (req, res) =>{
    res.send('Trabajo realizado con express, por Jonatan Céspedes')
})