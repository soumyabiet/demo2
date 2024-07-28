import axios from './axiosConfig';

const getPostData = async () => {
  let res = await axios.get('/posts' )
  let result = await res.data;
  return result;
}
const getPostComment = async (id) => {
  let res = await axios.get('/posts/'+id+'/comments' )
  let result = await res.data;
  return result;
}

export {getPostData,getPostComment}
