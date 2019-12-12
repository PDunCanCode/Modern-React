import React, { useState } from 'react';

export default function LoginPlain() {
    const [username, setUsername] = useState()
    const onSubmit = async e => {
        e.preventDefault();

        alert('todo');
    };
    return (
        <div className="App">
            <div className="login-container">
                <form classNAme="form" onSubmit={onSubmit}>
                    <p>Please Login!</p>
                    <input type="text" placeholder="username" />
                    <input 
                    type="password"
                    placeholder="passwprd"
                    autoComplete="new-password"
                    />
                    <button className="submit" type="submit">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
    
} 