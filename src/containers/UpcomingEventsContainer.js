import { connect } from 'react-redux';
import UpcomingEvents from '../components/UpcomingEvents';

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        authStatus: state.auth.authStatus,
        dataLoading: state.dataLoading
    };
};

const UpcomingEventsContainer = connect(mapStateToProps)(UpcomingEvents);

export default UpcomingEventsContainer;
