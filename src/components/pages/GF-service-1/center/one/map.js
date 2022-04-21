import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const positionPiazzaPlebiscito = [40.836136, 14.249283];
const positionStadium = [40.8280697, 14.1931554];
const positionNaples = [40.831389, 14.219167];

const Map = () => (
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
						{positionStadium[0]} <br /> <b>Longitude:</b> {positionStadium[1]}
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	</div>
);

export default Map;
