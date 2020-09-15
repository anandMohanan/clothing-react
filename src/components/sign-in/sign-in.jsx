import React from 'react';

/*import './styles.scss';*/
import FormInput from '../forminput/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth , signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer ,SignInTitle, ButtonsBarContainer } from './styles.jsx';

class SignIn extends React.Component{
     constructor(props){
       super(props);

       this.state={
        email:'',
        password:''
       }
      }

       handleSubmit = async event => {
          event.preventDefault();

          const { email , password } = this.state;

          try{
                await auth.signInWithEmailAndPassword(email,password);
                this.setState({email:'',password:''});
          }
          catch(error){
                console.log(error);
          }

          this.setState({email:'',password:''})
       };
       
       handleChange = event => {
        const { value, name } = event.target;
        
        this.setState({[name]:value})
       }
 
       render() {
        return (
         <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <span>Sign in with your email and adress</span>

          <form onSubmit={this.handleSubmit}>
           <FormInput 
                 name='email' 
                 type='email'
                 value={this.state.email}
                 label='email'
                 required
                 handleChange={this.handleChange} />
           
           <FormInput 
                 name='password'
                 type='password' 
                 value={this.state.password}
                 label='password' 
                 required
                 handleChange={this.handleChange} />
           
            <ButtonsBarContainer>
                  <CustomButton type='submit'>Sign In</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In With Google{' '}</CustomButton>
            </ButtonsBarContainer>
           
          </form>

         </SignInContainer>
        );
       }
} 


export default SignIn;