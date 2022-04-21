import React from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import Title from 'components/common/title';
import Localization from './localization';
import Type from './type';
import Map from './map';

const One = () => (
	<>
		<Grid item xs={4}>
			<Title label="View Places near you" />
			<Localization />
			<Type />
		</Grid>
		<Grid item xs={8}>
			<Map />
		</Grid>
	</>
);

export default One;
