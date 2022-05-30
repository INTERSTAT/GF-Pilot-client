export const schoolsFederateQuery  = ({ municipality, lauCode }) =>   `
PREFIX miur: <http://www.miur.it/ns/miur#>

PREFIX igf: <http://rdf.insee.fr/def/interstat/gf#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT DISTINCT (?Comune as ?municipality) (?lau as ?lau_code) (?id as ?school_id) (?CodiceE as ?school_building_id) (?TipoIndirizzo as ?type_address) (?DenominazioneIndirizzo as ?address) (?Civico as ?civic_number) ?Cap (?SiglaProvincia as ?municipality_abbr) ?facility_label WHERE {
    ?facility a igf:Facility .
    ?facility dcterms:type ?type .
    ?facility dc:identifier ?id .
    ?facility igf:inLAU ?lau .
    
    ?facility rdfs:label ?facility_label .
    
    #?facility geo:hasGeometry ?geometry .
    #?geometry geo:asWKT ?point .
    
    FILTER(strStarts(?id, "fr") = false )
    FILTER(str(?type = 'http://id.insee.fr/interstat/gf/FacilityType/C'))
    FILTER(xsd:string(?lau) = '` + lauCode + `')
    FILTER( str(?id) = str(?codiceS))
    
   SERVICE <https://interstat.eng.it/graphdb/repositories/sep-test> {
      GRAPH <https://dati.istruzione.it/EDIANAGRAFESTA> {
          		?S miur:ANNOSCOLASTICO ?Anno. 
        		?S miur:CODICESCUOLA  ?codiceS .
                ?S miur:CODICEEDIFICIO ?CodiceE.
        		?S miur:CODICECOMUNE ?CodiceC.
        		?S miur:CAP ?Cap. 
                ?S miur:TIPOLOGIAINDIRIZZO ?TipoIndirizzo. 
                ?S miur:DENOMINAZIONEINDIRIZZO ?DenominazioneIndirizzo. 
        		?S miur:DESCRIZIONECOMUNE ?Comune . 
        		?S miur:NUMEROCIVICO ?Civico. 
        		?S miur:SIGLAPROVINCIA ?SiglaProvincia. 
        		?S miur:TIPOLOGIAINDIRIZZO ?TipologiaIndirizzo.
        		
            FILTER( str(?Comune) = '` + municipality + `')
          }
    }
} 
`;