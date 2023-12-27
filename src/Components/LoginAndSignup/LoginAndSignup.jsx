import { useState } from 'react';
import './LoginAndSignup.css';

const LoginAndSignup = () => {

    const [action, setAction] = useState("LOGIN");

    const [loginRequest, setLoginRequest] = useState({
        userId: '',
        password: ''
    });
 
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(loginRequest),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result.response);
    if(result.response !== 'success'){
        console.log('result.response');
        alert(result.response);
    }else{
        alert(result.response);
    }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginRequest((prevLoginRequest) => ({
            ...prevLoginRequest,
            [name]: value,
        }));
    };

    return (<div className='loginScreen'>
    <div id="card">
<div id="card-content">
  <div id="card-title">
  <h3>Easyee Buisness</h3>
    <h2>{action}</h2>
    <div className="underline-title"></div>
  </div>
  {action === "LOGIN" ? 
  <form method="post" className="form" onSubmit={handleFormSubmit}>
    <label htmlFor='userId'>User ID:</label>
    <input id='userId' className="form-content" type="text" name="userId" value={loginRequest.userId} onChange={handleInputChange} required />        
    <div className="form-border"></div>
    <label htmlFor="password" >&nbsp;Password</label>
    <input id='password' className="form-content" type="password" name="password" value={loginRequest.password} onChange={handleInputChange} required />        
    <div className="form-border"></div>
    <span>
        <legend id="forgot-pass">Forgot password?</legend>
    </span>
    <input id="submit-btn" type="submit" name="login" value="LOGIN" />
    <span className='info' onClick={() => setAction("SignUp")}>Don't have account yet?</span>
  </form> : 
  <form method="post" className="form">
  <label htmlFor="user-name">&nbsp;Full Name</label>
  <input id="user-name" className="form-content" type="text" name="fullname" autocomplete="on" required />
  <div className="form-border"></div>
  <label htmlFor="user-mail" >&nbsp;Mail Id</label>
  <input id="user-mail" className="form-content" type="email" name="email" required />
  <div className="form-border"></div>
  <label htmlFor="user-id">&nbsp;User Id</label>
  <input id="user-id" className="form-content" type="text" name="username" autocomplete="on" value='' required />
  <div className="form-border"></div>
  <label htmlFor="user-buisness" >&nbsp;Buisness Name</label>
  <select className="form-content" name="buisnessname" id="user-buisness">
    <option value="Buisness 1">Buisness 1</option>
    <option value="Buisness 2">Shoe Store</option>
    <option value="Buisness 3">Clothes Store</option>
    <option value="Buisness 4">Fashion Store</option>
</select>
  <div className="form-border"></div>
  <label htmlFor="user-buisness" >&nbsp;Role</label>
  <select className="form-content" name="buisnessname" id="user-buisness">
    <option value="Manager">Manager</option>
    <option value="Accountant">Accountant</option>
    <option value="Employee">Employee</option>
</select>
  <div className="form-border"></div>
  <label htmlFor="user-password">&nbsp;Password</label>
  <input id="user-password" className="form-content" type="password" name="password" autocomplete="on" required />
  <div className="form-border"></div>
  <label htmlFor="user-cnfpass">&nbsp;Confirm Password</label>
  <input id="user-cnfpass" className="form-content" type="cnfpass" name="cnfpass" autocomplete="on" required />
  <div className="form-border"></div>
  <input id="submit-btn" type="submit" name="submit" value="SignUp" />
  <span className='info' onClick={() => setAction("LOGIN")}>Click to login</span>
</form>
}
</div>
</div>
 </div>
);
};

export default LoginAndSignup;
