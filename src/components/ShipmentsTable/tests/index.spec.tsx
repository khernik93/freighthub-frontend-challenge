import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { ShipmentsTableComponent } from '..';
import { SHIPMENTS_MOCK } from '../../../../tests/mocks';

describe('<ShipmentsTableComponent />', () => {

  let instance;

  const createInstance = () => (
    <Router>
      <ShipmentsTableComponent shipments={SHIPMENTS_MOCK} />
    </Router>
  );

  beforeEach(() => {
    instance = shallow(createInstance());
  });

  it(`
    WHEN ShipmentsTableComponent is rendered
    THEN the component is created
  `, () => {
    const shipmentsTableComponent = instance.find(ShipmentsTableComponent);
    expect(shipmentsTableComponent.length).toEqual(1);
  });

});
