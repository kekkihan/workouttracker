import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import deadlift from '../images/deadlift.jpg';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import fiLocale from "date-fns/locale/fi";
import axios from 'axios';


function New_workout () {
    const [workout, setWorkout] = useState({
            date: new Date(),
            kgS:'',setsS:'',repsS:'',           //squats
            kgB:'',setsB:'',repsB:'',           //bench
            kgBar:'',setsBar:'',repsBar:'',     //barbell row
            kgOhp:'',setsOhp:'',repsOhp:'',     //overhead press
            kgDl: '',setsDl: '',repsDl:''       //deadlift
            })
    const [message, setMessage] = useState('');

    const addWorkout = (e) => {
        e.preventDefault();
        const formData = {
        date: workout.date.getDate() + '-' + (workout.date.getMonth() + 1) + '-' + workout.date.getFullYear(),
        kgS: workout.kgS,
        setsS: workout.setsS,
        repsS: workout.repsS,
        kgB: workout.kgB,
        setsB: workout.setsB,
        repsB: workout.repsB,
        kgBar: workout.kgBar,
        setsBar: workout.setsBar,
        repsBar: workout.repsBar,
        kgOhp: workout.kgOhp,
        setsOhp: workout.setsOhp,
        repsOhp: workout.repsOhp,
        kgDl: workout.kgDl,
        setsDl: workout.setsDl,
        repsDl: workout.repsDl,
        }
        axios.post('http://localhost:8080/workouts/add', formData)
        .then(response => {
        if (response.status === 200) {
        setWorkout({
                date: new Date(), 
                kgS:'',setsS:'',repsS:'',           //squats
                kgB:'',setsB:'',repsB:'',           //bench
                kgBar:'',setsBar:'',repsBar:'',     //barbell row
                kgOhp:'',setsOhp:'',repsOhp:'',           //Overhead press
                kgDl:'',setsDl:'',repsDl:'',     //Deadlift
         });
        setMessage('Done!');

        } else {
        setMessage('Adding new workout failed.');
        }
        })
        }

    const change = (e) => {
        setWorkout({
            ...workout, [e.target.name]: e.target.value
        });
        setMessage('');
        };

    const changeDate = (date) => {
        setWorkout({
              ...workout,
              date: date
             });
        
            setMessage('');
          };

  return (
      <div style={{textAlign: 'center', padding: 40, margin: 'auto'}}>
        <form>
        <img src={ deadlift } style={ {height: 380, width: 255}} />
        <h3>Workout 1</h3><br/>
        <br/>
        <label htmlFor='date'>Date: </label>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ fiLocale }>
        <KeyboardDatePicker
          disableToolbar
          format="dd/MM/yyyy"
          margin="normal"
          cancelLabel='Cancel'
          name='date'
          value={workout.date}
          onChange={(e) => changeDate(e)}
        />
        </MuiPickersUtilsProvider>
        <br/>
        <h3>Squat:</h3>
        <FormGroup row style={{justifyContent: 'center', alignItems: "center", margin: '30'}}>
            <label style={{width: '4em', padding: '15'}} htmlFor='kgS'>Kg: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} name='kgS' value={ workout.kgS} onChange={ (e) => change(e) } /><br />
            <label style={{width: '4em', padding: '15'}} htmlFor='setsS'>Sets: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='setsS' value={ workout.setsS } onChange={ (e) => change(e) } /><br />
            <label style={{width: '4em', padding: '15'}} htmlFor='repsS'>Reps: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='repsS' value={ workout.repsS } onChange={ (e) => change(e) } /><br />
        <br />
        </FormGroup>

        <h3>Benchpress:</h3>
        <FormGroup row style={{justifyContent: 'center', alignItems: "center", padding: '30'}}>
            <label style={{width: '4em', padding: '15'}} htmlFor='kgB'>Kg: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='kgB' value={ workout.kgB} onChange={ (e) => change(e) } /><br />
            <label style={{width: '4em', padding: '15'}} htmlFor='setsB'>Sets: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='setsB' value={ workout.setsB } onChange={ (e) => change(e) } /><br />
            <label style={{width: '4em', padding: '15'}} htmlFor='repsB'>Reps: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='repsB' value={ workout.repsB } onChange={ (e) => change(e) } /><br />
        <br />
        </FormGroup>

        <h3>Barbell row:</h3>
        <FormGroup row style={{justifyContent: 'center', alignItems: "center", padding: '30'}}>
            <label style={{width: '4em', padding: '15'}}  htmlFor='kgBar'>Kg: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='kgBar' value={ workout.kgBar} onChange={ (e) => change(e) } /><br />
            <label style={{width: '4em', padding: '15'}} htmlFor='setsBar'>Sets: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='setsBar' value={ workout.setsBar } onChange={ (e) => change(e) } /><br />
            <label style={{width: '4em', padding: '15'}} htmlFor='repsBar'>Reps: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='repsBar' value={ workout.repsBar } onChange={ (e) => change(e) } /><br />    
        </FormGroup>

        <h3>Overhead Press:</h3>
        
        <FormGroup row style={{justifyContent: 'center', alignItems: "center", padding: '30'}}>
            <label style={{width: '4em', padding: '15'}} htmlFor='nimi'>Kg: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='kgOhp' value={ workout.kgOhp} onChange={ (e) => change(e) } /><br />
            <label style={{width: '4em', padding: '15'}} htmlFor='email'>Sets: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='setsOhp' value={ workout.setsOhp } onChange={ (e) => change(e) } /><br />
            <label style={{width: '4em', padding: '15'}} htmlFor='email'>Reps: </label>
            <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='repsOhp' value={ workout.repsOhp } onChange={ (e) => change(e) } /><br />
        <br />
        </FormGroup>  

        <h3>Deadlift:</h3> 
        <FormGroup row style={{justifyContent: 'center', alignItems: "center", padding: '30'}}>
        <label style={{width: '4em', padding: '15'}} htmlFor='nimi'>Kg: </label>
        <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='kgDl' value={ workout.kgDl} onChange={ (e) => change(e) } /><br />
        <label style={{width: '4em', padding: '15'}} htmlFor='email'>Sets: </label>
        <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='setsDl' value={ workout.setsDl } onChange={ (e) => change(e) } /><br />
        <label style={{width: '4em', padding: '15'}} htmlFor='email'>Reps: </label>
        <input style={{height: '2em', width: '4em', padding: '15', border: '2px solid', borderColor: '#00c853', borderRadius: '6px'}} type='text' name='repsDl' value={ workout.repsDl } onChange={ (e) => change(e) } /><br />
        </FormGroup>
        <input style={{fontSize: '20px',font:'inherit', margin: '20px', border: '1px solid', borderRadius: '6px', backgroundColor:'#00c853'}}
         type='submit' value='Save' onClick={ (e) => addWorkout(e) } />
        </form>
        <p>{ message }</p>
    </div>
  );
}

export default New_workout;