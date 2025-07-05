import axios from 'axios'
import React, { useState } from 'react'
import {backendUrl} from '../App'

const Login = ({setToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', {email,password});
            // console.log(response);
            if(response.data.success) { //this line u can understand from console.log(response)
                setToken(response.data.token); //this line u can understand from console.log(response)
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full'>
            <div className='bg-white shadow-lg rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input onChange={(e)=> setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-400 outline-none' type="email" placeholder='your@email.com' required />
                    </div>

                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input onChange={(e)=> setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-400 outline-none' type="password" placeholder='Enter your password' required />
                    </div>

                    <button className='bg-black text-white w-full px-4 py-2 rounded-md mt-2' type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
