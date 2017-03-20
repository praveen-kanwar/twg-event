import { connect } from 'react-redux';
import NewEvent from '../components/NewEvent';

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        authStatus: state.auth.authStatus,
        dataLoading: state.dataLoading
    };
};

const NewEventContainer = connect(mapStateToProps)(NewEvent);

export default NewEventContainer;
