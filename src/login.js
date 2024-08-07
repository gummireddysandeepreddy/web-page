import React, { useState } from 'react';
//119.235.50.210
export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzCE2zUD1W9-VRkV3BQMXS7yGBLIyerTlNzMDYcgoPzxSqweRMROsD01xd8dmYJ-tL2/exec',{
                method:'Post',
                mode:'cors',
                headers:{'Content-Type':'text/plain',
                    'Access-Control-Request-Method':'POST'
                },
                body: JSON.stringify({email,password})
            });
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className='col-md-6 m-auto'>
            <div className='card card-body mt-5'>
            <h2 className='text-center'>Login</h2>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                <label>User ID</label>
                <input
                    type='text'
                    className='form-control'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                </div>
                <div className='form-group'>
                <label>Password</label>
                <input
                    type='password'
                    className='form-control'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                </div>
                <div className='form-group'>
                <button type='submit' className='btn btn-primary'>
                    Login
                </button>
                </div>
                <p>
                Don't have an account?
                </p>
            </form>
            </div>
        </div>
    );
}