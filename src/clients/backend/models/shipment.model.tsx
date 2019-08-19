import Cargo from './cargo.model';
import Service from './service.model';

export default interface Shipment {
  id: string,
  name: string,
  cargo: Cargo[],
  mode: string,
  type: string,
  destination: string,
  origin: string,
  services: Service[],
  total: string,
  status: string,
  userId: string
}
