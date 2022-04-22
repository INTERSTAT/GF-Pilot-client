import { usePost, GF } from '../utils';
import { culturalTypes, getFacilities } from '../queries';
import { extractValues } from '../utils/transformers';
import * as C from 'api/constants';

export const useFetch = (constant, options) => {
	switch (constant) {
		case C.GET_CULTURAL_TYPES:
			return extractValues(usePost(GF)(culturalTypes));
		case C.GET_FACILITIES:
			return extractValues(usePost(GF)(getFacilities(options)));
		default:
			return null;
	}
};
