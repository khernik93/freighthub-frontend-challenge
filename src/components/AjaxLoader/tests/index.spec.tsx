import React from 'react';
import { mount } from 'enzyme';

import AjaxLoaderComponent from '..';

describe('<AjaxLoaderComponent />', () => {

  let instance;

  const createInstance = () => (
    <AjaxLoaderComponent />
  );

  beforeEach(() => {
    instance = mount(createInstance());
  });

  it(`
    WHEN AjaxLoader is mounted
    THEN its content is correctly displayed
  `, () => {
    expect(instance.find('.AjaxLoader').length).toEqual(1);
  });

});
