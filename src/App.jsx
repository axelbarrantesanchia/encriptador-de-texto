import React, { useState } from 'react';
import './index.css';
import astronauta from './assets/Astronauta.png';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const Cambio = (event) => {
    const inputText = event.target.value;
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    if (regex.test(inputText)) {
      setText(inputText);
    } else {
      alert('Solo se permiten letras minúsculas sin acentos ni caracteres especiales.');
    }
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
      alert('No se pudo copiar el texto. Asegúrate de que el navegador permita el acceso al portapapeles.');
    });
  };

  return (
    <main className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row p-6 md:p-10 rounded-lg shadow-lg w-full max-w-5xl">
        <section className="md:w-2/3 p-4 md:p-6 flex flex-col">
          <textarea
            className="w-full h-48 md:h-64 p-4 border border-gray-300 rounded bg-white resize-none"
            value={text}
            onChange={Cambio}
            placeholder="Ingrese el texto aquí"
          />
          <p className="mt-2 text-gray-400 text-sm md:text-base">Solo letras minúsculas y sin acentos</p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <button 
              onClick={Encriptar}
              className="px-4 py-2 border rounded text-white bg-gray-600 hover:bg-gray-700 text-sm md:text-base"
            >
              Encriptar
            </button>
            <button 
              onClick={Desencriptar}
              className="px-4 py-2 border rounded text-white bg-gray-600 hover:bg-gray-700 text-sm md:text-base"
            >
              Desencriptar
            </button>
          </div>
        </section>
        <section className="md:w-1/3 p-4 md:p-6 flex flex-col items-center justify-center bg-white border border-gray-300 rounded mt-6 md:mt-0 md:ml-6">
          <img src={astronauta} alt="Astronauta" className="w-24 h-24 md:w-40 md:h-40" />
          <p className="mt-4 text-black text-center text-sm md:text-base">{result || 'Ningún mensaje fue encontrado'}</p>
          <button 
            onClick={Copiar} 
            className="mt-4 px-4 py-2 border rounded text-black bg-gray-200 hover:bg-gray-300 text-sm md:text-base"
          >
            Copiar
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
