import "../App.css"
import React, { useEffect, useRef, useState } from 'react';

const LoginComponent = (props) => {
    const [userInfo, setUserInfo] = useState({
        email: "",
    })

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (event) => {
        event.preventDefault()
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addUserInfo(userInfo)
        setUserInfo({ email: "" })
    }
    
    return (
        <div className="LoginHeader">
            <form onSubmit={handleSubmit}>
                <label className='label'>
                    <input ref={inputRef} type="text" name='email' placeholder='Enter an email' value={userInfo.email} onChange={handleChange} className="InputArea"/>
                </label>
                <input type="submit" value="Login" className="LoginButton"/>
            </form >
        </div>
    );
};

export default LoginComponent;