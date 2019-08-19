import { GET_SHIPMENTS, GET_SHIPMENTS_SUCCESS, GET_SHIPMENTS_ERROR, SELECT_SHIPMENT } from './constants';
import Shipment from '../../../clients/backend/models/shipment.model';

export const getShipments = () => (
  { type: GET_SHIPMENTS }
);

export const getShipmentsSuccess = (shipments: Shipment[]) => (
  { type: GET_SHIPMENTS_SUCCESS, shipments }
);

export const getShipmentsError = () => (
  { type: GET_SHIPMENTS_ERROR }
);

export const selectShipment = (id) => (
  { type: SELECT_SHIPMENT, id }
);
