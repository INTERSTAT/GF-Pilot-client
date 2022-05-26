export const culturalFacilities  = ({ municipality }) =>   `
prefix geo:<http://www.w3.org/2003/01/geo/wgs84_pos#>
prefix cis:<http://dati.beniculturali.it/cis/>
prefix l0:<https://w3id.org/italia/onto/l0/>

SELECT DISTINCT ?municipality ?ID ?cultural_facility ?address ?Email ?WebSite {

  ?LOD a cis:CulturalInstituteOrSite 
   ; cis:institutionalCISName ?cultural_facility
   ; cis:hasSite/cis:siteAddress ?addressSite .
  ?addressSite clvapit:fullAddress ?address 
   ; clvapit:hasCity/rdfs:label ?municipality .
?LOD cis:ISILidentifier ?ID .
   
    #optional { ?LOD geo:lat ?Latitudine }
    #optional { ?LOD geo:long ?Longitudine }
    #optional { ?LOD  cis:hasDiscipline [l0:name ?Disciplina] }

    optional {
     ?LOD smapit:hasOnlineContactPoint ?contactPoint .
     optional { ?contactPoint smapit:hasTelephone [smapit:hasTelephoneType <https://w3id.org/italia/controlled-vocabulary/classifications-for-public-services/channel/031> ;
                                                   smapit:telephoneNumber ?Telefono] }
     optional { ?contactPoint smapit:hasTelephone [smapit:hasTelephoneType <https://w3id.org/italia/controlled-vocabulary/classifications-for-public-services/channel/033> ;
                                                   smapit:telephoneNumber ?Fax] }
     optional { ?contactPoint smapit:hasEmail [smapit:emailAddress ?Email] }
     optional { ?contactPoint smapit:hasWebSite [smapit:URL ?WebSite] }    
    } 
FILTER(str(?municipality)='` + municipality +`') .
 } 
ORDER BY ?cultural_facility
`;