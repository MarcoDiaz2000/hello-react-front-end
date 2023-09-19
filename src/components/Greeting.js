import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGreeting } from '../redux/actions';
import axios from 'axios';
import { fetchGreeting } from '../api/api'; 

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    fetchGreeting()
      .then(greeting => {
        dispatch(setGreeting(greeting));
      })
      .catch(error => {
        console.error("Hubo un error con la petición: ", error);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
