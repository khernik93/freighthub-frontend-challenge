import React from 'react';
import { shallow } from 'enzyme';

import { HomeComponent } from '..';
import { SHIPMENTS_MOCK } from '../../../../tests/mocks';
import { ShipmentsTableComponent } from '../../ShipmentsTable';

describe('<HomeComponent />', () => {

  let instance;

  const createInstance = () => (
    <HomeComponent onGetShipments={jest.fn()}
                   shipments={SHIPMENTS_MOCK} />
  );

  beforeEach(() => {
    instance = shallow(createInstance());
  });

  it(`
    WHEN HomePageComponent is rendered
    THEN ShipmentsTable component is created
  `, () => {
    const shipmentsTableComponent = instance.find(ShipmentsTableComponent);
    expect(shipmentsTableComponent.length).toEqual(1);
  });

});
