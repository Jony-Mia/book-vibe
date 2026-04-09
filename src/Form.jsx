import React from 'react';
import useInput from './Hook/useInput';

const Form = () => {
    let [text, onText] = useInput('');

    const changer =(e)=>{
        onText(e.target.value)
        console.log(text);
    }
    return (
        <div>
            <form>
                <input type="text" className='input' defaultValue={text} onChange={changer} />
            </form>
        </div>
    );
};

export default Form;