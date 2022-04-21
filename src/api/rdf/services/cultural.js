import { usePost, GF } from '../utils';
import { culturalTypes } from '../queries';
import { extractValues } from '../utils/transformers';
import * as C from 'api/constants';

export const useFetch = (constant) => {
	switch (constant) {
		case C.GET_CULTURAL_TYPES:
			return extractValues(usePost(GF)(culturalTypes));
		default:
			return null;
	}
};
