import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

export default function NotFoundPage() {
  return (
    <div className="container-fluid d-flex py-5 justify-content-center align-items-start text-center">
      <p className="my-0 py-5 text-muted" style={{ maxWidth: '32em' }}>
        <FormattedMessage
          id="profile.notfound.message"
          defaultMessage="TEST"
          description="error message when a page does not exist"
        />
      </p>
    </div>
  );
}
