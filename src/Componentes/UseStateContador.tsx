import { useState } from "react"

export const UserStateContador = () => {
  //hook useState: cambiar el estado de un valor o un componente
  const [valorContador, setValorContador] = useState<number>(0); //valor inicial

  //Funcion que se encargae de cambiar el valorContador
  const cambiarContador = (numero: number) => {
    //llamar ala funcion del useState
    setValorContador(valorContador + numero);

  }
    return (
      <div>
        <h3>Contador: <small>{valorContador}</small></h3>
        <button 
        className="btn btn-primary"
        onClick={() => cambiarContador(+5)}
        >
          +5
          </button>
        &nbsp;
        <button 
        className="btn btn-primary"
        onClick={() => cambiarContador(-5)}
        > 
          -5
          </button>
        </div>
    )
  }