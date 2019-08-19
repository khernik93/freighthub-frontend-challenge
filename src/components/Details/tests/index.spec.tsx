import React from 'react';
import { shallow, mount } from 'enzyme';
import cloneDeep from 'lodash/cloneDeep';
import { BrowserRouter as Router } from 'react-router-dom';

import { DetailsComponent } from '..';
import { SHIPMENTS_MOCK } from '../../../../tests/mocks';

describe('<DetailsComponent />', () => {

  let initialState;
  let instance;

  beforeEach(() => {
    initialState = cloneDeep({
      match: {params: {id: 1 } },
      onGetShipments: jest.fn(),
      onSelectShipment: jest.fn(),
      onUpdateName: jest.fn(),
      shipments: SHIPMENTS_MOCK,
      shipment: SHIPMENTS_MOCK[0],
      isInEditMode: false,
      newName: 'test name'
    });
  });

  const createInstance = () => (
    <Router>
      <DetailsComponent {...initialState} />
    </Router>
  );

  beforeEach(() => {
    instance = shallow(createInstance());
  });

  it(`
    WHEN component will mount
    AND there're no entries
    THEN onGetShipments is called
  `, () => {
    initialState.shipments = null;
    const newInstance = mount(createInstance());
    expect(newInstance.find(DetailsComponent).prop('onGetShipments')).toHaveBeenCalled();
  });

});
