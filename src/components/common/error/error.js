import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Error = ({ message }) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity="error">{message}</Alert>
		</Stack>
	);
};

export default Error;
