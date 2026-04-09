import { useState } from "react";

const useInput = (inputValue) => {
    const [input, setInput] = useState(inputValue);

    const inputHandler = (e)=>{
        setInput(e.target.value);
    }

    return [input, inputHandler]
};

export default useInput;