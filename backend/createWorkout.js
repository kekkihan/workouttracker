const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('workouts.db');

db.serialize( () => {

	let sql = "CREATE TABLE workouts (" +
			  "id integer PRIMARY KEY NOT NULL, " +
              "date NOT NULL, " +
			  "kgS integer, " +
              "setsS integer, " +
              "repsS integer, " +
              "kgB integer, " +
              "setsB integer, " +
              "repsB integer, " +
              "kgBar integer, " +
              "setsBar integer, " +
              "repsBar integer, " +
              "kgOhp integer, " +
              "setsOhp integer, " +
              "repsOhp integer, " +
              "kgDl integer, " +
              "setsDl integer, " +
              "repsDl integer )";

	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Table was created.");
	});

	sql = "INSERT INTO `workouts` (`id`, `date`, `kgS`, `setsS`, `repsS`, `kgB`, `setsB`, `repsB`, `kgBar`, `setsBar`, `repsBar`, `kgOhp`, `setsOhp`, `repsOhp`, `kgDl`, `setsDl`, `repsDl`) "+
	" VALUES (1, '22-4-2021', '75', '5', '5', '40', '5', '5', '35', '5', '5', '25', '5', '5', '80', '5', '5')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row was added.");
	});

	sql = "INSERT INTO `workouts` (`id`, `date`, `kgS`, `setsS`, `repsS`, `kgB`, `setsB`, `repsB`, `kgBar`, `setsBar`, `repsBar`, `kgOhp`, `setsOhp`, `repsOhp`, `kgDl`, `setsDl`, `repsDl`) "+
	" VALUES (2, '25-4-2021', '77.5', '5', '5', '40', '10', '3', '37.5', '5', '5', '27.5', '5', '5', '80', '5', '5')";
	db.run(sql, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log("Row was added.");
	});

	sql = "INSERT INTO `workouts` (`id`, `date`, `kgS`, `setsS`, `repsS`, `kgB`, `setsB`, `repsB`, `kgBar`, `setsBar`, `repsBar`, `kgOhp`, `setsOhp`, `repsOhp`, `kgDl`, `setsDl`, `repsDl`) "+
	" VALUES (3, '28-4-2021', '77.5', '5', '5', '42.5', '5', '5', '40', '5', '5', '30', '5', '5', '82.5', '5', '5')";
	db.run(sql, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log("Row was added.");
	});

	db.each("SELECT id, date FROM workouts", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id + ", " + row.date);
	});

	db.close();
});
