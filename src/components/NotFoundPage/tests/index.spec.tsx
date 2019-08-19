import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPageComponent from '..';
import CenteredBox from '../../../shared/CenteredBox';

describe('<SettingsContainer />', () => {

  let instance;

  const createInstance = () => (
    <NotFoundPageComponent />
  );

  beforeEach(() => {
    instance = shallow(createInstance());
  });

  it(`
    WHEN NotFoundPageComponent is rendered
    THEN CenteredBox component is created
  `, () => {
    const centeredBox = instance.find(CenteredBox);
    expect(centeredBox.length).toEqual(1);
  });

});
