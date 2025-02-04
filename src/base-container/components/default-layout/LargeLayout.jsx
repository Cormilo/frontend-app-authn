import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import backgroundVideo from './background.gif'

import messages from './messages';

const LargeLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-50 d-flex bg-primary-500">
      
      <div className="col-md-12 bg-primary-100" style={{
    backgroundImage: `url(${backgroundVideo})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
  >
        <div className="min-vh-100 d-flex align-items-center">
          <div className={classNames({ 'large-yellow-line mr-n4.5': getConfig().SITE_NAME === 'edX' })} />
          
        </div>
      </div>
      
    </div>
  );
};

export default LargeLayout;
