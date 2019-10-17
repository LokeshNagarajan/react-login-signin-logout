import React, {Component }  from 'react';
import Input from '../../UI-Elements/Input';
class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            LoginUSer: {
              name: '',
              password: ''
            }
          }
          this.handleFormSubmit = this.handleFormSubmit.bind(this);
          this.handleClearForm = this.handleClearForm.bind(this);

          this.handleUserName = this.handleUserName.bind(this);
          this.handlePassWord = this.handlePassWord.bind(this);
    }
    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
         // Form submission logic
    }
      handleClearForm() {
         // Logic for resetting the form
    }

    handleUserName(event) { 
        this.setState({
            LoginUSer: {
                name : event.target.value
            }
          }
        );
    } 

    handlePassWord(event) {
        this.setState({
            LoginUSer: {
                password : event.target.value
            }
          }
        );
    }
    render () {
        return (
           <div className="">
                <h1>Login</h1>
                <form onSubmit={this.submitFormHandler}>
                <Input type={'text'}
                    title= {'User Name'} 
                    name= {'Name'}
                    value={this.state.LoginUSer.name} 
                    placeholder = {'Enter your Name'}
                    handleChange = {this.handleUserName}
               />
                    <Input type={'password'}
                    title= {'Password'} 
                    name= {'Password'}
                    value={this.state.LoginUSer.password} 
                    placeholder = {'Enter your Password'}
                    handleChange = {this.handlePassWord}
               />
                    <button type="submit" onClick={this.handleFormSubmit}>submit</button>
                </form> 
           </div>
        )
    }  
}
export default Login;