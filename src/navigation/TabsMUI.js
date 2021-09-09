import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'; 
import HistoryIcon from '@material-ui/icons/History';
import HelpIcon from '@material-ui/icons/Help';
import TimelineIcon from '@material-ui/icons/Timeline';
import { Link } from 'react-router-dom';

function TabsMUI () {

		const [value, setValue] = useState(0);
	  
		const handleChange = (e, val) => {
		  setValue(val);
		}
	  
		return (
		  <div>
			<AppBar position='static'>
			  <Tabs value={ value } onChange={ handleChange } variant='fullWidth' centered>
				<Tab component={ Link } to ='/' label='New workout' icon={ <FitnessCenterIcon /> } />
				<Tab component={ Link } to ='/history' label='History' icon={ <HistoryIcon /> }/>
				<Tab component={ Link } to ='/charts' label='Charts' icon={ <TimelineIcon /> }/>
				<Tab component={ Link } to ='/info' label='Info' icon={ <HelpIcon /> }/>
			  </Tabs>
			</AppBar>
		  </div>
		);
	  }

export default TabsMUI;