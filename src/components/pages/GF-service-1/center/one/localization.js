import React from 'react';
import TextField from '@mui/material/TextField';

const Localization = ({ localization, setLocalization }) => (
	<div
		style={{
			padding: '0.8rem',
			border: 'double',
			borderRadius: '25px',
			borderColor: '#65b2c7',
			marginBottom: '1em',
		}}
	>
		<TextField
			id="adress"
			label="Enter your Location"
			variant="outlined"
			onChange={(e) => setLocalization(e.target.value)}
			InputLabelProps={{
				shrink: true,
			}}
		/>
	</div>
);

export default Localization;
