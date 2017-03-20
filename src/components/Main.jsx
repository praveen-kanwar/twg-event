import React, {PropTypes} from 'react';
import {Line} from 'react-chartjs';

import C from '../config/constants';
import Home from './Home';
import NewEventContainer from '../containers/NewEventContainer';
import {demoDataset, demoChartOptions} from '../data/demoData';

class Main extends React.Component {
    static propTypes() {
        return {authStatus: PropTypes.string.isRequired};
    }

    render() {
        let content = null;
        if (this.props.authStatus === C.LOGGED_IN) {
            content = (<NewEventContainer/>);
        } else {
            content = (
                <div className="twg-home-anonymous">
                    <Line
                      options={demoChartOptions}
                      data={demoDataset}
                      width="2400"
                      height="1200"/>
                    <Home/>
                </div>
            );
        }

        return content;
    }
}

export default Main;
