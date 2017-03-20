import { connect } from 'react-redux';
import CalendarView from '../components/CalendarView';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    authStatus: state.auth.authStatus,
    dataLoading: state.dataLoading
  };
};

const CalendarEventsContainer = connect(mapStateToProps)(CalendarView);

export default CalendarEventsContainer;
