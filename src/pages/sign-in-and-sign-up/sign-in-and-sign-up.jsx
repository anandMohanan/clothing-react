import React from 'react';

import './styles.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInAndSignUp = () => (
      <div className="sign-in-and-sign-up"><SignIn /><SignUp /></div>
);

export default SignInAndSignUp;