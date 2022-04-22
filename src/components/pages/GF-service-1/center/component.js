import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import Stack from '@mui/material/Stack';
import One from './one';
import Two from './two';

const Center = () => {
	const [localization, setLocalization] = useState('');
	const [types, setTypes] = useState([]);
	const [date, setDate] = useState(null);
	const [time, setTime] = useState(null);

	return (
		<Stack spacing={0.5} style={{ height: '100%', width: '100%' }}>
			<div
				style={{
					height: '100%',
					width: '100%',
					border: 'double',
					borderRadius: '25px',
					borderColor: '#65b2c7',
					padding: '0.8rem',
				}}
			>
				<Grid container spacing={4}>
					<One
						localization={localization}
						setLocalization={setLocalization}
						types={types}
						setTypes={setTypes}
					/>
				</Grid>
				<Grid container spacing={1}>
					<Two date={date} setDate={setDate} time={time} setTime={setTime} />
				</Grid>
			</div>
		</Stack>
	);
};

export default Center;
