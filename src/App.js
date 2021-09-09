import React from 'react';
import TabsMUI from './navigation/TabsMUI';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Guidance from './components/Guidance';
import FetchHistory from './components/FetchHistory';
import Mainpage from './components/Mainpage';
import New_workout from './components/New_workout';
import FetchProgress from './components/FetchProgress';

const theme = createMuiTheme({
	palette: {
	  primary: {main: '#212121', contrastText: '#00c853'},
	  secondary: {main: '#00c853', contrastText: '#424242'},
	  text: {primary: '#b9f6ca'},
	  action: {hover: '#424242', active:'#00c853', selected: '#00c853'},
	  background: {default: '#424242'},
	 },
	  typography: {fontFamily: ['Kiwi Maru']}
	});

function App () {
	return (
		<BrowserRouter>
			<MuiThemeProvider theme={ theme }>
			<div>
			<CssBaseline />
			<h1 style={headlineStyle}>Workout Tracker</h1>
			<TabsMUI/>
			<Switch>
            	<Route exact path='/' component={ Mainpage } />
				<Route exact path='/New_workout' component={ New_workout }/>
            	<Route exact path='/history' component={ FetchHistory } />
				<Route exact path='/charts' component={ FetchProgress } />
            	<Route exact path='/info' component={ Guidance }/>
          	</Switch>
			</div>
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;

const headlineStyle = {
	textAlign: 'center',
	padding: 20,
	margin: 'auto',
	fontSize: 50,
  };
