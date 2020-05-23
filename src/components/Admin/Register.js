import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
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
    // <Container>
    //   <RegisterBox>
    //     <Header>Register</Header>
    //     <form onSubmit={onSubmit}>
    //       <div>
    //         <div>
    //           <Label>Email</Label>
    //         </div>
    //         <Input
    //           name="email"
    //           type="email"
    //           value={email}
    //           placeholder="example@gmail.com"
    //           onChange={onChange}
    //         />
    //       </div>
    //       <div>
    //         <Wrapper>
    //           <Label>Name</Label>
    //         </Wrapper>
    //         <Input
    //           name="name"
    //           type="name"
    //           value={name}
    //           placeholder="Input your name"
    //           onChange={onChange}
    //         />
    //       </div>
    //       <Wrapper>
    //         <Label>Password</Label>
    //       </Wrapper>
    //       <div>
    //         <Input
    //           name="password"
    //           type="password"
    //           value={password}
    //           placeholder="Input your password"
    //           onChange={onChange}
    //         />
    //       </div>
    //       <Wrapper>
    //         <Label>Confirm Password</Label>
    //       </Wrapper>
    //       <div>
    //         <Input
    //           name="password2"
    //           type="password"
    //           value={password2}
    //           placeholder="Confirm Password"
    //           onChange={onChange}
    //         />
    //       </div>
    //       <Button type="submit">Register</Button>
    //       <Divider></Divider>
    //       <SLink to="/login">If you have an email, Click here!</SLink>
    //     </form>
    //   </RegisterBox>
    // </Container>

    <Container>
      <RegisterBox>
        <Header>Register</Header>
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
              <Label>name</Label>
            </Wrapper>
            <Input
              name="name"
              type="name"
              value={name}
              placeholder="Input your name"
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
          <div>
            <Wrapper>
              <Label>Confirm Password</Label>
            </Wrapper>
            <Input
              name="password2"
              type="password"
              value={password2}
              placeholder="*******"
              onChange={onChange}
            />
          </div>
          <Button type="submit">Confirm</Button>
          <SLink to="/login">If you have an email, Click here! </SLink>
        </form>
      </RegisterBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const RegisterBox = styled.div`
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
  padding-left: 80px;
`;

export default Register;
