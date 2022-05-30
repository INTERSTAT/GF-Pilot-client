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
		<Typography component="h1" style={{fontSize: '1.1em' }}>Enter the day of interest </Typography>
		<Typography component="h5" style={{fontSize: '0.8em'  }}>Insert the Start Date of the event,from which to view the events up to the most recent date</Typography>
		<DatePicker selected={date} onChange={handleChange} dateFormat={"dd/MM/yyyy"} />
	</div>
);
};

export default Calendar;
