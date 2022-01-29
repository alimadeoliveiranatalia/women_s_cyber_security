const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.static('views'));
app.get('/',function(req,res){
    res.render('pages/home')
});
app.listen(3333);
console.log('Funcionando na porta 3333');
