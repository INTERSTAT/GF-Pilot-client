import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import Stack from '@mui/material/Stack';
import One from './one';
import Two from './two';
import Table from 'components/pages/table-data/table-data';
import { GET_EVENTS } from 'api/constants';

const Center = () => {
	const [localization, setLocalization] = useState('');
	const [types, setTypes] = useState([]);
	const [date, setDate] = useState(null);
	const [time, setTime] = useState(null);

	const [country, setCountry] = useState('IT');
	const [nuts, setNuts] = useState('');
	const [lau, setLau] = useState('');
	const [lauCode, setLauCode] = useState('');
	const [checkedItalianSchools, setCheckedItalianSchools] = useState('');
	const [checkedItalianFacilities, setCheckedItalianFacilities] = useState('');

	return (
		<Stack spacing={0.5} style={{ height: '100%', width: '100%' }}>
			<div
				style={{
					height: '100%',
					width: '97%',
					border: 'double',
					borderRadius: '25px',
					borderColor: '#65b2c7',
					padding: '0.6rem',
				}}
			>
				<Grid container spacing={4}>
					<One
						localization={localization}
						setLocalization={setLocalization}
						types={types}
						setTypes={setTypes}
						country={country} 
						setCountry={setCountry} 
						nuts={nuts} 
						setNuts={setNuts} 
						lau={lau} 
						setLau={setLau} 
						lauCode={lauCode} 
						setLauCode={setLauCode} 
						checkedItalianSchools={checkedItalianSchools}
						setCheckedItalianSchools={setCheckedItalianSchools}
						checkedItalianFacilities={checkedItalianFacilities}
						setCheckedItalianFacilities={setCheckedItalianFacilities}
					/>
				</Grid>
				{/* <label>checkedItalianSchools:{checkedItalianSchools}</label>
				<label>checkedItalianFacilities:{checkedItalianFacilities}</label> */}
				<Stack container spacing={1} style={{paddingTop: '3rem'}}>
					<Two date={date} setDate={setDate} time={time} setTime={setTime} lau={lau} setLau={setLau} country={country} checkedItalianSchools={checkedItalianSchools}
					   checkedItalianFacilities={checkedItalianFacilities} lauCode={lauCode}  />

				</Stack>
			</div>
		</Stack>
	);
};

export default Center;
