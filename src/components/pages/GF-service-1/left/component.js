import React from 'react';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
//import Paper from '@mui/material/Paper';

import { SERVICE_1_TITLE, SERVICE_1_DESCRIPTION } from '../data';

const Left = () => (
	<>
		<div style={{ marginBottom: '1em', fontWeight: 'bold' }}>
			<Accordion
				className="titleAcc"
				title="A citizen wondering the nearest cultural facilities and events"
			>
				<strong>{SERVICE_1_TITLE}</strong>
			</Accordion>
		</div>
		<Paper >{SERVICE_1_DESCRIPTION}</Paper>
	</>
);

export default Left;
