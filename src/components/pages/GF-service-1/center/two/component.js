import React from 'react';
import Title from 'components/common/title';
import Grid from '@mui/material/Grid';
import DateTime from './date-time';
import Events from './events/component';

const Two = ({ date, setDate, time, setTime }) => (
	<>
		<Title label="Select a place near you on the map and get the scheduled events" />
		<Grid container>
			<Grid item xs={4}>
				<DateTime date={date} setDate={setDate} time={time} setTime={setTime} />
			</Grid>
			<Grid item xs={8}>
				<Events />
			</Grid>
		</Grid>
	</>
);

export default Two;
