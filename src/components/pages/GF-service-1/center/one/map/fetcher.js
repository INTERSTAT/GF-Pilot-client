import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import Map from './component';
import { useFetch } from 'api';
import { GET_FACILITIES } from 'api/constants';

const MapFetcher = ({ types, lauCode, country }) => {
	const { data, loading, error } = useFetch(GET_FACILITIES, { types } , '', '', '', lauCode, '', 'false' );
	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;
console.log("PUNTI IN MAPPA: " + JSON.stringify(data))
	return <Map points={data} country={country}  />;

};

export default MapFetcher;
