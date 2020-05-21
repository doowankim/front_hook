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
    <div style={{padding: '20px'}}>
      <div
        style={{
          fontSize: '22px',
          color: 'rgb(77, 82, 86)',
          marginBottom: '15px',
        }}
      >
        Login
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label style={{fontSize: '18px', color: 'rgb(89, 89, 89)'}}>
              Email
            </label>
          </div>
          <input
            type="email"
            value={email}
            placeholder="example@gmail.com"
            style={{width: '300px', height: '25px'}}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <div style={{marginTop: '20px'}}>
            <label
              style={{
                fontSize: '18px',
                color: 'rgb(89, 89, 89)',
              }}
            >
              Password
            </label>
          </div>
          <input
            type="password"
            value={password}
            placeholder="*******"
            style={{width: '300px', height: '25px'}}
            onChange={onChangePassword}
          />
        </div>
        <button
          type="submit"
          style={{
            height: '2rem',
            marginTop: '20px',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Confirm
        </button>
        <Link
          to="/register"
          style={{textDecoration: 'none', color: '#9F765E', marginLeft: '5px'}}
        >
          If you don't have an email, Click here!
        </Link>
      </form>
    </div>
  );
};

export default Login;
