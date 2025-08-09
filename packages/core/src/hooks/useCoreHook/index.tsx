import { useState } from 'react';

const useCoreHook = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return { count, countHandler };
};

export default useCoreHook;
