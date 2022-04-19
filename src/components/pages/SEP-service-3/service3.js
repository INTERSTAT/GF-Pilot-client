import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
import './service3.css';
import { SERVICE_3_TITLE, SERVICE_3_DESCRIPTION } from './data';
import Select from 'react-select'

import TablePageNew from '../table-dataNew';

const positionRome = [41.9027835, 12.4963655]
const positionParis = [48.864716, 2.349014]

const optionsNUTS3French = [
  { value: '', label: 'FR101' },
  { value: '', label: 'FR102' },
  { value: '', label: 'FR103' },
  { value: '', label: 'FR104' },
  { value: '', label: 'FR105' },
  { value: '', label: 'FR106' },
  { value: '', label: 'FR107' },
  { value: '', label: 'FR108' },
  { value: '', label: 'FR109' },
  { value: '', label: 'FR110' }
]

const optionsNUTS3Italian = [
  { value: '', label: 'IT101' },
  { value: '', label: 'IT102' },
  { value: '', label: 'IT103' },
  { value: '', label: 'IT104' },
  { value: '', label: 'IT105' },
  { value: '', label: 'IT106' },
  { value: '', label: 'IT107' },
  { value: '', label: 'IT108' },
  { value: '', label: 'IT109' },
  { value: '', label: 'IT110' }
]

const optionsMunicipalityF = [
  { value: '', label: 'Paris' },
  { value: '', label: 'Lione' },
  { value: '', label: 'FR103' },
  { value: '', label: 'FR104' },
  { value: '', label: 'FR105' },
  { value: '', label: 'FR106' },
  { value: '', label: 'FR107' },
  { value: '', label: 'FR108' },
  { value: '', label: 'FR109' },
  { value: '', label: 'FR110' }
]

const optionsMunicipalityI = [
  { value: '', label: 'IT101' },
  { value: '', label: 'IT102' },
  { value: '', label: 'IT103' },
  { value: '', label: 'IT104' },
  { value: '', label: 'IT105' },
  { value: '', label: 'IT106' },
  { value: '', label: 'IT107' },
  { value: '', label: 'IT108' },
  { value: '', label: 'IT109' },
  { value: '', label: 'IT110' }
]

const optionsAgeGroups = [
  { value: '', label: 'Y0-4' },
  { value: '', label: 'Y5-9' },
  { value: '', label: 'Y10-14' },
  { value: '', label: 'Y15-19' },
  { value: '', label: 'Y20-24' },
  { value: '', label: 'Y25-29' },
  { value: '', label: 'Y30-34' },
  { value: '', label: 'Y35-39' },
  { value: '', label: 'Y40-44' },
  { value: '', label: 'Y45-49' }
]

const Service3 = () => (	
		<Grid container spacing={2}>  
		<Grid item xs={2}>
			<div style={{ marginBottom: '1em', fontWeight: 'bold' }}>
				<Accordion className="titleAcc" title="Evaluation of the effects of pollution on specific population groups in Italy and France">
					<strong>{SERVICE_3_TITLE}</strong>
				</Accordion>
			</div>
			<Paper>{SERVICE_3_DESCRIPTION}</Paper>
		</Grid>

		<Grid item xs={10}>
    <Stack spacing={0.5} style={{ height: '100%', width: '100%'}}>

          <Grid container spacing={4}>  
            <Grid item xs={4}>
              
              <div style={{ height: '100%', width: '100%', border: 'double', borderRadius: '25px', borderColor: '#1678f7', paddingLeft: '0.8rem', paddingRight: '0.6rem' }}>
              
                <h3>Pollutants</h3>
                <Stack spacing={2} style={{ height: '100%', width: '100%'}}>

                    <Grid container spacing={2}>  
                      <Grid item xs={6}>
                        <br />
                        <br />
                        <div style={{ height: '100%', width: '100%'}}>
                          <label style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}>Insert a value for PM10</label>
                          <Select options={optionsNUTS3French} placeholder="16"/>
                          <br/>
                          <br/>
                          <label style={{ color: 'black', fontWeight: 'bold', fontSize: 'small', paddingTop:'10' }}>Insert a value for NO2</label>
                          <Select options={optionsMunicipalityF} placeholder="5" />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <br />
                        <br />
                        <div style={{ height: '100%', width: '100%'}}>
                          <label style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}>Insert a value for PM2.5</label>
                          <Select options={optionsNUTS3Italian} placeholder="8"/>
                          <br/>
                          <br/>
                          <label style={{ color: 'black', fontWeight: 'bold', fontSize: 'small', paddingTop:'10' }}>Insert a value for O3</label>
                          <Select options={optionsMunicipalityI} placeholder="23"/>
                        </div>
                      </Grid>
                    </Grid>

                     
                     
            
                </Stack>
              </div>
            </Grid>
            
            <Grid item xs={8}>
              <div style={{ height: '100%', width: '100%'}}>
                {/*style={{ height: '100%', width: '100%', border: 'double', borderColor: 'blue'}} */}
                 <div >
                  <MapContainer center={positionRome} zoom={4}
                  style={{ height: '60vh', width: '100wh' }}  >
                      <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={positionRome} icon={new Icon({iconUrl: markerIconPng, iconSize: [15, 31], iconAnchor: [12, 41]})}>
                      <Popup>
                        <b>Latitude:</b> {positionRome[0]} <br /> <b>Longitude:</b> {positionRome[1]}
                      </Popup>
                      </Marker>
                      <Marker position={positionParis} icon={new Icon({iconUrl: markerIconPng, iconSize: [15, 31], iconAnchor: [12, 41]})}>
                      <Popup>
                        <b>Latitude:</b> {positionParis[0]} <br /> <b>Longitude:</b> {positionParis[1]}
                      </Popup>
                      </Marker>
                </MapContainer>
              </div>		
              </div>
            </Grid>
          </Grid>
      
      <Grid container spacing={1}>  
          <Grid item xs={6}>
						<div style={{ height: '100%', width: '100%'}}>
              <h4>Air pollution data for ITC11 NUTS3 region</h4>
              <TablePageNew />
						</div>
          </Grid>

          <Grid item xs={6}>
						<div style={{ height: '100%', width: '100%'}}>
              <h4>Air pollution data for ITC11 NUTS3 region</h4>
              <TablePageNew />
						</div>
          </Grid>
      </Grid>
		</Stack>


		</Grid>
	</Grid>
);

export default Service3;
