import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});

export const fetchGreeting = async () => {
  const { data } = await instance.get('/greetings/random');
  return data.greeting;
};
