import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import benchpress from '../images/benchpress.jpg';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    basicStyle: {
    	backgroundColor:  '#424242',
		textAlign: 'center',
		paddingTop: 40,
		paddingBottom: 40,
		margin: 'auto',
    },
    start: {
		backgroundColor: '#00c853',
		'&:hover': {background: '#b9f6ca'},
		borderRadius:5,
		fontSize: 15,
		color:'#212121',
		border: '2px solid',
		borderColor: '#424242',
    }
	})

function Mainpage () {
	const classes = useStyles();

		return (
			<div>
				<Paper className={ classes.basicStyle }>
				<IconButton component={ Link } to ='/New_workout'
					style={{margin: 'auto'}} className={ classes.start }><PersonIcon/>Start workout</IconButton>
				  <h3>Let's go!</h3>
                <img style={ {height: 200, width: 300} } src ={ benchpress }/>
				</Paper>
		</div>
		);
	  }

export default Mainpage;