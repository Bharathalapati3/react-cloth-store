import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.util'

import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(){
        super()
        
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault();

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
         }
          catch(error){
              console.log(error)
          }
       
    }
    
    handleChange=(event)=>{
      const{name,value} = event.target;

      this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
               <h2>I already have an account </h2>
               <span className='title'>Sign in With your Email and Pasword</span>
               <form onSubmit={this.handleSubmit}>
                   <FormInput name='email' label='email' handleChange={this.handleChange} type='email' value={this.state.email} required />
                   
                   <FormInput name='password' label='password' handleChange={this.handleChange} type='password' value={this.state.password} required />

                   <div className ='buttons'>
                   <CustomButton type="submit">SIGN IN</CustomButton>
                   <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                   {' '}SIGN IN With Google {' '}</CustomButton>

                   </div>
                   
                   

               </form>

                </div>
        )
    }
}

export default SignIn;
