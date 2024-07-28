import API from '../config/axios.config';

const getCurrentUser = async () => {
  try {
    let response  = await API.get('/users/current');
    return {
      statusCode : response.status,
      data: response.data
    };
  } catch({ response }) {
    return {statusCode : response.status, data : response.data};
  }
}
const addUserData = async (userData) => {
  
  try {
    let response  = await API.post('/users/register', userData);
    return {
      statusCode : response.status,
      data: response.data
    };
  } catch({ response }) {
    return {statusCode : response.status, data : response.data};
  }

}
const getUserList = async () => {
  try {
    let response  = await API.get('/users');
    return {
      statusCode : response.status,
      data: response.data
    };
  } catch({ response }) {
    return {statusCode : response.status, data : response.data};
  }
}
const loginUser = async (userData) => {
 
  try {
    let response  = await API.post('/users/authenticate', userData);
    return {
      statusCode : response.status,
      data: response.data
    };
  } catch({ response }) {
    return {statusCode : response.status, data : response.data};
  }
  
}

export { getCurrentUser, addUserData, loginUser, getUserList};
