import { usePost, GF, SEP, MIBACT  } from '../utils';
import { culturalTypes, getFacilities, countries, nuts,lauByNuts, events, culturalFacilities, itEducationalFacilities, schoolsFederateQuery, populationFromMunicipality } from '../queries';
import { extractValues } from '../utils/transformers';
import * as C from 'api/constants';

export const useFetch = (constant, options, country, lang, nuts3Code, lau, municipality, isFrench, date ) => {
	switch (constant) {
		case C.GET_CULTURAL_TYPES:
			return extractValues(usePost(GF)(culturalTypes({country: country}))); 
		case C.GET_FACILITIES:
			console.log("LAU CHE ARRIVA: " + lau);
			return extractValues(usePost(GF)(getFacilities( options )));
		case C.GET_COUNTRIES:
			return usePost(SEP)(countries);
		case C.NUTS:
			return usePost(SEP)(nuts({countryToSelect: country})); 
		case C.GET_LAU_FROM_NUTS:
			let language = lang.toString().toLowerCase();
			return usePost(SEP)(lauByNuts({lang: language, nuts3Code: nuts3Code }));  
		case C.GET_ITALIAN_ED_FACILITIES:
			console.log("MUNICIPALITY: " + municipality)
			let munic = municipality.toString().toUpperCase();
			return usePost(SEP)(itEducationalFacilities({ municipality: munic }));  
		case C.GET_EVENTS:
			let dataSel = date.replace("\"","");
			return usePost(MIBACT)(events({municipality: municipality, date: dataSel})); 
		case C.GET_CULTURAL_FACILITIES:
			return usePost(MIBACT)(culturalFacilities({ municipality: municipality })); 
		case C.FEDERATE_QUERY_ON_SCHOOLS:
			console.log("LAU code per scuole: " + lau);
			let municip = municipality.toString().toUpperCase();
			console.log("LAU NAME per scuole: " + municip);
			return usePost(GF)(schoolsFederateQuery({ municipality: municip, lauCode: lau  }));  
		case C.GET_POP_FROM_MUNICIPALITY:
			console.log("MUNIC PER CENSIMENTO: " + municipality)
			return usePost(SEP)(populationFromMunicipality({ mun: municipality }));
		// case C.GET_LAU_CODE_FROM_NAME:
		// 	console.log("ARRIVO QUI")
		// 	return usePost(SEP)(lauCodeFromName({municipality: lau})); 
		default:
			return null;
	}
};
