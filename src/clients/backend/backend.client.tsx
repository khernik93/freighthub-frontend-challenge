import * as React from 'react';
import { Observable } from "rxjs";

import Client from "../client";
import Shipment from './models/shipment.model';

const ROUTES = {
  shipments: '/shipments',
  updateShipment: null,
};
ROUTES.updateShipment = (id) => ROUTES.shipments + '/' + id;

export const withBackendClient = (WrappedComponent) => (
  (props) => (
    <WrappedComponent {...props} 
      backendClient={props.backendClient ? props.backendClient : new BackendClient()}
    />
  )
);

export default class BackendClient {

  private client: Client = new Client(BACKEND_URL);

  getShipments(): Observable<Shipment[]> {
    return this.client.get(ROUTES.shipments);
  }

  updateShipmentName(id: string, newName: string): Observable<void> {
    return this.client.patch(ROUTES.updateShipment(id), {
      name: newName
    });
  }

}
