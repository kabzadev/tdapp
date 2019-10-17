import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  Parent,
  DashboardPage,
  HomePage,
  ViewBusiness,
  RegisterBusiness,
  ViewProperty,
  RegisterProperty,
  Form,
  Table,
  Error,
  NotFound
} from '../pageListAsync';


class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          <Route exact path="/app" component={HomePage} />
          <Route path="/app/viewbusiness" component={ViewBusiness} />
          <Route path="/app/registerbusiness" component={RegisterBusiness} />
          <Route path="/app/viewproperty" component={ViewProperty} />
          <Route path="/app/registerproperty" component={RegisterProperty} />
          <Route path="/app/dashboard" component={DashboardPage} />
          <Route path="/app/form" component={Form} />
          <Route path="/app/table" component={Table} />
          <Route path="/app/page-list" component={Parent} />
          <Route path="/app/pages/not-found" component={NotFound} />
          <Route path="/app/pages/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Application;
