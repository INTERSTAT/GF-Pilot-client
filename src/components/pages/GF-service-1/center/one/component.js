import React from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import Title from 'components/common/title';
import Localization from './localization';
import Types from './types';
import Map from './map';

const One = ({ localization, setLocalization, types, setTypes }) => (
	<>
		<Grid item xs={4}>
			<Title label="View Places near you" />
			<Localization
				localization={localization}
				setLocalization={setLocalization}
			/>
			<Types types={types} setTypes={setTypes} />
		</Grid>
		<Grid item xs={8}>
			<Map />
		</Grid>
	</>
);

export default One;
