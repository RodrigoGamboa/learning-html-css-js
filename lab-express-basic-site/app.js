var express = require('express');
var app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//Para que se necesita esta línea de código para cargar css si cuando vinculas el index.html con 
//style.css ya toma los estilos?
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
