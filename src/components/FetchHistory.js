import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import History from './History';

function FetchHistory () {
 
 const [workouts, setWorkouts] = useState([]);
 const [fault, setFault] = useState('Fetching');

 const fetchAllWorkouts = async () => {
    try { const response = await fetch('http://localhost:8080/workouts/all');
    const json = await response.json();
    setWorkouts(json);
      setFault('');
    } catch (error) {
    setWorkouts([]);
      setFault('Data fetching failed.');
    }
  }
  useEffect(() => {
  fetchAllWorkouts();
  }, []);

 if (fault.length > 0) {
   return ( <Typography>{ fault }</Typography> );
 }

 if (workouts.length > 0) {
   return ( <History workouts={ workouts } /> );
 }

 return ( <Typography>No previous workouts logged.</Typography> );
}

export default FetchHistory;
