import React from 'react';
import Typography from '@mui/material/Typography';

const Title = ({ label }) => (
	<div style={{ color: '#508391', marginTop: '0.8em', marginBottom: '0.8em' }}>
		<Typography component="h1">{label}</Typography>
	</div>
);

export default Title;
