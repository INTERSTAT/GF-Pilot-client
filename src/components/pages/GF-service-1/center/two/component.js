import React from 'react';
import Title from 'components/common/title';
import Grid from '@mui/material/Grid';
import DateTime from './date-time';
import Events from './events/component';
import { GET_CULTURAL_FACILITIES } from 'api/constants';
import Table from 'components/pages/table-data/table-data';

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
					<Title label="Italian cultural facilities of the selected Municipality" />
				</div>

				<div
					style={{
						height: '100%',
						width: '100%',
						paddingLeft: '0.8rem',
						//border: 'double',
						//borderRadius: '25px',
						//borderColor: '#65b2c7',
						//paddingRight: '0.6rem',
						//paddingTop: '0.6rem',
					}}
				>
					<Table
						endpoint={GET_CULTURAL_FACILITIES}
						municipality={lau}
					/>
				</div>

				<div
					style={{
						height: '100%',
						width: '100%',
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
		return (
			<>
				<div
					style={{
						height: '50%',
						width: '100%',
						paddingTop: '4rem',
					}}
				></div>
			</>
		);
	}
};

export default Two;
