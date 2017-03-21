import React, {PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link, browserHistory} from 'react-router';

import C from '../config/constants';
import DialogContainer from '../containers/DialogContainer';
import HeaderContainer from '../containers/HeaderContainer';
import Spinner from './utils/Spinner';

require('../../scss/app.scss');

class App extends React.Component {

    static propTypes() {
        return {
          uid: PropTypes.string,
          authStatus: PropTypes.string.isRequired,
          userName: PropTypes.string};
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    pageContent() {
        let content = <Spinner/>;
        if (!this.props.dataLoading) {
            content = (
                <ReactCSSTransitionGroup
                  component="div"
                  transitionName="twg-transition"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                  transitionAppear={true}>
                    {this.props.children}
                </ReactCSSTransitionGroup>
            );
        }
        return content;
    }

    render() {
        let extraClass = '';
        let content = null;

        if (this.props.authStatus !== C.LOGGED_IN) {
            extraClass = "twg-anon";
        }

        if (this.props.authStatus === C.LOGGING_IN) {
            content = <Spinner/>;
        } else {
            content = (
                <div className={`mdl-layout mdl-js-layout layout--fixed-header ${extraClass}`}>
                    <HeaderContainer/>

                    <main className="mdl-layout__content">
                        <div className="twg-page-content page-content">
                            {this.pageContent()}
                        </div>

                    </main>

                    <footer className="twg-footer">
                        © TWG Events 2017. Support:
                        <a href="mailto:mbambra@theworkinggroup.ca">mbambra@theworkinggroup.ca</a>
                    </footer>

                    <DialogContainer/>
                </div>
            );
        }

        return content;
    }
};

export default App;
