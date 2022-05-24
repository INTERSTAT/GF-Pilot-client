import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Title from './title';
import Left from './left/component';
import Center from './center/component';

const Service2 = () => (
	<Grid container spacing={2}>
		<Stack spacing={1} style={{ height: '100%', width: '100%' }}>
			<Title />
		</Stack>

		<Grid item xs={4}>
			<Left />
		</Grid>

        <Grid item xs={8}>
			<Center />
		</Grid>
	</Grid>
);

export default Service2;
