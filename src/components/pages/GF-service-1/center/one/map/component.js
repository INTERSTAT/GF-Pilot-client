import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import { wktToGeoJSON } from '@terraformer/wkt';

const ROMA = [41.9027835, 12.4963655];

const Map = ({ points, country }) => (
	<div style={{ height: '100%', width: '100%' }}>
		<div>
			<MapContainer
				center={ROMA}
				zoom={5.4}
				style={{ height: '60vh', width: '100wh' }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{points.map(({ id, label, point }) => {
					
					if (point.includes('None')) return null;
					const { coordinates } = wktToGeoJSON(point);

					let coord;
					let [lat, lon] = coordinates;

					if(country==='FR'){
						coord = [coordinates[1], coordinates[0]];
						[lat, lon] = coord;
						//console.log("POSITION for FRENCH : " + JSON.stringify(coord));
					} else {
						coord = coordinates;
					}

					return (
						<Marker
							key={id}
							position={coord}
							icon={
								new Icon({
									iconUrl: markerIconPng,
									iconSize: [20, 36],
									iconAnchor: [12, 41],
								})
							}
						>
							<Popup>
								<b>{label}</b>
								<br />
								<b>{`Latitude: ${lat}`}</b>
								<br />
								<b>{`Longitude: ${lon}`}</b>
							</Popup>
						</Marker>
					);
				})}
			</MapContainer>
		</div>
	</div>
);

export default Map;
