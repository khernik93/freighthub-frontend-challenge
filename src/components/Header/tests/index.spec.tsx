import React from 'react';
import { mount } from 'enzyme';

import HeaderComponent from '..';

describe('<HeaderComponent />', () => {

  let instance;

  const createInstance = () => (
    <HeaderComponent />
  );

  beforeEach(() => {
    instance = mount(createInstance());
  });

  it(`
    WHEN header is mounted
    THEN its content is correctly displayed
  `, () => {
    expect(instance.find('.Header').length).toEqual(1);
  });

});
