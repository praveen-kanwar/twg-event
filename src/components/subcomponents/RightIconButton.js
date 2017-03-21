import React, { Component } from 'react';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

class RightIconButton extends Component {

  constructor(props) {
      super(props);
      console.log(this.props)
  }

  click(value,value2) {
         alert(`${value2} for event ${value}`);
  }

  render () {
    return (
        <IconMenu iconButtonElement={iconButtonElement}>
          <MenuItem onClick={this.click.bind(this,this.props.eventId,"Yes")}>Yes</MenuItem>
          <MenuItem onClick={this.click.bind(this,this.props.eventId,"No")}>No</MenuItem>
          <MenuItem onClick={this.click.bind(this,this.props.eventId,"Maybe")}>Maybe</MenuItem>
        </IconMenu>
    )
  }

}

export default RightIconButton;
