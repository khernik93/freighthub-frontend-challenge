import { UPDATE_SHIPMENT_NAME, UPDATE_SHIPMENT_NAME_SUCCESS, UPDATE_SHIPMENT_NAME_ERROR } from './constants';
import Shipment from '../../../clients/backend/models/shipment.model';

export const updateShipmentName = (newName: string) => (
  { type: UPDATE_SHIPMENT_NAME, newName }
);

export const updateShipmentNameSuccess = (newShipment: Shipment) => (
  { type: UPDATE_SHIPMENT_NAME_SUCCESS, newShipment }
);

export const updateShipmentNameError = () => (
  { type: UPDATE_SHIPMENT_NAME_ERROR }
);
