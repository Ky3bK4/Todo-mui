import React, {useState} from "react";

 const useInput = (initialState = '') => {
  const [value, setValue] = useState(initialState)

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return {
    value, changeHandler, setValue
  }
}

export default useInput