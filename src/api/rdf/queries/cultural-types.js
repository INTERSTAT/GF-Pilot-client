export const culturalTypes = ({ country }) => `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT ?uri ?label
WHERE { 
	?uri skos:inScheme ?o .
    ?uri skos:prefLabel ?label .
    FILTER(lang(?label) = lcase(str('` + country + `'))) 
}`;
 