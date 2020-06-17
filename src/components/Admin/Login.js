import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import useInputs from '../custom/useInputs';
import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components';

const Login = () => {
  const [state, onChange] = useInputs({
    email: '',
    password: '',
  });
  const {email, password} = state;
  const history = useHistory();
  const routeChange = () => {
    let path = '/register';
    history.push(path);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const loginUser = {
      email: state.email,
      password: state.password,
    };
    console.log(loginUser);
  };

  const responseFacebook = () => {
    console.log('responseFacebook');
  };
  return (
    <Container>
      <LoginBox>
        <Header>Login</Header>
        <form onSubmit={onSubmit}>
          <div>
            <div>
              <Label>Email</Label>
            </div>
            <Input
              name="email"
              type="email"
              value={email}
              placeholder="example@gmail.com"
              onChange={onChange}
            />
          </div>
          <div>
            <Wrapper>
              <Label>Password</Label>
            </Wrapper>
            <Input
              name="password"
              type="password"
              value={password}
              placeholder="*******"
              onChange={onChange}
            />
          </div>
          <Button type="submit">Confirm</Button>
          <SLink to="/register">If you don't have an email, Click here!</SLink>
          <div>
            <button onClick={routeChange}>Page Route</button>
          </div>
          <Divider></Divider>
          <SocialButton>
            <FacebookLogin
              appId="386257415464246"
              textButton="Facebook"
              fields="name,email,picture"
              callback={responseFacebook}
            />
          </SocialButton>
        </form>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const LoginBox = styled.div`
  padding: 70px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  font-size: 22px;
  color: rgb(77, 82, 86);
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  border: none;
  height: 40px;
  font-size: 18px;
  color: #003764;
  width: 100%;
  vertical-align: middle;
  border-bottom: 1px solid #cdd3e4;
  border-radius: 0;
  padding: 14px 0 0 0;
`;

const Label = styled.label`
  font-size: 14px;
  color: rgb(89, 89, 89);
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  min-height: 56px;
  line-height: 1;
  background-color: #0077c8;
  margin: 20px auto 0 auto;
  margin-bottom: 20px;
  font-size: 14px;
  color: white;
  cursor: pointer;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #9f765e;
  padding-left: 60px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px #bac0cd dotted;
`;

const SocialButton = styled.div`
  margin-top: 10px;
`;

export default Login;
