import React from 'react';

import './styles.scss';
import FormInput from '../forminput/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
     constructor(props){
       super(props);

       this.state={
        email:'',
        password:''
       }
      }

       handleSubmit = event => {
          event.preventDefault();

          this.setState({email:'',password:''})
       };
       
       handleChange = event => {
        const { value, name } = event.target;
        
        this.setState({[name]:value})
       }
 
       render() {
        return (
         <div className='sign-in'>
          <h2 className='title'>I already have an account</h2>
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
           
            <div className='button'>
                  <CustomButton type='submit'>Sign In</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In With Google{' '}</CustomButton>
            </div>
           
          </form>

         </div>
        );
       }
} 


export default SignIn;