/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SurveyList, SiteLayout } from 'containers';

function SurveyListPage() {
  return (
    <SiteLayout>
      <SurveyList />
    </SiteLayout>
  );
}

export default SurveyListPage;
