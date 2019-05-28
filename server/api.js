import express from 'express';
import path from 'path';
import {addIngredient} from '../database/index.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/daylog', (req, res) => {

});

app.get('/dailycal', (req, res) => {

});


app.post('/newingredient', (req, res) => {
	
});

app.post('/newmeal', (req, res) => {

});

app.post('/newlog', (req, res) => {

});

app.put('/updateingredient', (req, res) => {

});

app.put('/updatemeal', (req, res) => {

});

app.put('/updatelog', (req, res) => {

});

app.delete('deleteingredient', (req, res) =>{

});

app.delete('deletemeal', (req, res) =>{

});

app.delete('deletelog', (req, res) =>{

});

app.listen(3001,() => console.log("API Server listening on port 3001"));