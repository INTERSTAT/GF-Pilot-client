import React from 'react';
import Typography from '@mui/material/Typography';
import DatePicker from 'react-datepicker';

const Time = ({ time, setTime }) => (
	<div style={{ marginBottom: '0.5em' }}>
		<Typography component="h2">Enter the time of interest</Typography>
		<DatePicker
			selected={time}
			onChange={setTime}
			showTimeSelect
			showTimeSelectOnly
			timeIntervals={30}
			timeCaption="Time"
			dateFormat="h:mm aa"
		/>
	</div>
);

export default Time;
