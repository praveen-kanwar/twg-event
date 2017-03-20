import { connect } from 'react-redux';
import Header from '../components/Header';
import { logout } from '../actions/actions';
import history from '../history/history';

import C from '../config/constants';

const mapStateToProps = (state, ownProps) => {
  return {
    authStatus: state.auth.authStatus,
    photoURL: state.auth.photoURL,
    userName: state.auth.userName,
    email: state.auth.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: e => {
      console.log(e);
      e.preventDefault();
      C.FIREBASE.auth().signOut().then(() => {
        dispatch(logout());
        location.reload();
      });
    }
  };
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
