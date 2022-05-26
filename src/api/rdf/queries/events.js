export const events  = ({ municipality, date }) =>   `
prefix TI:<https://w3id.org/italia/onto/TI/>
prefix geo:<http://www.w3.org/2003/01/geo/wgs84_pos#>
prefix cis:<http://dati.beniculturali.it/cis/>
prefix l0:<https://w3id.org/italia/onto/l0/>
prefix SM:<https://w3id.org/italia/onto/SM/>
prefix POT:<https://w3id.org/italia/onto/POT/>
prefix AC:<https://w3id.org/italia/onto/AccessCondition/>
prefix CLV:<https://w3id.org/italia/onto/CLV/>
prefix geo:<http://www.w3.org/2003/01/geo/wgs84_pos#>
prefix foaf:<http://xmlns.com/foaf/0.1/>

SELECT ?municipality ?facility ?address ?event (xsd:Date(?DATA_INIZIO_EVENTO) as ?date)  {

  ?x a cis:CulturalEvent
   ; rdfs:label ?event 
   ; cis:isHostedBySite ?site .

 ?x TI:atTime/TI:startTime ?DATA_INIZIO_EVENTO .

  ?site cis:siteAddress ?addressSite .
  ?addressSite clvapit:hasCity/rdfs:label ?municipality
   ; clvapit:fullAddress ?address .
  ?site owl:sameAs ?lcSite .
  ?y cis:hasSite ?lcSite
    ; rdfs:label ?facility .
  
  #optional{ ?x geo:lat ?latitude }   
  #optional{ ?x geo:long ?longitude }   

    FILTER(str(?municipality)='` + municipality +`') .
    FILTER(str(?DATA_INIZIO_EVENTO) > '` + date + `') .  

 } 
 ORDER BY DESC(?DATA_INIZIO_EVENTO) 
 #LIMIT 100
`;