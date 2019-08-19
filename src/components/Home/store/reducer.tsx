import { GET_SHIPMENTS, GET_SHIPMENTS_SUCCESS, GET_SHIPMENTS_ERROR, SELECT_SHIPMENT } from './constants';
import Shipment from '../../../clients/backend/models/shipment.model';
import { UPDATE_SHIPMENT_NAME_SUCCESS } from '../../Details/store/constants';

interface HomeState {
  shipments: Shipment[];
  shipment: Shipment;
  loading: boolean;
}

export const initialState: HomeState = {
  shipments: null,
  shipment: null,
  loading: false
};

function homeReducer(state = initialState, action) {
  
  switch (action.type) {
    case GET_SHIPMENTS:
      return { ...state, loading: true };

    case GET_SHIPMENTS_SUCCESS:
      return { ...state, shipments: action.shipments, loading: false };
      
    case GET_SHIPMENTS_ERROR:
      return { ...state, loading: false };

    case SELECT_SHIPMENT:
      return { ...state, shipment: state.shipments.filter(s => s.id === action.id)[0]};

    case UPDATE_SHIPMENT_NAME_SUCCESS:
      return { 
        ...state, 
        shipments: state.shipments.map(s => {
          const newShipment = action.newShipment;
          return (s.id === newShipment.id) ? newShipment : s;
        }),
        shipment: action.newShipment 
      };

    default:
      return state;
  }

}

export default homeReducer;
