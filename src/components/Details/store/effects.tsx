import { ofType } from 'redux-observable';
import { catchError, map, exhaustMap, tap, take } from 'rxjs/operators';
import { of } from 'rxjs';

import { updateShipmentNameSuccess, updateShipmentNameError } from './actions';
import { UPDATE_SHIPMENT_NAME } from './constants';
import Shipment from '../../../clients/backend/models/shipment.model';

const updateShipmentName$ = (action$, state, {backendClient}) =>
  action$
    .pipe(
      ofType(UPDATE_SHIPMENT_NAME),
      exhaustMap((action: any) => (
        state
          .pipe(
            take(1),
            map((val: any) => ({ 
              id: val.home.shipment.id, 
              name: action.newName 
            }))
          )
      )),
      exhaustMap((action: {id: string, name: string}) => (
        backendClient.updateShipmentName(action.id, action.name)
          .pipe(
            map((newShipment: Shipment) => updateShipmentNameSuccess(newShipment)),
            catchError(() => of(updateShipmentNameError()))
          )
      ))
    );

export default [
  updateShipmentName$
];
