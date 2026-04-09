import React, { useRef, useState } from 'react';

const Form = () => {
    let mail = useRef();
    let [email, setEmail]= useState('');
    let [msg, setMsg] = useState('')
    let formHandler = (e)=>{
        e.preventDefault()
        // console.log(e);
    }
    let emailHandler = (e)=>{
        console.log(mail.current.value);
        if(mail.current.value.length<6){
            setMsg('cannot less than 6');
        }else{
            setMsg('');
        }
        setEmail(e.target.value)
    }
    return (
        <div className='container m-auto w-md'>
            <br />
            <form onSubmit={formHandler}>
                <label htmlFor="email" className='label'>Email</label>
                <br />
                <br />
                <input ref={mail} type="email" defaultValue={email} id='email' onChange={emailHandler} name='email' className='input' /> 
                <p className={`${msg ? '' : 'hidden'}`}>{msg}</p>
                <br /> <br />
                <button className='btn '>Submit</button>
            </form>
        </div>
    );
};

export default Form;