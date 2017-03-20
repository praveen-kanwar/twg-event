import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import Button from './utils/Button';
import C from '../config/constants';
import Card from './utils/Card';
import CardAction from './utils/CardAction';
import CardContent from './utils/CardContent';
import CardTitle from './utils/CardTitle';

const LoginForm = ({ authStatus, onLoginBtnClick }) => {
  let content = null;

  if (authStatus !== C.LOGGED_IN) {
    content = (
      <Card customClass="twg-login-form mdl-shadow--2dp">
        <CardTitle>
          <div className="mdl-typography--display-2 mdl-typography--font-thin twg-util__full-width">
            TWG Events
          </div>
        </CardTitle>
        <CardTitle>
          <div className="mdl-typography--headline mdl-typography--font-thin twg-util__full-width">
            A real-time Events platform for TWG.
          </div>
        </CardTitle>
        <CardAction>
          <Button onClick={ (e) => onLoginBtnClick(e, 'google') }>
            Login with Google
          </Button>
          <Button onClick={ (e) => onLoginBtnClick(e, 'facebook') }>
            Or Facebook
          </Button>
        </CardAction>
      </Card>
    );
  }

  return content;
};

LoginForm.propTypes = {
  authStatus: PropTypes.string.isRequired,
  onLoginBtnClick: PropTypes.func.isRequired
};

export default LoginForm;
