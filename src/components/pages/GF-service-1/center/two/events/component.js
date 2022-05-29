import React from 'react';
import Table from 'components/pages/table-data/table-data';
import { GET_EVENTS } from 'api/constants';
import Title from 'components/common/title';
import Paper from '@mui/material/Paper';
//import Paper from 'components/common/paper';

const Events = ({ lau, date }) => {
	return ( 
		<div
			style={{
				height: '100%',
				width: '98%',
				paddingLeft: '0.8rem',
				//border: 'double',
				//borderRadius: '25px',
				//borderColor: '#65b2c7',
				//paddingRight: '0.6rem',
				//paddingTop: '0.6rem',
			}}
		>
			<Title label="Events" />
			<Paper>
			<Table endpoint={GET_EVENTS} municipality={lau} date={date} />
			</Paper>
		</div>
	);
};

export default Events;
