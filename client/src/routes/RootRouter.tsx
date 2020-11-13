/** @jsx jsx */
import { jsx } from '@emotion/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, NotFoundPage, SurveyListPage } from 'pages';

function RootRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/surveys" exact component={SurveyListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default RootRouter;
