import React from 'react';
import Grid from '@mui/material/Grid';
import Left from './left';
import Center from './center/component';
import './service1.css';

const Service1 = () => (
	<Grid container spacing={2}>
		<Grid item xs={2}>
			<Left />
		</Grid>
		<Grid item xs={10}>
			<Center />
		</Grid>
	</Grid>
);

export default Service1;
