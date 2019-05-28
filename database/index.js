const mysql = require('mysql');
const config = require('./db_config.js');

const db = mysql.createConnection(config.options);

const addIngredient = (ingredient, cb) => {
	db.query(`INSERT INTO ingredients (calories, protein, fat, carbs) 
	VALUES (${ingredient.calories},${ingredient.protein},${ingredient.fat},${ingredient.carbs})`, (err) => {
		if(err){
			cb(err);
		} else {
			cb(null);
		}
	});
}


export {addIngredient}
