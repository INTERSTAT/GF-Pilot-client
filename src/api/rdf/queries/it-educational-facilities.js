export const itEducationalFacilities  = ({ municipality }) =>   `
PREFIX miur: <http://www.miur.it/ns/miur#>
SELECT DISTINCT (str(?Anno) as ?AnnoScolastico) (str(?CodiceS) as ?CodiceScuola) (str(?CodiceE) as ?CodiceEdificio) 
(str(?CodiceC) as ?CodiceComune) ?DescrizioneComune ?SiglaProvincia ?TipologiaIndirizzo ?DenominazioneIndirizzo ?NumeroCivico (str(?Civico) as ?NumeroCivico) (str(?Cap) as ?CAP)
WHERE {
          GRAPH <https://dati.istruzione.it/EDIANAGRAFESTA> {
          	?S miur:ANNOSCOLASTICO ?Anno. 
        		?S miur:CODICESCUOLA ?CodiceS.
        		?S miur:CODICEEDIFICIO ?CodiceE.
        		?S miur:CODICECOMUNE ?CodiceC.
        		?S miur:CAP ?Cap. 
            ?S miur:DENOMINAZIONEINDIRIZZO ?DenominazioneIndirizzo. 
        		?S miur:DESCRIZIONECOMUNE '` + municipality + `' . 
        		?S miur:NUMEROCIVICO ?Civico. 
        		?S miur:SIGLAPROVINCIA ?SiglaProvincia. 
        		?S miur:TIPOLOGIAINDIRIZZO ?TipologiaIndirizzo.
          }
}
`;