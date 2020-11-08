/** @jsx jsx */
import { jsx } from '@emotion/core';
import { PollList, SiteLayout } from 'containers';

function PollListPage() {
  return (
    <SiteLayout>
      <PollList />
    </SiteLayout>
  );
}

export default PollListPage;
