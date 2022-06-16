import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingsFromAPI } from '../redux/greetings/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store);

  const colors = ['crimson', 'blue', 'darkgreen', 'indigo', 'teal'];

  useEffect(() => {
    dispatch(getGreetingsFromAPI());
  }, []);

  return (
    messages.greetings.length > 0
    && messages.greetings.map((msg) => (
      <h1 key={msg.id} className={colors[msg.id - 1]}>
        {msg.message}
      </h1>
    ))
  );
};

export default Greeting;
