import React from 'react';
import { shallow } from 'enzyme';
import { Switch } from 'react-router-dom';

import AppComponent from '..';
import Header from '../../../components/Header';

describe('<AppComponent />', () => {

  let instance;

  const createInstance = () => (
    <AppComponent />
  );

  beforeEach(() => {
    instance = shallow(createInstance());
  });

  it(`
    WHEN AppContainer is rendered
    THEN Header component is created
    AND switch component is created
  `, () => {    
    const header = instance.find(Header);
    expect(header.length).toEqual(1);

    const s = instance.find(Switch);
    expect(s.length).toEqual(1);
  });

});
