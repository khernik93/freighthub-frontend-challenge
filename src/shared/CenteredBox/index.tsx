import React from 'react';

import './styles.scss';

type Props = {
  children?: any;
}

const CenteredBox = ({ children }: Props) => {
  return (
    <div className="CenteredBox">
      <div className="CenteredBox--inner">
        {children}
      </div>
    </div>
  );
}

export default CenteredBox;
