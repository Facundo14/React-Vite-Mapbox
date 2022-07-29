import { MapState } from './';
import { Map } from 'mapbox-gl';


type MapActionType = 
  | { type: '[MAP] - setMap', payload: Map}

export const mapReducer = (state: MapState, action: MapActionType): MapState => {
   switch (action.type) {
      case '[MAP] - setMap':
        return {
          ...state,
          isMapReady: true, 
          map: action.payload 
        };

      default:
         return state;
     }


}