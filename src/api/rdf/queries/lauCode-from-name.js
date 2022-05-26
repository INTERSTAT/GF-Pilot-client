export const lauCodeFromName = ({ municipality }) => `
PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT DISTINCT ?label WHERE { 
    ?obs qb:dataSet isc:ds1 ; 
         isc:dim-lau ?lauURI . 
    ?lauURI skos:prefLabel ?municipality .
    ?lauURI skos:notation ?label .
    FILTER (str(?municipality) = '` + municipality +`').
} 
`;