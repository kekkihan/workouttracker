const express = require('express');
const app = express();

var helmet = require('helmet')
app.use(helmet())

app.use(express.json());  

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('workouts.db');

app.listen(8080, () => {
    console.log('Node toimii localhost:8080');
});

app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Toimii' })
});

app.get('/workouts/all', (req, res, next) => {
	db.all('select * from workouts', function (error, result) {
		if (error) throw error;

		return res.status(200).json(result);
	});
})

app.get('/workouts/one/:id', (req, res, next) => {
	let id = req.params.id;

    db.get('select * from workouts where id = ? or date = ?', [id], (error, result) => {
		if (error) throw error;

		if (typeof(result) == 'undefined') {
			return res.status(200).json({});
		}

		return res.status(200).json(result);
	});
})

app.post('/workouts/add', (req, res, next) => {
    let workouts = req.body;

    db.run('insert into workouts (date, kgS, setsS, repsS, kgB, setsB, repsB, kgBar, setsBar, repsBar, kgOhp, setsOhp, repsOhp, kgDl, setsDl, repsDl) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )',
	      [workouts.date, workouts.kgS, workouts.setsS, workouts.repsS, workouts.kgB, workouts.setsB, workouts.repsB, workouts.kgBar, workouts.setsBar, workouts.repsBar, workouts.kgOhp, workouts.setsOhp, workouts.repsOhp, workouts.kgDl, workouts.setsDl, workouts.repsDl], (error, result) => {
		if (error) throw error;

		return res.status(200).json( {count: 1} );
	});
})

app.get('/workouts/delete/:id', (req, res, next) => {
	let id = req.params.id;

  	db.run('delete from workouts where id = ?', [id], function (error, result) {
		if (error) throw error;

		return res.status(200).json( {count: this.changes} );
	});
})

app.post('/workouts/edit/:id', (req, res, next) => {
	let id = req.params.id;
	let workouts = req.body;
   
	db.run('update workouts set date=?, kgS=?, setsS=?, repsS=?, kgB=?, setsB=?, repsB=?, kgBar=?, setsBar=?, repsBar=?, kgOhp=?, setsOhp=?, repsOhp=?, kgDl=?, setsDl=?, repsDl=? where id=?',
    [workouts.date, workouts.kgS, workouts.setsS, workouts.repsS, workouts.kgB, workouts.setsB, workouts.repsB, workouts.kgBar, workouts.setsBar, workouts.repsBar, workouts.kgOhp, workouts.setsOhp, workouts.repsOhp, workouts.kgDl, workouts.setsDl, workouts.repsDl], (error, result) => {
		  if (error) throw error;
  
		  return res.status(200).json( {count: this.changes} );
	});
  })

app.get('*', (req, res, next) => {
    return res.status(404).json({ error: true, message: 'Ei pyydettyä palvelua' })
})
