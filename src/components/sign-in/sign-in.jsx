import React , { useState } from 'react';


/*import './styles.scss';*/
import FormInput from '../forminput/form-input';
import CustomButton from '../custom-button/custom-button';

import { SignInContainer ,SignInTitle, ButtonsBarContainer } from './styles.jsx';
import { googleSignInStart , emailSignInStart } from '../../redux/user/actions';
import { connect } from 'react-redux';

const SignIn = ({googleSignInStart,emailSignInStart}) => {

      const [userCredentials , setCredentials] = useState({ email:'', password:''})

      const { email , password } = userCredentials;
 const handleSubmit = async event => {
          event.preventDefault();
          emailSignInStart(email,password)

          setCredentials({email:'',password:''})
       };
       
 const handleChange = event => {
        const { value, name } = event.target;
        
        setCredentials({ ...userCredentials,  [name]:value})
       }
        return (
         <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <span>Sign in with your email and adress</span>

          <form onSubmit={handleSubmit}>
           <FormInput 
                 name='email' 
                 type='email'
                 value={email}
                 label='email'
                 required
                 handleChange={handleChange} />
           
           <FormInput 
                 name='password'
                 type='password' 
                 value={password}
                 label='password' 
                 required
                 handleChange={handleChange} />
           
            <ButtonsBarContainer>
                  <CustomButton type='submit'>Sign In</CustomButton>
                  <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>{' '}Sign In With Google{' '}</CustomButton>
            </ButtonsBarContainer>
           
          </form>

         </SignInContainer>
        );
       
} 

const mapDispatchToProps = dispatch => ({
      googleSignInStart: () => dispatch(googleSignInStart()),
      emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);