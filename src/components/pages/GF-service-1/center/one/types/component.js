import React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Types = ({ listTypes = [], types, setTypes }) => {
	const handleChange = (e) => {
		if (types.includes(e)) {
			setTypes((t) => t.filter((a) => a !== e));
		} else setTypes((t) => [...t, e]);
	};
	return (
		<div
			style={{
				padding: '0.8rem',
				border: 'double',
				borderRadius: '25px',
				borderColor: '#65b2c7',
			}}
		>
			<FormLabel component="h3">Type of cultural facilities</FormLabel>
			<FormGroup>
				{listTypes.map(({ value, label }) => (
					<FormControlLabel
						key={`type-${value}`}
						control={
							<Checkbox
								checked={types.includes(value)}
								onChange={() => handleChange(value)}
								name={`type-${value}`}
							/>
						}
						label={label}
					/>
				))}
			</FormGroup>
		</div>
	);
};

export default Types;
