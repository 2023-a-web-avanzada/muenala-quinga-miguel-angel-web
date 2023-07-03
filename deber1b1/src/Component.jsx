import React, {useState} from 'react'

export default function Component() {
  const [text, setText] = useState()// "text" es variable y "setText" es el que cambia el estado

  const textOnChange = (event) => { // enf para crear una función flecha.
    setText(event.target.value)   //se llama a setText con el valor del evento
  } 

  return (
    <div>
      <input type = "text" value={text} onChange ={textOnChange}/>
      <button >Actualizar</button>
      <p class ="text-color-500">el valor de la variable text es: {text}</p>
    </div>
  )
}
