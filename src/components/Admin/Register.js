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
            type="name"
            value={name}
            placeholder="Input your name"
            style={{width: '300px', height: '20px', marginTop: '10px'}}
            onChange={onChangeName}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder="Input your password"
            style={{width: '300px', height: '20px', marginTop: '10px'}}
            onChange={onChangePassword}
          />
        </div>
        <div>
          <input
            type="password"
            value={password2}
            placeholder="Confirm Password"
            style={{width: '300px', height: '20px', marginTop: '10px'}}
            onChange={onChangePassword2}
          />
        </div>
        <button type="submit">Confirm</button>
      </form>
      <Link to="/login" style={{textDecoration: 'none', color: '#9F765E'}}>
        If you have an email, Click here!
      </Link>
    </div>
  );
};

export default Register;
