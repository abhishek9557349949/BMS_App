import { useState } from 'react';
import './LoginAndSignup.css';

const LoginAndSignup = () => {
    const [action, setAction] = useState("LOGIN");
     return (<div className='loginScreen'>
        <div id="card">
    <div id="card-content">
      <div id="card-title">
      <h3>Easyee Buisness</h3>
        <h2>{action}</h2>
        <div class="underline-title"></div>
      </div>
      {action === "LOGIN" ? 
      <form method="post" class="form">
        <label for="user-email">&nbsp;User Id</label>
        <input id="user-email" class="form-content" type="email" name="email" autocomplete="on" required />
        <div class="form-border"></div>
        <label for="user-password" >&nbsp;Password</label>
        <input id="user-password" class="form-content" type="password" name="password" required />
        <div class="form-border"></div>
        <span>
            <legend id="forgot-pass">Forgot password?</legend>
        </span>
        <input id="submit-btn" type="submit" name="login" value="LOGIN" />
        <span className='info' onClick={() => setAction("SignUp")}>Don't have account yet?</span>
      </form> : 
      <form method="post" class="form">
      <label for="user-name">&nbsp;Full Name</label>
      <input id="user-name" class="form-content" type="text" name="fullname" autocomplete="on" required />
      <div class="form-border"></div>
      <label for="user-mail" >&nbsp;Mail Id</label>
      <input id="user-mail" class="form-content" type="email" name="email" required />
      <div class="form-border"></div>
      <label for="user-id">&nbsp;User Id</label>
      <input id="user-id" class="form-content" type="text" name="username" autocomplete="on" value='' required />
      <div class="form-border"></div>
      <label for="user-buisness" >&nbsp;Buisness Name</label>
      <select class="form-content" name="buisnessname" id="user-buisness">
        <option value="Buisness 1">Buisness 1</option>
        <option value="Buisness 2">Shoe Store</option>
        <option value="Buisness 3">Clothes Store</option>
        <option value="Buisness 4">Fashion Store</option>
    </select>
      <div class="form-border"></div>
      <label for="user-buisness" >&nbsp;Role</label>
      <select class="form-content" name="buisnessname" id="user-buisness">
        <option value="Manager">Manager</option>
        <option value="Accountant">Accountant</option>
        <option value="Employee">Employee</option>
    </select>
      <div class="form-border"></div>
      <label for="user-password">&nbsp;Password</label>
      <input id="user-password" class="form-content" type="password" name="password" autocomplete="on" required />
      <div class="form-border"></div>
      <label for="user-cnfpass">&nbsp;Confirm Password</label>
      <input id="user-cnfpass" class="form-content" type="cnfpass" name="cnfpass" autocomplete="on" required />
      <div class="form-border"></div>
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
