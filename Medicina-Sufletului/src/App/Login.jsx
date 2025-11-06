import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // minimal validation
        if (!email || !password) {
            alert('Please enter email and password')
            return
        }

        // TODO: perform real auth here. On success navigate to Home.
        navigate('/home')
    }

    return (
        <div className='container'>
            <div className='top'></div>
            <div className='bottom'></div>
            <div className='center'>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
                    <input
                        className='input-background'
                        type="email"
                        placeholder="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='input-background'
                        type="password"
                        placeholder="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='input-submit' type="submit">Submit</button>
                </form>
                <h2>&nbsp;</h2>
            </div>
        </div>
    )
};
