import React from 'react';
import TextField from '@mui/material/TextField';
import { GET_COUNTRIES, GET_LAU_FROM_NUTS, NUTS } from 'api/constants';
import SelectData from 'components/pages/select-data';
import Grid from '@mui/material/Grid';

const Localization = ({
	localization,
	setLocalization,
	country,
	setCountry,
	nuts,
	setNuts,
	lau,
	setLau,
	lauCode,
	setLauCode,
}) => {
	return (
		<div
			style={{
				padding: '0.8rem',
				border: 'double',
				borderRadius: '25px',
				borderColor: '#65b2c7',
				marginBottom: '1em',
			}}
		>
			<div
				style={{
					height: '100%',
					width: '100%',
					textAlign: 'center',
					paddingBottom: '1.5rem',
				}}
			>
				<label
					style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
				>
					Select a Country to analize
				</label>

				<SelectData
					endpoint={GET_COUNTRIES}
					country={country}
					setCountry={setCountry}
				/>
			</div>

			<Grid container spacing={2}>
				<Grid item xs={6}>
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select a NUTS3 Region
					</label>

					<SelectData
						endpoint={NUTS}
						country={country}
						nuts={nuts}
						setNuts={setNuts}
					/>
				</Grid>

				<Grid item xs={6}>
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select a Municipality
					</label>

					<SelectData
						endpoint={GET_LAU_FROM_NUTS}
						lang={country}
						nuts3Code={nuts}
						lau={lau}
						setLau={setLau}
						lauCode={lauCode}
						setLauCode={setLauCode}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Localization;
