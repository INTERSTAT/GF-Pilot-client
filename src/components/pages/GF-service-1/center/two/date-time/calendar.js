import React from 'react';
import Typography from '@mui/material/Typography';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ date, setDate }) => (
	<div style={{ marginBottom: '0.5em' }}>
		<Typography component="h2">Enter the day of interest</Typography>
		<DatePicker selected={date} onChange={setDate} />
	</div>
);

export default Calendar;
