import React, { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';


const useStyles = makeStyles({
    table: {
      minWidth: 150,
      backgroundColor:  '#424242',
      borderRadius: 5,
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#b9f6ca',
      padding: 2,
    },
    tableRightBorder : {
        borderWidth: 1,
        borderColor: '#b9f6ca',
        borderStyle: 'solid',
        textAlign: 'center'
    },
    tableRowstyle:{
        minWidth: 150,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#b9f6ca',
        textAlign: 'center'
    }
  });

function History(props) {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [workouts, setWorkouts] = useState(props.workouts);

  const remove = async (id) => {
    try {
      const response = await axios.get('http://localhost:8080/workouts/delete/' + id)
     
      if (response.status === 200) {
        const newWorkouts = await workouts.filter(workout => workout.id !== id)
    
        setWorkouts(newWorkouts);
        setMessage('Workout removed.');
      }
      else {
        setMessage('Removal failed.');
      }
     
    } catch (error) {
      setMessage('Removal failed.');
    }
  }

      return (
        <div style={{textAlign: 'center'}}>
        <p>{ message }</p>
        <TableContainer style={{background:'#424242', padding: 40}} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                 <TableCell className={classes.tableRightBorder}>Date</TableCell>
                    <TableCell className={classes.tableRightBorder} align="right">Squat (kg, sets, reps)</TableCell>
                    <TableCell className={classes.tableRightBorder} align="right">Bench (kg, sets, reps)</TableCell>
                    <TableCell className={classes.tableRightBorder} align="right">Barbell row (kg, sets, reps)</TableCell>
                    <TableCell className={classes.tableRightBorder} align="right">Overhead press (kg, sets, reps)</TableCell>
                    <TableCell className={classes.tableRightBorder} align="right">Deadlift (kg, sets, reps)</TableCell>
                    <TableCell className={classes.tableRightBorder}>Delete</TableCell>
                 </TableRow>
                </TableHead>
                <TableBody>

          {workouts.map((workout) => (
            <TableRow key={workout.id}>
              <TableCell className={classes.tableRowstyle} component="th" scope="row">
                {workout.date}
              </TableCell>
              <TableCell className={classes.tableRowstyle} align="right">{workout.kgS}kg ({ workout.setsS } x { workout.repsS })</TableCell>
              <TableCell className={classes.tableRowstyle} align="right">{workout.kgB}kg ({ workout.setsB } x { workout.repsB })</TableCell>
              <TableCell className={classes.tableRowstyle} align="right">{workout.kgBar}kg ({ workout.setsBar } x { workout.repsBar })</TableCell>
              <TableCell className={classes.tableRowstyle} align="right">{workout.kgOhp}kg ({ workout.setsOhp } x { workout.repsOhp })</TableCell>
              <TableCell className={classes.tableRowstyle} align="right">{workout.kgDl}kg ({ workout.setsDl } x { workout.repsDl })</TableCell>
              <TableCell className={classes.tableRowstyle}>
              <IconButton onClick={() => remove(workout.id)}><DeleteIcon /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default History;