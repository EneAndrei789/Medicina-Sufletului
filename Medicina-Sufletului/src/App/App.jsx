import { useState } from 'react'
import './App.css'

export function App() {
    const handleClick = () => {
        console.log('Container clicked')
    };

    return (
        <div className='container' onClick={handleClick}>
            <div className='top'></div>
            <div className='bottom'></div>
                <div className='center'>
                    <h2>Sign In</h2>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <h2>&nbsp;</h2>
                </div>
        </div>
    )
};
