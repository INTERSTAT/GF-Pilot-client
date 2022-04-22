import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import Map from './component';
import { useFetch } from 'api';
import { GET_FACILITIES } from 'api/constants';

const MapFetcher = () => {
	const { data, loading, error } = useFetch(GET_FACILITIES);
	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;
	return <Map points={data} />;
};

export default MapFetcher;
