import React, { useEffect } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Types = ({ listTypes = [], types, setTypes, country, checkedItalianSchools, setCheckedItalianSchools, checkedItalianFacilities, setCheckedItalianFacilities   }) => {
	useEffect(() => {
		setTypes(
			listTypes.reduce(
				(acc, { uri }) => [...acc, uri],

				[]
			)
		);
	}, []);

	const handleChange = (e) => {
		if (types.includes(e)) {
			setTypes((t) => t.filter((a) => a !== e));
		} else setTypes((t) => [...t, e]);

		if((!types.includes(e)) && e === "http://id.insee.fr/interstat/gf/FacilityType/C"){
			console.log("checked Italian FORMAZIONE SCOLASTICA");
			setCheckedItalianSchools('true');
			console.log(checkedItalianSchools);
		} else if((types.includes(e)) && e === "http://id.insee.fr/interstat/gf/FacilityType/C") {
			setCheckedItalianSchools('false');
			console.log(checkedItalianSchools);
		}
		if((!types.includes(e)) && e === "http://id.insee.fr/interstat/gf/FacilityType/F3"){
			console.log("checked Italian STRUTTURE CULTURALI");
			setCheckedItalianFacilities('true');
			console.log(checkedItalianFacilities);
		} else if((types.includes(e)) && e === "http://id.insee.fr/interstat/gf/FacilityType/F3") {
			setCheckedItalianFacilities('false');
			console.log(checkedItalianFacilities);
		}
	};

	return (
		<div
			style={{
				padding: '0.8rem',
				border: 'double',
				borderRadius: '25px',
				borderColor: '#65b2c7',
			}}
		>
			<FormLabel component="h3">Type of cultural facilities</FormLabel>
			<FormGroup>
				{listTypes.map(({ uri, label }) => (
					<FormControlLabel
						key={`type-${uri}`}
						control={
							<Checkbox
								checked={types.includes(uri)}
								onChange={() => handleChange(uri)}
								name={`type-${uri}`}
							/>
						}
						label={label}
					/>
				))}
			</FormGroup>
		</div>
	);
};

export default Types;
