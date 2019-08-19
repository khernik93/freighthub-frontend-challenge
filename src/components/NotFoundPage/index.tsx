import React from 'react';

import CenteredBox from '../../shared/CenteredBox';

export default class NotFoundPageComponent extends React.PureComponent {

  render() {
    return (
      <div className="NotFoundPage">
        <CenteredBox>
          <h1>Page not found</h1>
        </CenteredBox>
      </div>
    );
  }

}
