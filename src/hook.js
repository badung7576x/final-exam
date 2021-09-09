import { useState } from 'react';

function useCustomHook(props) { 
  const [ list, setList ] = useState(props)

  const removeItem = (value) => {
    setList(list.filter(e => e !== value))
  }

  return [list, removeItem];
}

export default useCustomHook;
