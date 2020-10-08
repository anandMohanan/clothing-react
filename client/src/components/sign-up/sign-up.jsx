/*import React from 'react';

import './styles.scss';
import FormInput from '../forminput/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth , createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component{
 constructor(){
  super();
  this.state= {
   displayName: '',
   email: '',
   password: '',
   confirmPassword: ''
  }
 }

    handleSubmit = async event =>{
        event.preventDefault();
        const{ displayName , email , password , confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password does not match");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            
        }
        
        catch(error){
            console.log(error);
        }
    };

    handleChange = event => {
        const {name,value} = event.target;

        this.setState({[name]:value})
    }
    render(){
        const{ displayName , email , password , confirmPassword} = this.state;
        return(
            <div className="sign-ip">
                <h2 className="title">
                    I do not have a account
                </h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                    type='email'
                    name='Email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />

                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />

                     <FormInput
                    type='password'
                    name='Password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />

                    <CustomButton type='submit'>
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;*/

import React , { useState } from 'react';

import FormInput from '../forminput/form-input';
import CustomButton from '../custom-button/custom-button';



/*import './styles.scss';*/
import { SignUpContainer , SignUpTitle } from './styles';

import { signUpStart } from '../../redux/user/actions';
import { connect } from 'react-redux';

const SignUp = ({signUpStart}) => {
  
  const [userCredentials,setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
})
  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({displayName,email,password})

    
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials , [name]: value });
  };

    const { displayName, email, password, confirmPassword } = userCredentials;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }

  const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials)) 
  })

export default connect(null,mapDispatchToProps)(SignUp);