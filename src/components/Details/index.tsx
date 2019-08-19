import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { getShipments, selectShipment } from '../Home/store/actions';
import Shipment from '../../clients/backend/models/shipment.model';
import { makeSelectShipments, makeSelectShipment } from '../Home/store/selectors';
import { updateShipmentName } from './store/actions';

import './styles.scss';

type Props = {
  match: { params: { id: string } },
  onGetShipments?: Function,
  onSelectShipment?: Function,
  onUpdateName?: Function,
  shipments?: Shipment[],
  shipment?: Shipment,
};

type State = {
  isInEditMode: boolean,
  newName: string,
};

export class DetailsComponent extends React.PureComponent<Props, State> {

  state = {
    isInEditMode: false,
    newName: ''
  };

  componentWillMount() {
    if (!this.props.shipments) {
      this.props.onGetShipments();
    } else {
      this.props.onSelectShipment(this.props.match.params.id);
    }
    
    if (this.props.shipment) {
      this.setState({ newName: this.props.shipment.name });
    }
  }

  componentWillReceiveProps(newProps: Props) {
    if (newProps.shipment) {
      this.setState({ newName: newProps.shipment.name });
    }
    if (newProps.shipments && !newProps.shipment) {
      this.props.onSelectShipment(this.props.match.params.id);
    }
  }

  private updateName() {
    this.setState({ isInEditMode: false });
    this.props.onUpdateName(this.state.newName);
  }

  render() {
    const shipment = this.props.shipment;

    if (!shipment) {
      return <></>;
    }

    return (
      <div id="detials">
        <h1>Details</h1>
        <br/>
        <button className="btn btn-secondary" id="goBack"><Link to="/">Go back</Link></button>
        <br/>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th style={{width: '30%'}}>Key</th>
              <th style={{width: '70%'}}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{shipment.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{this.renderName(shipment.name)}</td>
            </tr>
            <tr>
              <td>Mode</td>
              <td>{shipment.mode}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{shipment.type}</td>
            </tr>
            <tr>
              <td>Destination</td>
              <td>{shipment.destination}</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>{shipment.origin}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{shipment.total}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{shipment.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  renderName(name) {
    if (this.state.isInEditMode) {
      return (
        <>
          <input type="text" 
                 id="editform-name"
                 className="form-control" 
                 value={this.state.newName}
                 onChange={(e) => this.setState({ newName: e.target.value })} />
          <button className="btn btn-success"
                  id="editform-submit"
                  onClick={() => this.updateName()}>
            Update!
          </button>
        </>
      );
    }
    
    return (
      <div onClick={() => this.setState({ isInEditMode: true })}>
        {name} <span style={{color: 'grey'}}>(click to edit <i className="fa fa-edit"/>)</span>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  shipments: makeSelectShipments(),
  shipment: makeSelectShipment(),
});

export const mapDispatchToProps = (dispatch) => ({
  onGetShipments: () => {
    dispatch(getShipments());
  },
  onSelectShipment: (id) => {
    dispatch(selectShipment(id));
  },
  onUpdateName: (newName) => {
    dispatch(updateShipmentName(newName));
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(DetailsComponent);
