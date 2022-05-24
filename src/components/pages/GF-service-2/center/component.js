import React from 'react';
//import Paper from 'components/common/paper';
import Paper from 'components/common/paper';
import Grid from '@mui/material/Grid';
import Title from 'components/common/title/component';
import Stack from '@mui/material/Stack';
import Map from '../left/map';
import Plots from './plots';

const Center = () => (
	<>
		<div
			style={{
				marginBottom: '1em',
				fontWeight: 'bold',
				height: '100%',
				width: '100%',
				border: 'double',
				borderColor: '#65b2c7',
				borderRadius: '25px',
			}}
		>
			<Stack spacing={1} style={{ height: '100%', width: '100%' }}>
				<Plots />
			</Stack>
		</div>
	</>
);

export default Center;
