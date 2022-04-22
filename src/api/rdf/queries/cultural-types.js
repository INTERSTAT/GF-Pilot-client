export const culturalTypes = `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT ?uri ?label
FROM <http://rdf.interstat.eng.it/graphs/interstat/gf>
WHERE { 
	?uri skos:inScheme ?o .
    ?uri skos:prefLabel ?label .
    FILTER(lang(?label) = 'it') 
}`;
