import React, {PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Button from './utils/Button';
import C from '../config/constants';
import history from '../history/history';

class Header extends React.Component {

    static propTypes() {
      console.log("own propTypes : "+ownProps);
        return {
          authStatus: state.auth.authStatus,
          photoURL: state.auth.photoURL,
          userName: state.auth.userName,
          email: state.auth.email
        };
    }

    userMenu() {
        let content = null;

        if (this.props.authStatus === C.LOGGED_IN) {
            content = (
                <ul
                  className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect twg-menu-user-menu"
                  htmlFor="twg-user-menu">

                    <li
                      className="mdl-menu__item mdl-button mdl-button-with-icon"
                      disabled>
                        <i className="material-icons">account_circle</i>
                        {this.props.userName ? this.props.userName : this.props.email}
                    </li>

                    <li
                      className="mdl-menu__item mdl-button mdl-button-with-icon"
                      onClick={() => {
                        history.push('/upcoming-events');
                      }}>
                        <i className="material-icons">event</i>
                        Upcoming Events
                    </li>

                    <li
                      className="mdl-menu__item mdl-menu__item--full-bleed-divider mdl-button mdl-button-with-icon"
                      onClick={() => {
                        history.push('/calendar-view');
                      }}>
                        <i className="material-icons">date_range</i>
                        Calendar View
                    </li>

                    <li
                      className="mdl-menu__item mdl-button mdl-button-with-icon"
                      onClick={this.props.logout}>
                        <i className="material-icons">exit_to_app</i>
                        Logout
                    </li>

                </ul>
            );
        }

        return content;
    }

    profilePhoto() {
        let photo = null;

        if (this.props.authStatus === C.LOGGED_IN) {

            if (this.props.photoURL && this.props.photoURL !== '') {

                photo = (
                    <button
                      id="twg-user-menu"
                      className="mdl-navigation__link twg-user-avatar">
                        <img
                          src={this.props.photoURL}
                          style={{ width: '100%' }}
                          title={this.props.userName}/>
                    </button>
                );

            } else {

                photo = (
                    <button
                      id="twg-user-menu"
                      className="mdl-navigation__link twg-user-avatar mdl-button mdl-button-with-icon">
                        <i className="material-icons">account_circle</i>
                    </button>
                );

            }
        } else {

            photo = (
                <a
                  className="twg-logo"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/')
                }}>
                    TWG Events
                </a>
            );
        }

        return photo;
    }

    actionButton() {
        let actionButton = null;

        if (this.props.authStatus === C.LOGGED_IN) {
            actionButton = (
                <div>
                  { this.upcomingEventBtnNav() }
                  <Button
                    customClass="mdl-button-with-icon mdl-color-text--grey-100"
                    id="twg-button--nav-calendar-view"
                    onClick={ (e) => {
                        e.preventDefault();
                        history.push('/calendar-view');
                      } }>
                    <i className="material-icons">date_range</i>
                    CALENDAR VIEW
                  </Button>
                </div>
            );
        }

        return actionButton;
    }

    upcomingEventBtnNav() {
        let content = null;
        let location = this.props.location;
        if (this.props.authStatus === C.LOGGED_IN) {
            content = (
                <Button
                  customClass="mdl-button-with-icon mdl-color-text--grey-100 mdl-button-nav-start-roast"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/upcoming-events');
                  }}>
                <i className="material-icons">event</i>
                    UPCOMING EVENTS
                </Button>
            );
        }

        return content;
    }

    newEventBtn() {
        let content = null;

        if (this.props.authStatus === C.LOGGED_IN) {
            content = (
                <div>
                    <Button
                      customClass="mdl-button--fab mdl-button--colored twg-header-button twg-header-button-add-new"
                      id="add-new-event-button"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push('/newEvent');
                      }}>
                      <i className="material-icons">add</i>
                    </Button>
                    <div
                      className="mdl-tooltip"
                      htmlFor="add-new-event-button">
                      Create New Event
                    </div>
                </div>
            );
        }

        return content;
    }

    render() {
        return (
            <ReactCSSTransitionGroup transitionName="twg-header" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <h4>
                          TWG Lunch n' Learn
                        </h4>
                        <span className="mdl-layout-title"></span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation">
                            {this.actionButton()}
                            {this.profilePhoto()}
                        </nav>
                    </div>
                    {this.newEventBtn()}
                </header>
                {this.userMenu()}
            </ReactCSSTransitionGroup>
        );
    }

}

export default Header;
