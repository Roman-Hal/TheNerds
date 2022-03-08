
import React from 'react';

const Form=() => {



// class Form extends React.Component {
//     state = {
//         firstName: '',
//         lastName: '',
//         username: '',
//         email: '',
//         password: '',

//     };
//        change = e => {
//             this.setState({
//               [e.target.name]: e.target.value
//             });
//           };

//       onSubmit = e => {
//         e.preventDefault();
//         console.log(this.state);
//       };
           
//         // function to update state of name with
//         // value enter by user in form

//         // function to update state of email with value
//         //function to update state of password with

       

//       render() {    
        
       return (
          <form>
            <input 
            name="firstName"
            placeholder="First name"
            value={this.state.firstName} 
             onChange={e => this.change(e)}
            />
            <br />
              <input
               name="lastName"
               placeholder="Last name"
               value={this.state.lastName} 
               onChange={e => this.change(e)}
             />
             <br />
                <input 
                name="username"
                placeholder="Username"
                value={this.state.username} 
                onChange={e => this.change(e)}
             />
             <br />     
                <input
                 name="email"
                 placeholder="Email"
                 value={this.state.email} 
                 onChange={e => this.change(e)}
             />
             <br/>
              <input 
               name="password"
               type="password"
               placeholder="Password"
               value={this.state.password} 
               onChange={e => this.change(e)}
             />
              <br />

              <button onClick={e => this.onSubmit(e)}>Submit</button>

          </form>
        );

}


  
       
  export default Form;
    