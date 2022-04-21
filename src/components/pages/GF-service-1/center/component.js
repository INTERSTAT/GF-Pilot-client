import React from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import Stack from '@mui/material/Stack';
import One from './one';
import Two from './two';

const Center = () => (
	<Stack spacing={0.5} style={{ height: '100%', width: '100%' }}>
		<div
			style={{
				height: '100%',
				width: '100%',
				border: 'double',
				borderRadius: '25px',
				borderColor: '#65b2c7',
				paddingLeft: '0.8rem',
				paddingRight: '0.6rem',
			}}
		>
			<Grid container spacing={4}>
				<One />
			</Grid>
			<Grid container spacing={1}>
				<Two />
			</Grid>
		</div>
	</Stack>
);

export default Center;
