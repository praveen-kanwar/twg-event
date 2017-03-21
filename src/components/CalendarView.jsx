import React from 'react';
import ReactDOM from 'react-dom';

import BigCalendar from '../../node_modules/react-big-calendar';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import Card from './utils/Card';
import CardTitle from './utils/CardTitle';
import CardContent from './utils/CardContent';
import C from '../config/constants';
import '../../scss/app.scss';

BigCalendar.momentLocalizer(moment);

class CalendarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calevents: []
        };
    }

    componentDidMount() {
        console.log("CalendarView componentDidMount");
        let ref = C.FIREBASE.app().database().ref(`events`);
        ref.on('value', snapshot => {
          const store = snapshot.val();
          var obj = store;
          var arr = Object.keys(obj).map(function (key) { return obj[key]; });
          arr.forEach((event, index) => {
              arr[index].start = new Date(event.start);
              arr[index].end = new Date(event.end);
          });
          this.setState({
            calevents: arr
          });
        });
    }

    componentWillUnmount() {
        console.log("CalendarView componentWillUnmount");
    }

    render() {
        let content = null;
        content = (
            <div className="mdl-grid">
                <Card customClass="mdl-cell mdl-cell--12-col">
                    <CardTitle>
                        <div className="twg-text-with-icon">
                            <i className="material-icons">date_range</i>
                            Calendar View.
                        </div>
                    </CardTitle>
                    <CardContent>
                      <div className="App-calendar">
                        <BigCalendar
                          events={this.state.calevents}
                          defaultDate={new Date(2017, 3, 1)}
                          defaultView='month'/>
                      </div>
                    </CardContent>
                </Card>
            </div>
        );
        return content;
    }
}

export default CalendarView;
