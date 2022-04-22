import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import Types from './component';
import { useFetch } from 'api';
import { GET_CULTURAL_TYPES } from 'api/constants';

const TypesFetcher = ({ types, setTypes }) => {
	const { data, loading, error } = useFetch(GET_CULTURAL_TYPES);
	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;
	return <Types types={types} setTypes={setTypes} listTypes={data} />;
};

export default TypesFetcher;