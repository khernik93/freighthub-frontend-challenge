import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { getShipments } from './store/actions';
import Shipment from '../../clients/backend/models/shipment.model';
import { makeSelectShipments } from './store/selectors';
import ShipmentsTable from '../ShipmentsTable';

type Props = {
  onGetShipments?: Function,
  shipments?: Shipment[]
};

export class HomeComponent extends React.PureComponent<Props> {

  componentWillMount() {
    if (!this.props.shipments) {
      this.props.onGetShipments();
    }
  }

  render() {
    if (! this.props.shipments) {
      return <></>;
    }

    return (
      <div id="home">
        <ShipmentsTable shipments={this.props.shipments} />;
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  shipments: makeSelectShipments()
});

export const mapDispatchToProps = (dispatch) => ({
  onGetShipments: () => {
    dispatch(getShipments());
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomeComponent);
