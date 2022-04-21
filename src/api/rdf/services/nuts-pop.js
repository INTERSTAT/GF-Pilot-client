import { usePost, GF } from '../utils';
import { nutsPop } from '../queries';
import { nutsPop2 } from '../queries';
import { GET_NUTS_POP } from 'api/constants';
import { GET_NUTS_POP2 } from 'api/constants';

export const useFetch = (constant) => {
	switch (constant) {
		case GET_NUTS_POP:
			return usePost(GF)(nutsPop);
		case GET_NUTS_POP2:
			return usePost(GF)(nutsPop2);
		default:
			return null;
	}
};
