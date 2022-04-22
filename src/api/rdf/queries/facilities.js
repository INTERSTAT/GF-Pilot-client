export const facilities = `PREFIX igf: <http://rdf.insee.fr/def/interstat/gf#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?facility ?id ?label ?point WHERE { 
	?facility a igf:Facility .
    ?facility dc:identifier ?id .
    FILTER(!strStarts(?id, "fr"))
    ?facility rdfs:label ?label .
    ?facility geo:hasGeometry ?geometry .
    ?geometry geo:asWKT ?point
}`;
