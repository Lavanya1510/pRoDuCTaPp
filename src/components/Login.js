import React, { Component } from 'react';
import axios from 'axios';

export class Login extends Component {
    constructor() {
        super()
        this.state={
       email:"",
       password:"",
       token:""
        }
   }
   
    handlesubmit=(event)=>{
        event.preventDefault();
        const input =event.target;
        const value = input.value;
        this.setState({[input.name]: value});
         
        const { email, password} = this.state;
        const userInfo = {email,password
        }
        axios.post('http://13.235.9.227:3000/adminLogin', userInfo)
        .then(response => {
            const { token } = response.data;
            console.log(response)
            localStorage.setItem("token", response.data.token);
            this.setState({
                 token 
            });
            this.props.history.push('/home')
        })

    }
    
    render() {
        return (
                 <div>
            <div class="page-loader">
              <div class="bg-primary"></div>
            </div>
        <div class="authentication-wrapper authentication-1 px-4">
            <div class="authentication-inner py-5">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="ui-w-60">
                        <div class="w-100 position-relative">
                            <img src="assets/img/logo-dark.png" alt="Brand Logo" class="img-fluid" />
                        </div>
                    </div>
                </div>
      
                <form class="my-5" >
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="text" name="email" class="form-control" value={this.state.email} onChange={this.handlesubmit}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label d-flex justify-content-between align-items-end">
                            <span>Password</span>
                            <a href="pages_authentication_password-reset.html" class="d-block small">Forgot password?</a>
                        </label>
                        <input type="password" name="password" class="form-control" value={this.state.password} onChange={this.handlesubmit}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center m-0">
                        <label class="custom-control custom-checkbox m-0">
                            <input type="checkbox" class="custom-control-input" />
                            <span class="custom-control-label">Remember me</span>
                        </label>
                        <button type="button" class="btn btn-primary" onClick={this.handlesubmit}>Sign In</button>
                    </div>
                </form>
                <div class="text-center text-muted">
                    Don't have an account yet?
                    <a href="pages_authentication_register-v1.html">Sign Up</a>
                </div>
      
            </div>
        </div>
        </div>
          
        )
    }
}

export default Login
