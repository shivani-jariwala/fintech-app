import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';

import UIIcons from '../../pages/components/icons';
import UINotifications from '../../pages/notifications';
import TablesStatic from '../../pages/tables/static';
import MapsGoogle from '../../pages/components/maps/google';
import CoreTypography from '../../pages/typography';
import Charts from '../../pages/components/charts/Charts';
import Dashboard from '../../pages/dashboard/Dashboard';
import bbpsForm from '../../pages/forms/bbpsForm.js'
import BillsForm from '../../pages/forms/BillsForm.js';
import BankAccount from '../../pages/forms/bankAccount.js';
import EditProfile from '../../pages/forms/editProfile.js';
import ElectricityBill from '../../pages/forms/electricityForm.js';
import Rewards from '../../pages/forms/rewards.js';
import KYCForm from '../../pages/forms/kyc.js';
import Goals from '../../pages/forms/goals.js';
import CreatedGoal from '../../pages/forms/createdGoals.js';
import BankDetails from '../../pages/forms/bankdetails.js';
import Assets from '../../pages/forms/landForm';

import Header from '../Header';
import Sidebar from '../Sidebar';
import BreadcrumbHistory from '../BreadcrumbHistory';
import { openSidebar, closeSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';

class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
  };
  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
  }


  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4 && !this.state.chatOpen) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }

      this.setState({ chatOpen: e.direction === 2 });
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          'sidebar-' + this.props.sidebarPosition,
          'sidebar-' + this.props.sidebarVisibility,
        ].join(' ')}
      >
        <div className={s.wrap}>
          <Header />
          {/* <Chat chatOpen={this.state.chatOpen} /> */}
          {/* <Helper /> */}
          <Sidebar />
          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
              <BreadcrumbHistory url={this.props.location.pathname} />
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route path="/app/main" exact render={() => <Redirect to="/app/main/dashboard" />} />
                    <Route path="/app/main/dashboard" exact component={Dashboard} />
                    <Route path="/app/components/icons" exact component={UIIcons} />
                    <Route path="/app/notifications" exact component={UINotifications} />
                    <Route path="/app/components/charts" exact component={Charts} />
                    <Route path="/app/tables" exact component={TablesStatic} />
                    <Route path="/app/components/maps" exact component={MapsGoogle} />
                    <Route path="/app/profile" exact component={EditProfile} />
                    <Route path="/app/bills" exact component={bbpsForm} />
                    <Route path="/app/bank-account" exact component={BankAccount} />
                    <Route path="/app/goals" exact component={Goals} />
                    <Route path="/app/rewards" exact component={Rewards} />
                    <Route path="/app/assets" exact component={Assets} />
                    <Route path="/app/billsform" exact component={BillsForm} />
                    <Route path="/app/electricitybill" exact component={ElectricityBill} />
                    <Route path="/app/kyc" exact component={KYCForm} />
                    <Route path="/app/created-goals" exact component={CreatedGoal} />
                    <Route path="/app/bankdetails" exact component={BankDetails} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              {/* <footer className={s.contentFooter}>
                Light Blue React Template - React admin template made by <a href="https://flatlogic.com" >Flatlogic</a>
              </footer> */}
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarPosition: store.navigation.sidebarPosition,
    sidebarVisibility: store.navigation.sidebarVisibility,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
