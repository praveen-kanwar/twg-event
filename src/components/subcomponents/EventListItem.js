import React, { Component } from 'react';
import { ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Moment from 'react-moment';
import RightIconButton from './RightIconButton';
import * as GlobalFunctions from '../../config/functions';

var eventObject = null;

ListItem.defaultProps.disableTouchRipple = true;
ListItem.defaultProps.disableFocusRipple = true;

class EventListItem extends Component {

  constructor(props) {
      super(props);
    }

  render () {
    eventObject = this.props.eventObject;
    return (
        <ListItem
            disableTouchRipple = {true}
            disableFocusRipple = {true}
            leftAvatar={<Avatar src={eventObject.avatar} />}
            rightIconButton={
              <div className="fixed-menu" >
              <RightIconButton eventId={eventObject.id} />
              </div>
            }
            primaryText={
              <div>
                <b>{eventObject.title}</b>
                <secondaryText> (created by - {eventObject.created_by})</secondaryText>
              </div>
            }
            secondaryText={
                <div>
                  <b>When: </b>
                  <Moment format="MMMM Do, YYYY">{eventObject.start}</Moment>
                  <b>  </b>
                  <Moment format="hh:mm a">{eventObject.start}</Moment>
                  <b> - </b>
                  <Moment format="hh:mm a">{eventObject.end}</Moment>
                  <br/>
                  <b>Venue: </b>
                  {GlobalFunctions.getVenue(eventObject.venue)}
                </div>
              }
            secondaryTextLines={2}
          />
    )
  }

}

export default EventListItem;
