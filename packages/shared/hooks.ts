import {useState} from 'react';

export const useTest = () => {
  const [state, setState] = useState(1);

  return [state, setState];
}
