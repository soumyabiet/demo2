import { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import Header from './components/Header/Header';
import CurrentUser from './components/User/CurrentUser';
import User from "./components/User/User";
import UserLogin from './components/User/UserLogin'
import { AuthProvider } from "./auth/auth.context";

function App() {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogin(true);
    }
  }, [isLogin])

  return (
    <>
      <AuthProvider>
        <Header />
        <Container>
          <Row className="justify-content-md-center">
            {!isLogin ? <UserLogin /> : (
              <>
                <Routes>
                  <Route path="/user/*" element={<User />} />
                  <Route path='/' element={<CurrentUser />} />
                </Routes>
              </>
            )}
          </Row>
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;
