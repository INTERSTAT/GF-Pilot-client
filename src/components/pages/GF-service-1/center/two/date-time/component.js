import React from 'react';
import Calendar from './calendar';
import Time from './time';

const DateTime = ({ date, setDate, time, setTime }) => (
	<>
		<Calendar date={date} setDate={setDate} />
		{/* <Time time={time} setTime={setTime} /> */}
	</>
);

export default DateTime;
