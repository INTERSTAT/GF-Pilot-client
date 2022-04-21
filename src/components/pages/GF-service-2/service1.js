import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
import './service1.css';
import { SERVICE_1_TITLE, SERVICE_1_DESCRIPTION } from './data';

import TablePageNew2 from '../table-dataNew2';
import TablePageNew from '../table-dataNew';

const positionRome = [41.9027835, 12.4963655];
const positionMilan = [45.4654219, 9.1859243];
const positionTurin = [45.070312, 7.6868565];

const Service1 = () => <Grid container spacing={2}></Grid>;

export default Service1;
