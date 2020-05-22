import React from 'react';
import {Link} from 'react-router-dom';
import useInputs from '../custom/useInputs';

const Register = () => {
  const [state, onChange] = useInputs({
    email: '',
    name: '',
    password: '',
    password2: '',
  });
  const {email, name, password, password2} = state;

  const onSubmit = (e) => {
    e.preventDefault();

    const registerUser = {
      email: state.email,
      name: state.name,
      password: state.password,
      password2: state.password2,
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
            name="email"
            type="email"
            value={email}
            placeholder="example@gmail.com"
            style={{width: '300px', height: '25px'}}
            onChange={onChange}
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
            name="name"
            type="name"
            value={name}
            placeholder="Input your name"
            style={{width: '300px', height: '25px'}}
            onChange={onChange}
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
            name="password"
            type="password"
            value={password}
            placeholder="Input your password"
            style={{width: '300px', height: '25px'}}
            onChange={onChange}
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
            name="password2"
            type="password"
            value={password2}
            placeholder="Confirm Password"
            style={{width: '300px', height: '25px'}}
            onChange={onChange}
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
