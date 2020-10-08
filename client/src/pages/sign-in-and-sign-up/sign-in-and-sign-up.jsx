import React from 'react';

/*import './styles.scss';*/
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import { SignInAndSignUpContainer } from './styles';

const SignInAndSignUp = () => (
      <SignInAndSignUpContainer><SignIn /><SignUp /></SignInAndSignUpContainer>
);

export default SignInAndSignUp;