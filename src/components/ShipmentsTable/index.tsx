import * as React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net';

import Shipment from '../../clients/backend/models/shipment.model';
import DataTableService from '../../services/datatable.service';

import './styles.scss';

type Props = {
  shipments?: Shipment[]
};

export class ShipmentsTableComponent extends React.PureComponent<Props> {

  componentDidMount() {
    // Casting to any in order to avoid missing DataTable property 
    // from the JQuery interface
    ($(this.refs.table) as any).DataTable(DataTableService.config);
  }

  createRows() {
    return this.props.shipments.map((shipment, i) => (
      <tr key={i}>
        <td>{shipment.id}</td>
        <td>{shipment.name}</td>
        <td>{shipment.mode}</td>
        <td>{shipment.type}</td>
        <td>{shipment.destination}</td>
        <td>{shipment.origin}</td>
        <td>{shipment.total}</td>
        <td>{shipment.status}</td>
        <td><Link to={'/details/' + shipment.id}><button className="btn btn-primary">Details</button></Link></td>
      </tr>
    ));
  }

  render() {
    return (
      <table id="shipments" 
             className="table table-striped table-bordered"
             ref="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mode</th>
                <th>Type</th>
                <th>Destination</th>
                <th>Origin</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {this.createRows()}
        </tbody>
      </table>
    );
  }

}

export default ShipmentsTableComponent;
