import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../service/user.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthentication] = useState(false);

    const navigate = useNavigate();

    const loginAction = async (userData, callback) => {
        const { statusCode, data } = await loginUser(userData);
        if (statusCode === 200) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('uid', data.id);
            setAuthentication(true);
            if( typeof callback === 'function') {
                callback(data);
            }
            
            navigate('/');
        } else {
            if( typeof callback === 'function') {
                callback(data);
            }
        }
    }

    const logoutAction = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        setAuthentication(false);
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, loginAction, logoutAction}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
};