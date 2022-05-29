import React from 'react';
import Title from 'components/common/title';
import Grid from '@mui/material/Grid';
import DateTime from './date-time';
import Stack from '@mui/material/Stack';
import Events from './events/component';
import {
	GET_CULTURAL_FACILITIES,
	GET_ITALIAN_ED_FACILITIES,
	FEDERATE_QUERY_ON_SCHOOLS,
	GET_POP_FROM_MUNICIPALITY,
} from 'api/constants';
import Table from 'components/pages/table-data/table-data';
//import Paper from 'components/common/paper';
import Paper from '@mui/material/Paper';

const Two = ({
	date,
	setDate,
	time,
	setTime,
	lau,
	setLau,
	country,
	checkedItalianSchools,
	checkedItalianFacilities,
	lauCode,
}) => {
	if (
		country === 'IT' &&
		checkedItalianFacilities === 'true' &&
		checkedItalianSchools === 'false'
	) {
		return (
			<>
				<Stack item xs={3}>
					{/* CENSIMENTO */}
					<div
						style={{
							height: '50%',
							width: '95%',
							border: 'ridge',
							paddingRight: '0.6rem',
							padding: '0.8rem',
						}}
					>
						<Title label="Data about the resident population of the selected Municipality" />
						<Paper>
							<Table
								endpoint={GET_POP_FROM_MUNICIPALITY}
								municipality={lau}
								//setMun={setLau}
							/>
						</Paper>
					</div>

					{/* FACILITIES */}
					<div
						style={{
							height: '50%',
							width: '95%',
							border: 'ridge',
							paddingRight: '0.6rem',
							padding: '1rem',
						}}
					>
						<Title label="Italian cultural facilities in the selected Municipality" />
						<Paper>
							<Table endpoint={GET_CULTURAL_FACILITIES} municipality={lau} />
						</Paper>
				
					
						<Title label="Select a date and get all the Events in the Italian cultural facilities" />
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
</div>
				</Stack>
			</>
		);
	}
	if (
		country === 'IT' &&
		checkedItalianSchools === 'true' &&
		checkedItalianFacilities === 'false'
	) {
		return (
			<>
				<Stack item xs={3}>
					{/* CENSIMENTO */}
					<div
						style={{
							height: '50%',
							width: '95%',
							border: 'ridge',
							paddingRight: '0.6rem',
							padding: '0.8rem',
						}}
					>
						<Title label="Data about the resident population of the selected Municipality" />
						<Paper>
							<Table
								endpoint={GET_POP_FROM_MUNICIPALITY}
								municipality={lau}
								//setMun={setLau}
							/>
						</Paper>
					</div>

					{/* FACILITIES */}
					<div
						style={{
							height: '50%',
							width: '95%',
							border: 'ridge',
							paddingRight: '0.6rem',
							padding: '0.8rem',
						}}
					>
						<Title label="Italian Schools in the selected Municipality" />
						<Paper>
							<Table
								endpoint={FEDERATE_QUERY_ON_SCHOOLS}
								lau={lauCode}
								municipality={lau}
							/>
						</Paper>
					</div>
				</Stack>
			</>
		);
	}

	if (
		country === 'IT' &&
		checkedItalianSchools === 'true' &&
		checkedItalianFacilities === 'true'
	) {
		return (
			<>
				<Stack item xs={3}>
					{/* CENSIMENTO */}
					<div
						style={{
							height: '50%',
							width: '95%',
							border: 'ridge',
							paddingRight: '0.6rem',
							padding: '0.8rem',
						}}
					>
						<Title label="Data about the resident population of the selected Municipality" />
						<Paper>
							<Table
								endpoint={GET_POP_FROM_MUNICIPALITY}
								municipality={lau}
								//setMun={setLau}
							/>
						</Paper>
					</div>

					{/* FACILITIES */}
					<div
						style={{
							height: '50%',
							width: '95%',
							border: 'ridge',
							paddingRight: '0.6rem',
							padding: '0.8rem',
						}}
					>
						<Title label="Italian Schools in the selected Municipality" />
						<Paper>
							{/* <Table
						endpoint={GET_ITALIAN_ED_FACILITIES}
						municipality={lau}
					/> */}
							<Table
								endpoint={FEDERATE_QUERY_ON_SCHOOLS}
								lau={lauCode}
								municipality={lau}
							/>
						</Paper>
					</div>

					<div
						style={{
							height: '50%',
							width: '95%',
							border: 'ridge',
							paddingRight: '0.6rem',
							padding: '0.8rem',
						}}
					>
						<Title label="Italian cultural facilities in the selected Municipality" />
						<Paper>
							<Table endpoint={GET_CULTURAL_FACILITIES} municipality={lau} />
						</Paper>
					
						<Title label="Select a date and get all the Events in the Italian cultural facilities" />
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
					</div>
				</Stack>
			</>
		);
	} else {
		return (
			<>
				<Stack item xs={3}>
					<div
						style={{
							height: '50%',
							width: '95%',
							border: 'ridge',
							paddingRight: '0.6rem',
							padding: '0.8rem',
						}}
					>
						<Title label="Data about the resident population of the selected Municipality" />
						<Paper>
							<Table
								endpoint={GET_POP_FROM_MUNICIPALITY}
								municipality={lau}
								//setMun={setLau}
							/>
						</Paper>
					</div>
				</Stack>
			</>
		);
	}
};

export default Two;
