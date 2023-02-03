import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import edXLogo from '../images/edX-logo.svg';
import messages from './messages';

const SkillsBuilderHeader = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="d-flex">
      <img src={edXLogo} alt="edx-logo" className="mt-2 h-50" />
      <div className="ml-5 vertical-line" />
      <div className="w-100 ml-5">
        <p className="h1 header-title">
          {formatMessage(messages.skillsBuilderHeaderTitle)}
        </p>
        <p className="h2 text-white">
          {formatMessage(messages.skillsBuilderHeaderSubheading)}
        </p>
      </div>
    </div>
  );
};

export default SkillsBuilderHeader;
