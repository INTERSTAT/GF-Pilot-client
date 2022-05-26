import React from 'react';
import Typography from '@mui/material/Typography';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ date, setDate }) => {
	
	const handleChange = (obj) => {
		setDate(obj);
	};


return (
	<div style={{ marginBottom: '0.5em', paddingTop: '0.8em' }}>
		<Typography component="h2">Enter the day of interest</Typography>
		<DatePicker selected={date} onChange={handleChange} />
	</div>
);
};

export default Calendar;
