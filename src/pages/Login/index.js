import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }){
    const [email, setEmail] = useState('');

    async function handleSubmit(e){
      e.preventDefault();
  
      const res = await api.post('/sessions', {email});
  
      const { _id } = res.data;
  
      localStorage.setItem('user', _id);
      
      history.push('/dashboard');
  
    }
    return (
        <>
            <p>Ofereça <strong>spots</strong> para programadores e encontre talentos para sua empresa </p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email *</label>
            <input 
                type="email" 
                id="email" 
                value={email}
                placeholder="seu melhor email"
                onChange={e=> setEmail(e.target.value)}
            />
            <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )

}