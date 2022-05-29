export const schoolsFederateQuery  = ({ municipality, lauCode }) =>   `
PREFIX miur: <http://www.miur.it/ns/miur#>

PREFIX igf: <http://rdf.insee.fr/def/interstat/gf#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>

SELECT *  WHERE {
    ?facility a igf:Facility .
    ?facility dcterms:type ?type .
    ?facility dc:identifier ?id .
    ?facility igf:inLAU ?lau .
    
    FILTER(strStarts(?id, "fr") = false )
    FILTER(str(?type = 'http://id.insee.fr/interstat/gf/FacilityType/C'))
    FILTER(xsd:string(?lau) = '` + lauCode + `')
	#FILTER( str(?id) ='VVEE833034')
    FILTER( str(?id) = str(?codiceS))
    
   SERVICE <https://interstat.eng.it/graphdb/repositories/sep-test> {
      GRAPH <https://dati.istruzione.it/EDIANAGRAFESTA> {
          		?S miur:ANNOSCOLASTICO ?Anno. 
        		?S miur:CODICESCUOLA  ?codiceS .
                ?S miur:CODICEEDIFICIO ?CodiceE.
        		?S miur:CODICECOMUNE ?CodiceC.
        		?S miur:CAP ?Cap. 
                ?S miur:DENOMINAZIONEINDIRIZZO ?DenominazioneIndirizzo. 
        		?S miur:DESCRIZIONECOMUNE '` + municipality + `' . 
        		?S miur:NUMEROCIVICO ?Civico. 
        		?S miur:SIGLAPROVINCIA ?SiglaProvincia. 
        		?S miur:TIPOLOGIAINDIRIZZO ?TipologiaIndirizzo.
        		
            #FILTER( str(?codiceS) ='VVEE833034')
          }
    }
} 
`;