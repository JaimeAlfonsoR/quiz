import React from 'react';
import { useState } from "react";
import virtualDOM from './virtualDOM.jpg';


function Botones() {
    
    const jason=[
        {"id":"0", "pregunta": "Responda las siguientes preguntas: ", "answer": "", "titulo":"Quiz de Hoy React", "img":""},
        {"id":"1", "pregunta": "¿Cómo se define un nuevo componente en React? ", "answer": "La forma más habitual de crear componentes en React es mediante el uso de funciones que retornan una expresión JSX, aunque tambien se pueden crear en constantes de la forma: const component = <h1>Hola mundo</h1>; siendo que el contenido tambien es JSX.", "titulo":"Pregunta 1", "img":""},
        {"id":"2", "pregunta": "¿Cómo se define un nuevo estado? ", "answer": "Para definir un nuevo estado en un componente de react se hace uso de useState dentro de tu componente funcional. Este hook devuelve una matriz con dos elementos: el valor actual del estado y una función para actualizar ese estado. => const [miEstado, setMiEstado] = useState(valorInicial);", "titulo":"Pregunta 2", "img":""},
        {"id":"3","pregunta":"F o V. El inicializador del estado puede ser una función. ", "answer": "Verdadero", "titulo":"Pregunta 3", "img":""},
        {"id":"4", "pregunta": "¿Qué es el virtual DOM? ", "answer": "DOM adicional que genera react para renderizar solo los componentes que cambian con respecto al árbol original, y no todo el árbol de nuevo. Es una copia que nos permite hacer cálculos pesados sin afectar el rendimiento del verdadero DOM", "titulo":"Pregunta 4", "img":virtualDOM}
    ];
    const [pagina, setPagina] = useState(0);
    const aumentarPagina = () => {
        if (pagina<4){
            setPagina(pagina+1);
        }
    };
    const disminuirPagina = () => {
        if (pagina>0){
            setPagina(pagina-1);
        }
    };
    const iniciarPagina = () => {
        setPagina(pagina-pagina);
    };
    const renderPagina = () => {
        return jason[pagina];
    };
  return (
    <div>
      <button onClick={iniciarPagina}>Restart</button>
      <button onClick={disminuirPagina}>Prev</button>
      <button onClick={aumentarPagina}>Next</button>
      <h1>{renderPagina()["titulo"]}</h1>
        <h2>{renderPagina()["pregunta"]}</h2>
            <p>{renderPagina()["answer"]}</p>
            <img src= {renderPagina()["img"]}/>
    </div>
  );
}

export default Botones;