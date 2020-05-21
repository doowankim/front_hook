import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const registerUser = {
      email: email,
      name: name,
      password: password,
      password2: password2,
    };
    console.log(registerUser);
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
        Register
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
              Name
            </label>
          </div>
          <input
            type="name"
            value={name}
            placeholder="Input your name"
            style={{width: '300px', height: '25px'}}
            onChange={onChangeName}
          />
        </div>
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
        <div>
          <input
            type="password"
            value={password}
            placeholder="Input your password"
            style={{width: '300px', height: '25px'}}
            onChange={onChangePassword}
          />
        </div>
        <div style={{marginTop: '20px'}}>
          <label
            style={{
              fontSize: '18px',
              color: 'rgb(89, 89, 89)',
            }}
          >
            Confirm Password
          </label>
        </div>
        <div>
          <input
            type="password"
            value={password2}
            placeholder="Confirm Password"
            style={{width: '300px', height: '25px'}}
            onChange={onChangePassword2}
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
          to="/login"
          style={{textDecoration: 'none', color: '#9F765E', marginLeft: '5px'}}
        >
          If you have an email, Click here!
        </Link>
      </form>
    </div>
  );
};

export default Register;
