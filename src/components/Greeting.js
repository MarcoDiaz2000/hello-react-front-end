// Greeting.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGreeting } from './actions';
import { fetchGreeting } from './api/api';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    const getGreetingFromAPI = async () => {
      const fetchedGreeting = await fetchGreeting();
      dispatch(setGreeting(fetchedGreeting));
    };
    
    getGreetingFromAPI();
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
