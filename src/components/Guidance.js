import React from 'react';

function Guidance () {
	return (
	<div style={{textAlign: 'center', padding: 40, margin: 'auto'}}>
        <br/>
		<h2>How to use Workout tracker?</h2>
        <p>This is a quick guide for you on how to use the Workout tracker. It's super simple! 
        </p>
        <p>
            To start a new workout navigate to New workout and select Start workout. Then add your weights 
            and number of sets and reps in the form. Note! You should only add numbers to all of the input-fields 
            mentioned above. After you have saved your workout it moves to database and you can later on check 
            your previous workouts from the History section. Or if you prefer more graphical form of presentation 
            select the Charts tab and chek how things are going.
        </p>
        <p>Enjoy your workout!</p>
        <p>Ps. This app's movements are from 5x5 method and it might be useful for that. 
            For more information about the 5x5 method visit <a style={ {color: '#00c853', visited:'#b9f6ca'} } href='https://stronglifts.com/5x5/'>Stronglifts 5x5-page</a>.</p>
	</div>
	);
}

export default Guidance;
