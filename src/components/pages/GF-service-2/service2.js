import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
import './service2.css';
import { SERVICE_2_TITLE, SERVICE_2_DESCRIPTION } from './data';

const positionPiazzaPlebiscito = [40.836136, 14.249283];
const positionStadium = [40.8280697, 14.1931554];
const positionNaples = [40.831389, 14.219167];

const Service2 = () => (
	<Grid container spacing={2}>
		<Grid item xs={2}>
			<div style={{ marginBottom: '1em', fontWeight: 'bold' }}>
				<Accordion
					className="titleAcc"
					title="A visitor wondering the nearest cultural facilities and events"
				>
					<strong>{SERVICE_2_TITLE}</strong>
				</Accordion>
			</div>
			<Paper style={{ fontSize: '100px' }}>{SERVICE_2_DESCRIPTION}</Paper>
		</Grid>

		<Grid item xs={10}>
			<Stack spacing={0.5} style={{ height: '100%', width: '100%' }}>
				<Grid container spacing={4}>
					<Grid item xs={4}>
						<div
							style={{
								height: '100%',
								width: '100%',
								border: 'double',
								borderRadius: '25px',
								borderColor: '#65b2c7',
								paddingLeft: '0.8rem',
								paddingRight: '0.6rem',
							}}
						>
							<h3 style={{ color: '#508391' }}>View Places near you</h3>
							<Stack spacing={2} style={{ height: '100%', width: '100%' }}>
								<div
									style={{
										paddingLeft: '0.8rem',
										border: 'double',
										borderRadius: '25px',
										borderColor: '#65b2c7',
									}}
								>
									<p>
										<label
											style={{
												color: 'black',
												fontWeight: 'bold',
												fontSize: 'medium',
											}}
										>
											Enter you Location
										</label>
										<input
											placeholder="Address, City"
											style={{ height: '30px', width: '80%' }}
										/>
									</p>
								</div>
								<br />
								<br />
								{/* <div
									style={{
										paddingLeft: '0.8rem',
										border: 'double',
										borderRadius: '25px',
										borderColor: '#65b2c7',
									}}
								>
									<p>
										<label
											style={{
												color: 'black',
												fontWeight: 'bold',
												fontSize: 'medium',
												paddingTop: '10',
											}}
										>
											Type of Cultural Facilities
										</label>
										<br />
										<Checkbox size="small" />
										<label style={{ color: 'grey', fontSize: 'small' }}>
											Sports venues (stadiums, swimming pools, ...)
										</label>
										<br />
										<Checkbox size="small" />
										<label style={{ color: 'grey', fontSize: 'small' }}>
											Cultural venues (museums, theaters, gardens, ...)
										</label>
										<br />
										<Checkbox size="small" isChecked="true" />
										<label style={{ color: 'grey', fontSize: 'small' }}>
											Places of leisure and entertainment (cinema, playgrounds)
											...)
										</label>
										<br />
										<Checkbox size="small" />
										<label style={{ color: 'grey', fontSize: 'small' }}>
											{' '}
											Schools (nursery, primary, secondary)
										</label>
									</p>
								</div> */}
							</Stack>
						</div>
					</Grid>

					<Grid item xs={8}>
						<div style={{ height: '100%', width: '100%' }}>
							{/*style={{ height: '100%', width: '100%', border: 'double', borderColor: 'blue'}} */}
							<div>
								<MapContainer
									center={positionNaples}
									zoom={14}
									style={{ height: '60vh', width: '100wh' }}
								>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<Marker
										position={positionPiazzaPlebiscito}
										icon={
											new Icon({
												iconUrl: markerIconPng,
												iconSize: [20, 36],
												iconAnchor: [12, 41],
											})
										}
									>
										<Popup>
											<b>Piazza Plebiscito (NA)</b> <br /> <b>Latitude:</b>{' '}
											{positionPiazzaPlebiscito[0]} <br /> <b>Longitude:</b>{' '}
											{positionPiazzaPlebiscito[1]}
										</Popup>
									</Marker>

									<Marker
										position={positionStadium}
										icon={
											new Icon({
												iconUrl: markerIconPng,
												color: 'red',
												iconSize: [20, 36],
												iconAnchor: [12, 41],
											})
										}
									>
										<Popup>
											<b>Stadio Maradona (NA)</b> <br /> <b>Latitude:</b>{' '}
											{positionStadium[0]} <br /> <b>Longitude:</b>{' '}
											{positionStadium[1]}
										</Popup>
									</Marker>
								</MapContainer>
							</div>
						</div>
					</Grid>
				</Grid>
				{/*
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
      */}
			</Stack>
		</Grid>
	</Grid>
);

export default Service2;
