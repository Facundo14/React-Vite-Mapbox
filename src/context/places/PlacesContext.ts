import { createContext } from 'react';

export interface ContextProps {
   isLoading: boolean;
   userLocation?: [number, number];
}


export const PlacesContext = createContext<ContextProps>({} as ContextProps);