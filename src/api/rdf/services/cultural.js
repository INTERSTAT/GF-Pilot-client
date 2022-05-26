import { usePost, GF, SEP, MIBACT  } from '../utils';
import { culturalTypes, getFacilities, countries, nuts,lauByNuts, events, culturalFacilities } from '../queries';
import { extractValues } from '../utils/transformers';
import * as C from 'api/constants';

export const useFetch = (constant, options, country, lang, nuts3Code, lau, municipality, isFrench, date ) => {
	switch (constant) {
		case C.GET_CULTURAL_TYPES:
			return extractValues(usePost(GF)(culturalTypes({country: country}))); 
		case C.GET_FACILITIES:
			console.log("LAU CHE ARRIVA: " + lau);
			console.log("IS FRENCH: " + isFrench);
			return extractValues(usePost(GF)(getFacilities( options )));
		case C.GET_COUNTRIES:
			return usePost(SEP)(countries);
		case C.NUTS:
			return usePost(SEP)(nuts({countryToSelect: country})); 
		case C.GET_LAU_FROM_NUTS:
			let language = lang.toString().toLowerCase();
			return usePost(SEP)(lauByNuts({lang: language, nuts3Code: nuts3Code }));  
		case C.GET_EVENTS:
			let dataSel = date.replace("\"","");
			return usePost(MIBACT)(events({municipality: municipality, date: dataSel})); 
		case C.GET_CULTURAL_FACILITIES:
			return usePost(MIBACT)(culturalFacilities({ municipality: municipality })); 
		// case C.GET_LAU_CODE_FROM_NAME:
		// 	console.log("ARRIVO QUI")
		// 	return usePost(SEP)(lauCodeFromName({municipality: lau})); 
		default:
			return null;
	}
};
