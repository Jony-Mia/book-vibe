import axios from 'axios'
export let UserData = async (userID)=> { 
  let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userID}`);
  return res.data
}