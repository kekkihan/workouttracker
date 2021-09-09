import { Chart } from "react-google-charts";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  chart1: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: '#b9f6ca',
    marginLeft: '200px',
    marginRight: '200px',
    marginTop: 40,
    marginBottom: 40,
    display: 'block',
    align: 'center',
  }
});

function Charts(props) {
  const classes = useStyles();

  return (
    <div>
      <Chart className={classes.chart1} width={'800px'} height={'500px'} chartType="Line" chartVersion='49' loader={<div>Loader</div>}
      data  ={[
        ['Date', 'Squat', 'Benchpress', 'Barbell row', 'Overhead press', 'Deadlift',],
        ...props.workouts.map(workout =>
        [workout.date, workout.kgS, workout.kgB, workout.kgBar, workout.kgOhp, workout.kgDl],)
      ]}

options={{
  chart: {
    title: 'Long term progress',
    subtitle: 'presented in kilograms',
  },
}}
rootProps={{ 'data-testid': '3' }}
/>
      
    </div>
  )
}
export default Charts;