import { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './assets/css/App.css';
import Header from './components/Header/Header';
import CurrentUser from './components/User/CurrentUser';
import User from "./components/User/User";
import UserLogin from './components/User/UserLogin'
import { loginUser } from "./service/user.service";

function App() {
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();

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
          {!isLogin ? <UserLogin loginCallback={submitData} /> : (
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
