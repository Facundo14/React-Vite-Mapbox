import { Map, Marker, Popup } from 'mapbox-gl';
import { FC, useReducer } from 'react';
import { MapContext, mapReducer } from './';

interface Props {
    children?: React.ReactNode | undefined
}

export interface MapState {
    isMapReady: boolean;
    map?: Map;
}

const MAP_INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined
}

export const MapPovider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(mapReducer, MAP_INITIAL_STATE)


    const setMap = (map: Map) => {

        const myLocationPopup = new Popup()
            .setHTML(`
                <h4>Aquí estoy</h4>
                <p>En algún lugar del mundo</p>
            `)

        new Marker()
            .setLngLat(map.getCenter())
            .setPopup(myLocationPopup)
            .addTo(map)

        dispatch({ type: '[MAP] - setMap', payload: map})
    }


    return (
        <MapContext.Provider value={{
            ...state,
            setMap,
        }}>
            { children }
        </MapContext.Provider>
    )
}