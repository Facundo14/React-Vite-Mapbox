import { PlacesState } from './';


type PlacesActionType = 
  | { type: '[PLACES] - setUserLocation', payload: [number, number] }

export const placesReducer = (state: PlacesState, action: PlacesActionType): PlacesState => {
   switch (action.type) {
      case '[PLACES] - setUserLocation':
          return {
            ...state,
            isLoading: false,
            userLocation: action.payload
          }

      default:
         return state;
     }


}