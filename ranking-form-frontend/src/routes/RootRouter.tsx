/** @jsx jsx */
import { jsx } from '@emotion/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, NotFoundPage, PollListPage } from 'pages';

function RootRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/polls" exact component={PollListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default RootRouter;
