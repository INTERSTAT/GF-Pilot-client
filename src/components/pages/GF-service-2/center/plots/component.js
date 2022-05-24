import React from 'react';
//import Paper from 'components/common/paper';
import Paper from 'components/common/paper';
import Grid from '@mui/material/Grid';
import Title from 'components/common/title/component';
import Stack from '@mui/material/Stack';
import Map from '../../left/map';
import MapSchools from '../map-schools';

import {
	XYPlot,
	LineSeries,
	VerticalGridLines,
	HorizontalGridLines,
	XAxis,
	YAxis,
	VerticalBarSeries,
	MarkSeries,
	Crosshair,
} from 'react-vis';

const data = [
	{ x: 0, y: 10 },
	{ x: 5, y: 5 },
	{ x: 10, y: 4 },
	{ x: 15, y: 9 },
	{ x: 20, y: 1 },
	{ x: 25, y: 7 },
	{ x: 30, y: 6 },
	{ x: 35, y: 3 },
	{ x: 40, y: 2 },
	{ x: 45, y: 3 },
	{ x: 50, y: 8 },
	{ x: 55, y: 5 },
	{ x: 60, y: 4 },
	{ x: 65, y: 9 },
	{ x: 70, y: 1 },
	{ x: 75, y: 3 },
	{ x: 80, y: 2 },
	{ x: 85, y: 1 },
	{ x: 90, y: 2 },
	{ x: 95, y: 0 },
];

const data2 = [
	{ x: 10, y: 8 },
	{ x: 20, y: 5 },
	{ x: 30, y: 4 },
	{ x: 40, y: 9 },
	{ x: 50, y: 1 },
	{ x: 60, y: 7 },
	{ x: 70, y: 6 },
	{ x: 80, y: 3 },
	{ x: 90, y: 2 },
	{ x: 100, y: 0 },
];

const Plots = () => (
	<>
		<Grid container spacing={1}>
			<Grid item xs={6}>
				<Paper>
					<div style={{ paddingLeft: '5rem', color: '#65b2c7' }}>
						<Title label="Resident population in the selected region by age" />
					</div>

					<XYPlot height={300} width={500}>
						<VerticalBarSeries data={data} />
						<XAxis title="Age Groups" colorDomain="black" />
						<YAxis title="Population" colorDomain="white" />
					</XYPlot>
				</Paper>
			</Grid>

			<Grid item xs={6}>
				<Paper>
					<div style={{ paddingLeft: '5rem', textAlign: 'center', color: '#65b2c7' }}>
						<Title label="Percentage variation of the population" />
					</div>

					<XYPlot
						height={300}
						width={500}
						colorType="category"
						colorDomain={[0, 1, 2]}
					>
						<MarkSeries data={data} color="gray" />
						<MarkSeries data={data2} />
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis />
						<YAxis title="Percentage" />
					</XYPlot>
				</Paper>
			</Grid>
		</Grid>

		<Grid container spacing={1}>
			<Grid item xs={6}>
			<Paper>
			<div style={{ paddingLeft: '5rem',textAlign: 'center', color: '#65b2c7' }}>
						<Title label="Location and Type of Schools" />
					</div>
					<MapSchools />
			</Paper>

			</Grid>
		</Grid>
	</>
);

export default Plots;
