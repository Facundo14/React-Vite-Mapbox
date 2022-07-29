import { FC, useEffect, useReducer } from 'react';
import { getUserLocation } from '../../helpers';
import { PlacesContext, placesReducer } from './';

interface Props {
    children?: React.ReactNode | undefined
}

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
}

const PLACES_INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined
}

export const PlacesPovider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(placesReducer, PLACES_INITIAL_STATE)
    


    useEffect(() => {
       getUserLocation()
            .then( lngLat => dispatch({ type: '[PLACES] - setUserLocation', payload: lngLat }))
    },[])


    return (
        <PlacesContext.Provider value={{
            ...state
        }}>
            { children }
        </PlacesContext.Provider>
    )
}

