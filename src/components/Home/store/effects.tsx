import { ofType } from 'redux-observable';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import Shipment from "../../../clients/backend/models/shipment.model";
import { getShipmentsSuccess, getShipmentsError } from './actions';
import { GET_SHIPMENTS } from './constants';

const getShipments$ = (action$, state, {backendClient}) =>
  action$
    .pipe(
      ofType(GET_SHIPMENTS),
      exhaustMap(() => (
        backendClient.getShipments()
          .pipe(
            map((shipments: Shipment[]) => getShipmentsSuccess(shipments)),
            catchError(() => of(getShipmentsError()))
          )
      ))
    );

export default [
  getShipments$
];
