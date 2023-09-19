export const setGreeting = (greeting) => {
  return {
    type: 'SET_GREETING',
    payload: greeting,
  };
};
