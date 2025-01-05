import React, { useState, useCallback, useRef } from 'react';
import axios from 'axios';
import { InputFieldProps } from './InputFieldProps.tsx';



const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  onSuggestionClick,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchSuggestions = async (query: string) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const debouncedFetchSuggestions = useCallback(async (query: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(async () => {
      await fetchSuggestions(query);
      timeoutRef.current = null;
    }, 500); // Delay of 500 milliseconds (adjust as needed)
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 2) {
      debouncedFetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
      {suggestions.length > 0 && (
        <ul className="menu bg-base-100 shadow-md rounded-box mt-2">
          {suggestions.map((suggestion, index) => (
            <li key={index}>
              <button
                type="button"
                
                onClick={() =>
                  onSuggestionClick(
                    parseFloat(suggestion.lat),
                    parseFloat(suggestion.lon),
                    suggestion.display_name
                  )
                }
                className="w-full text-left p-2 hover:bg-gray-100"
              >
                {suggestion.display_name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputField;
















// import React from 'react';

// interface InputFieldProps {
//     label: string;
//     value: string;
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     onUseCurrentLocation?: () => void;
//     placeholder?: string;
// }

// const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, onUseCurrentLocation, placeholder }) => {
//     return (
//         <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">{label}</label>
//             <div className="flex items-center">
//                 <input
//                     type="text"
//                     className="input input-bordered w-full"
//                     value={value}
//                     onChange={onChange}
//                     placeholder={placeholder}
//                 />
//                 {onUseCurrentLocation && (
//                     <button
//                         type="button"
//                         onClick={onUseCurrentLocation}
//                         className="btn btn-secondary ml-2"
//                     >
//                         Use Current Location
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default InputField;


