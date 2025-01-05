export interface InputFieldProps {
  label: string;
  placeholder: string;
  onSuggestionClick: (lat: number, lng: number, displayName: string) => void;
}