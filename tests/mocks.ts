import Shipment from "../src/clients/backend/models/shipment.model";

export const SHIPMENTS_MOCK: Shipment[] = [
  {
    "id": "S1000",
    "name": "T-shirts(Summer2018) from Shanghai to Hamburg",
    "cargo": [
      {
        "type": "Fabric",
        "description": "1000 Blue T-shirts",
        "volume": "2"
      },
      {
        "type": "Fabric",
        "description": "2000 Green T-shirts",
        "volume": "3"
      }
    ],
    "mode": "sea",
    "type": "FCL",
    "destination": "Saarbrücker Str. 38, 10405 Berlin",
    "origin": "Shanghai Port",
    "services": [
      {
        "type": "customs"
      }
    ],
    "total": "1000",
    "status": "ACTIVE",
    "userId": "U1000"
  }
];
