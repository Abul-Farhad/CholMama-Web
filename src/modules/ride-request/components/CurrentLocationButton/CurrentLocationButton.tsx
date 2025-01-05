import React, { useState } from 'react';
import axios from 'axios';

interface CurrentLocationButtonProps {
  onLocationFound: (lat: number, lng: number, displayName: string) => void;
  onError: (error: string) => void; // Add an error callback
}

const CurrentLocationButton: React.FC<CurrentLocationButtonProps> = ({
  onLocationFound,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUseCurrentLocation = async () => {
    setIsLoading(true);
    try {
      if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by your browser.");
      }
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const { latitude, longitude } = position.coords;

      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );

      onLocationFound(latitude, longitude, response.data.display_name);
    } catch (error: any) {
      console.error('Error getting current location:', error);
      onError(error.message || "Could not get your location."); // Call the error callback
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`btn btn-primary ${isLoading ? 'loading' : ''} mb-4`}
      onClick={handleUseCurrentLocation}
      disabled={isLoading}
    >
      {isLoading ? 'Locating...' : 'Use Current Location'}
    </button>
  );
};

export default CurrentLocationButton;