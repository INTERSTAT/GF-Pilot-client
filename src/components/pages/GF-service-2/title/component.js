import React from 'react';
import Accordion from 'components/common/accordion';
//import Paper from 'components/common/paper';
import Paper from '@mui/material/Paper';
import { SERVICE_1_TITLE, SERVICE_1_DESCRIPTION } from './data';

const Title = () => (
	<>
		<div
			style={{
				marginBottom: '1em',
				fontWeight: 'bold',
				height: '100%',
				width: '100%',
			}}
		>
			<Accordion 
				className="titleAcc"
				title="Analysis and evaluation of a specific area to finalize an investment"
			>
				<strong>{SERVICE_1_TITLE}</strong>
			</Accordion>
		</div>
		<Paper
			style={{
				fontSize: '16px',
				paddingTop: '1.5em',
				paddingBottom: '1.5em',
				paddingLeft: '1.5em',
				paddingRight: '1.5em',
				color: 'gray'
			}}
		>
			{SERVICE_1_DESCRIPTION}
		</Paper>
	</>
);

export default Title;
