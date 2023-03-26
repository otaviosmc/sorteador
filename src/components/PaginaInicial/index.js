import React, { useState } from "react";
export default function PaginaInicial() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  function gerarNumero() {
    const novoNum = Math.floor(Math.random() * (100 - 1) + 1);
    setNumeroAleatorio(novoNum);
  }

  return (
    <div className="bg-white rounded-3xl mx-auto text-black flex flex-col items-center content-center p-8 gap-8">
      <h1 className="font=bold text-7xl">Sorteador</h1>
      <h1 className="font-bold text-2xl">Número Aleatorio: </h1>
      <h1 className="font-bold text-2xl">{numeroAleatorio}</h1>
      <p>Clique no Botão abaixo para gerar um número aleatório de 1 a 100: </p>
      <button
        onClick={gerarNumero}
        className="bg-cyan-200 py-2 px-3 rounded-xl"
      >
        Gerar número
      </button>
    </div>
  );
}
