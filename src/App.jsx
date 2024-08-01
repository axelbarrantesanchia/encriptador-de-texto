import React, { useState } from 'react';
import './index.css';
import astronauta from './assets/Astronauta.png';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const Cambio = (event) => {
    setText(event.target.value);
  };

  const Encriptar = () => {
    let encriptarTexto = text.split('').map(char => {
      if (char === 'e') return 'enter';
      if (char === 'i') return 'imes';
      if (char === 'a') return 'ai';
      if (char === 'o') return 'ober';
      if (char === 'u') return 'ufat';
      return char;
    }).join('');
    setResult(encriptarTexto);
  };

  const Desencriptar = () => {
    let desencriptarTexto = text;
    desencriptarTexto = desencriptarTexto.replace(/enter/g, 'e');
    desencriptarTexto = desencriptarTexto.replace(/imes/g, 'i');
    desencriptarTexto = desencriptarTexto.replace(/ai/g, 'a');
    desencriptarTexto = desencriptarTexto.replace(/ober/g, 'o');
    desencriptarTexto = desencriptarTexto.replace(/ufat/g, 'u');
    setResult(desencriptarTexto);
  };


  const Copiar = () => {
    navigator.clipboard.writeText(result).then(() => {
      alert('Texto copiado al portapapeles');
    }).catch((err) => {
      console.error('Error al copiar el texto: ', err);
    });
  };

  return (
    <main className="bg-black min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row p-20 rounded-lg shadow-lg w-full max-w-full">
        <section className="md:w-1/2 p-4">
          <textarea
            className="w-full h-64 p-4 border rounded"
            value={text}
            onChange={Cambio}
            placeholder="Ingrese el texto aquí"
          />
          <p className="mt-2 text-gray-500">Solo letras minúsculas y sin acentos</p>
          <div className="flex space-x-4 mt-4">
            <button 
              onClick={Encriptar}
              className="px-4 py-2 border rounded text-white bg-gray-600 hover:bg-gray-700"
            >
              Encriptar
            </button>
            <button 
              onClick={Desencriptar}
              className="px-4 py-2 border rounded text-white bg-gray-600 hover:bg-gray-700"
            >
              Desencriptar
            </button>
          </div>
        </section>
        <section className="md:w-auto p-4 flex flex-col border rounded items-center bg-white justify-center ml-10 ml-40">
          <img src={astronauta} alt="Astronauta" className="w-40 h-40" />
          <p className="mt-4 text-black">{result || 'Ningún mensaje fue encontrado'}</p>
          <button 
            onClick={Copiar} 
            className="mt-4 px-4 py-2 border rounded text-black bg-gray-200 hover:bg-gray-300"
          >
            Copiar
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
