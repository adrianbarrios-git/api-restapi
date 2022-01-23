import app from './app';

// import './database/connection'; //solo para probar

app.listen(app.get('port'));

console.log('server on port', app.get('port'));