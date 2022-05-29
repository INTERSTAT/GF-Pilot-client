import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';
import { sparqlDataToTable } from 'utils';
import Select from 'react-select';

const SelectData = ({
	endpoint,
	country,
	setCountry,
	nuts3Code,
	lang,
	lau,
	setLau,
	lauCode,
	setLauCode,
	nuts,
	setNuts,
	year,
	setYear,
}) => {
	// const handleChange = (obj) => {
	// 	console.log(obj.label);
	// };

	const handleChange = (obj) => {
		console.log('obj: ' + JSON.stringify(obj));
		if (lang === 'IT' || lang === 'FR') {
			console.log(obj.label);
			setLau(obj.label);
			setLauCode(obj.code);
			console.log(JSON.stringify("LAU CODE:" + lauCode));
		}
		if (endpoint === 'GET_COUNTRIES') {
			setCountry(obj.label);
			console.log(JSON.stringify(country));
		}
		if (endpoint === 'NUTS') {
			// setNuts(obj.label);
			// console.log(JSON.stringify(nuts));

			setNuts(obj.code);
			console.log(JSON.stringify(nuts));
		}
	};

	const { data, error, loading } = useFetch(
		endpoint,
		'',
		country,
		lang,
		nuts3Code
	);

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	const sparqlData = sparqlDataToTable(data);
	const { columns, data: tableData } = sparqlData;

	return (
		<Select
			style={{
				height: '100%',
				width: '90%',
			}}
			options={tableData}
			onChange={handleChange}
			getOptionValue={(option) => option.label}
			//isLoading={Loader}
		/>
	);
};

export default SelectData;
