import React, { useState } from 'react';
import MapDisplay from '../components/MapDisplay/MapDisplay';
// import CurrentLocationButton from '../components/CurrentLocationButton/CurrentLocationButton';
import InputField from '../components/InputField/InputField';



const ToLocationPickerContainer: React.FC = () => {
    const [currentLocation, setCurrentLocation] = useState<[number, number]>([23.8103, 90.4125]);
    const [fromDisplayName, setFromDisplayName] = useState<string>('Dhaka, Bangladesh');
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error messages


    const handleSuggestionClick = (lat: number, lng: number, displayName: string) => {
        setCurrentLocation([lat, lng]);
        setFromDisplayName(displayName);
    };

    // const handleLocationFound = (lat: number, lng: number, displayName: string) => {
    //     setCurrentLocation([lat, lng]);
    //     setFromDisplayName(displayName);
    //     setErrorMessage(null)
    // };

    // const handleLocationError = (error: string) => {
    //     setErrorMessage(error); // Set the error message in state
    // };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Pick Your Destination Location</h1>
            <InputField
                label="To"
                placeholder="Enter your starting point"
                onSuggestionClick={handleSuggestionClick}
            />
            {/* <CurrentLocationButton
                onLocationFound={handleLocationFound}
                onError={handleLocationError}
            /> */}
            {errorMessage && <div className="text-red-500">{errorMessage}</div>} {/* Display the error message */}
            <div className="mb-4 text-sm text-gray-600">
                Selected Location: {fromDisplayName}
            </div>
            <MapDisplay position={currentLocation} onMapClick={(lat, lng) => setCurrentLocation([lat, lng])} />
            <div className="flex justify-center"> {/* Flexbox container for centering */}
                <button className="btn btn-primary mb-4 mt-4 w-64"> {/* Fixed width of 16rem (256px) */}
                    Next
                </button>
            </div>
        </div>
    );
};

export default ToLocationPickerContainer;
