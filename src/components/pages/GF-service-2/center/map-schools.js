import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const positionRome = [41.9027835, 12.4963655];
const positionRome2 = [41.9037922, 12.4983675];
const positionRome3 = [41.9007922, 12.4903675];
const positionRome4 = [41.9017835, 12.4913655];

const MapSchools = () => (
	<div
		style={{
			height: '100%',
			width: '100%',
			border: 'double',
			borderColor: '#65b2c7',
			borderRadius: '15px'
		}}
	>
		<MapContainer
			center={positionRome}
			zoom={14}
			style={{ height: '50vh', width: '50wh' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				position={positionRome}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Latitude:</b> {positionRome[0]} <br /> <b>Longitude:</b>{' '}
					{positionRome[1]}
				</Popup>
			</Marker>

			<Marker
				position={positionRome2}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Latitude:</b> {positionRome2[0]} <br /> <b>Longitude:</b>{' '}
					{positionRome2[1]}
				</Popup>
			</Marker>

			<Marker
				position={positionRome3}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Latitude:</b> {positionRome3[0]} <br /> <b>Longitude:</b>{' '}
					{positionRome3[1]}
				</Popup>
			</Marker>

			<Marker
				position={positionRome4}
				icon={
					new Icon({
						iconUrl: markerIconPng,
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					})
				}
			>
				<Popup>
					<b>Latitude:</b> {positionRome4[0]} <br /> <b>Longitude:</b>{' '}
					{positionRome4[1]}
				</Popup>
			</Marker>
		</MapContainer>
	</div>
);

export default MapSchools;
