import React from 'react';

const Localization = () => (
	<div
		style={{
			paddingLeft: '0.8rem',
			border: 'double',
			borderRadius: '25px',
			borderColor: '#65b2c7',
			marginBottom: '1em',
		}}
	>
		<p>
			<label
				style={{
					color: 'black',
					fontWeight: 'bold',
					fontSize: 'medium',
				}}
			>
				Enter you Location
			</label>
			<input
				placeholder="Address, City"
				style={{ height: '30px', width: '80%' }}
			/>
		</p>
	</div>
);

export default Localization;
