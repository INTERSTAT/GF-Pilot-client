import React from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import Title from 'components/common/title';
import Localization from './localization';
import Types from './types';
import Map from './map';

const One = ({
	localization,
	setLocalization,
	types,
	setTypes,
	country,
	setCountry,
	nuts,
	setNuts,
	lau,
	setLau,
	lauCode,
	setLauCode,
	checkedItalianSchools,
	setCheckedItalianSchools,
	checkedItalianFacilities,
	setCheckedItalianFacilities
}) => {
	return (
		<>
			<Grid item xs={4}>
				<Title label="Geo-locate the Places near you" />
				<Localization
					localization={localization}
					setLocalization={setLocalization}
					country={country}
					setCountry={setCountry}
					lau={lau}
					setLau={setLau}
					nuts={nuts}
					setNuts={setNuts}
					lauCode={lauCode}
					setLauCode={setLauCode}
				/>
				<Types
					types={types}
					setTypes={setTypes}
					country={country}
					checkedItalianSchools={checkedItalianSchools}
					setCheckedItalianSchools={setCheckedItalianSchools}
					checkedItalianFacilities={checkedItalianFacilities}
					setCheckedItalianFacilities={setCheckedItalianFacilities}
				/>
			</Grid>
			{/* <label>LAU CODE: {lauCode}</label>  */}
			<Grid item xs={8}>
				<Map types={types} lauCode={lauCode} country={country} />
			</Grid>
		</>
	);
};

export default One;
