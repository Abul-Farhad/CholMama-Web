import React from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

interface MapDisplayProps {
    position: [number, number];
    onMapClick: (lat: number, lng: number) => void;
}

const MapDisplay: React.FC<MapDisplayProps> = ({ position, onMapClick }) => {
    const MapClickHandler = () => {
        useMapEvents({
            click: (e) => {
                onMapClick(e.latlng.lat, e.latlng.lng);
            },
        });
        return null;
    };

    return (
        <MapContainer
            center={position}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={position} />
            <MapClickHandler />
        </MapContainer>
    );
};

export default MapDisplay;
