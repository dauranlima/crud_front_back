import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <div className="max-w-md w-full p-4 bg-white rounded shadow-md flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4 ">Sistema de Gestão</h2>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Usuário:</span>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="block w-full p-2 pl-10 text-sm text-gray-700 border border-black"
              placeholder="ex: jonas.lima"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700">Senha:</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="block w-full p-2 pl-10 text-sm text-gray-700 border border-black"
              placeholder="senha..."
            />
          </label>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            <Link to={'/'}>
            LOGIN
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}