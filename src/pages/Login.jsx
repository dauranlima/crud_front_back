import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Login() {

  const inputRef = useRef()


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="sm: h-[800px] lg:h-screen flex justify-center items-center bg-slate-800">
      <div className="max-w-md p-10 bg-white rounded shadow-md flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4 ">Sistema de Gestão</h2>
        <form className='flex flex-col w-60' onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Usuário:</span>
            <input
              type="text"
              ref={inputRef}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="block w-full p-2 px-3 text-sm text-gray-700 border border-black"
              placeholder="ex: admin"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700">Senha:</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="block w-full p-2 px-3 text-sm text-gray-700 border border-black"
              placeholder="senha..."
            />
          </label>
            <Link className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-center" to={'/'}>
            <button type="submit" >LOGIN</button>  
            </Link>
        </form>
      </div>
    </div>
  );
}