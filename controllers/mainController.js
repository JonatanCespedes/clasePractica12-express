const main = {
    index: function (req, res){
        res.set({'content-type': 'text/plain; charset=utf-8'});
        res.send('Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')
    }
}

module.exports = main