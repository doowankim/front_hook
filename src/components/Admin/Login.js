import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const loginUser = {
      email: email,
      password: password,
    };
    console.log(loginUser);
  };
  return (
    <div style={{fontSize: '20px'}}>
      <div>Login</div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="email"
            value={email}
            placeholder="example@gmail.com"
            style={{width: '300px', height: '20px'}}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder="*******"
            style={{width: '300px', height: '20px', marginTop: '10px'}}
            onChange={onChangePassword}
          />
        </div>
        <button type="submit">Confirm</button>
      </form>
      <Link to="/register" style={{textDecoration: 'none', color: '#9F765E'}}>
        If you don't have an email, Click here!
      </Link>
    </div>
  );
};

export default Login;
