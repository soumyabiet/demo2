import { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './assets/css/App.css';
import Header from './components/Header/Header';
import CurrentUser from './components/User/CurrentUser';
import User from './components/User/User';
import { loginUser } from "./service/user.service";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [userData, setUserData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const appLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
    setLogin(false);
    navigate('/');
  }

  const submitData = async (userData) => {
    const { statusCode, data } = await loginUser(userData);
    if (statusCode === 200) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('uid', data.id);
      setLogin(true);
      navigate('/user/list');
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogin(true);
    }
  }, [isLogin])

  return (
    <>

      <Header isLogin={isLogin} appLogout={appLogout}></Header>
      <Container>
        <Row className="justify-content-md-center">
          {!isLogin ? (
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" onChange={handleChange} name="username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" />
              </Form.Group>

              <Button variant="primary" onClick={() => submitData(userData)} >
                Submit
              </Button>
            </Form>) : (
            <>
              <Routes>
                <Route path="/user/*" element={<User />} />
                <Route path='/' element={<CurrentUser />} />
              </Routes>
            </>
          )}
        </Row></Container>

    </>
  );
}

export default App;
