export const culturalTypes = `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT ?value ?label
FROM <http://rdf.interstat.eng.it/graphs/interstat/gf>
WHERE { 
	?facility skos:inScheme ?o .
    ?facility skos:prefLabel ?label .
    FILTER(lang(?label) = 'it') 
    ?facility skos:notation ?value
}`;
