
import React from "react"
import { useAuth } from "../auth/auth.context";
import { Container, Row } from "react-bootstrap";
import { Navigate, Route, Routes } from 'react-router-dom';
import UserLogin from "./User/UserLogin";
import CurrentUser from './User/CurrentUser';
import User from "./User/User";

const Main = () => {
    const { isAuthenticated } = useAuth();

    return (<Container>
        <Row className="justify-content-md-center">
            <Routes>
                <Route path="/user/*" element={ isAuthenticated ? <User /> : <Navigate to='/' />} />
                <Route path='/' element={isAuthenticated ? <CurrentUser /> : <UserLogin />} />
            </Routes>
        </Row>
    </Container>);
}

export default Main;