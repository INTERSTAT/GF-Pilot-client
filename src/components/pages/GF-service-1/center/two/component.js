import React from 'react';
import Title from 'components/common/title';
import Grid from '@mui/material/Grid';
import DateTime from './date-time';
import Events from './events/component';

const Two = ({ date, setDate, time, setTime, lau, country }) => {
	if (country === 'IT') {
		return (
			<>
				<div
					style={{
						height: '100%',
						width: '100%',
						paddingTop: '4rem',
					}}
				>
					<Title label="Select a date and get all the Events in the Italian cultural facilities" />
				</div>

				<Grid container>
					<Grid item xs={2}>
						<DateTime
							date={date}
							setDate={setDate}
							time={time}
							setTime={setTime}
						/>
					</Grid>
					<Grid item xs={10}>
						<Events lau={lau} date={JSON.stringify(date)} />
					</Grid>
				</Grid>
			</>
		);
	} else {
		return <>
				<div
					style={{
						height: '50%',
						width: '100%',
						paddingTop: '4rem',
					}}
				>
		
				</div>

		</>;
	}
};

export default Two;
