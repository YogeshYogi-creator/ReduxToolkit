import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './toolkit/userApiSlice';
import { loginAction } from './toolkit/userSlice';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const data = useSelector((state) => state.userApiData.data);
    const loading = useSelector((state) => state.userApiData.loading);
    const error = useSelector((state) => state.userApiData.error);

    const handleNameChange = (e) => setName(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            age: age,
            email: email,
        }
        console.log({ formData });
        dispatch(loginAction(formData))
    }

    useEffect(() => {
        dispatch(fetchData(1));
    }, [])

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name='name' type='text' placeholder='name' onChange={(e) => handleNameChange(e)} autoComplete='off' />
                <input name='age' type='text' placeholder='age' onChange={(e) => handleAgeChange(e)} autoComplete='off' />
                <input name='email' type='email' placeholder='email' onChange={(e) => handleEmailChange(e)} autoComplete='off' />
                <input type='submit' />
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <p>Data: {JSON.stringify(data)}</p>}
        </>
    )
}

export default LoginForm