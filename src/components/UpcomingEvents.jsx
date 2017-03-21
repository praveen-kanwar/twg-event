import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Card from './utils/Card';
import CardTitle from './utils/CardTitle';
import CardContent from './utils/CardContent';
import EventListItem from './subcomponents/EventListItem';
import C from '../config/constants';

const divider = (
  <Divider inset={true} />
);

const muiTheme = getMuiTheme({
  overlay: {
    backgroundColor: '#00FFFFFF'
  },
  tooltip: {
    color: '#000000',
    rippleBackgroundColor: '#00FFFFFF'
  }
});

class UpcomingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingEvents: []
        };
    }

    componentDidMount() {
        console.log("UpcomingEvents componentDidMount");
        let ref = C.FIREBASE.app().database().ref(`events`);
        ref.on('value', snapshot => {
          const store = snapshot.val();
          var obj = store;
          var arr = Object.keys(obj).map(function (key) { return obj[key]; });
          arr.forEach((event, index) => {
              arr[index].id = index;
              arr[index].start = new Date(event.start);
              arr[index].end = new Date(event.end);
          });
          console.log(JSON.stringify(arr));
          this.setState({
              upcomingEvents: arr
          });
        });
    }

    render() {
        let content = null;

        content = (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="mdl-grid">
                    <Card customClass="mdl-cell mdl-cell--12-col">
                        <CardTitle>
                            <div className="twg-text-with-icon">
                                <i className="material-icons">event</i>
                                Upcoming Events.
                            </div>
                        </CardTitle>
                        <CardContent>
                            <List>
                              {this.state.upcomingEvents.map((eventObj) => {
                                return (
                                  <div key={eventObj.id}>
                                  <EventListItem eventObject={eventObj}/>
                                    {divider}
                                  </div>
                                )
                              })}
                            </List>
                        </CardContent>
                    </Card>
                </div>
            </MuiThemeProvider>
        );

        return content;
    }
}

export default UpcomingEvents;
