
import React from 'react';
import { AreaCuadrado } from "./Componentes/AreaCuadrado";
import {SumarArreglo} from './Componentes/SumarArreglo';
import { DividirArreglo } from './Componentes/DividirArreglo';
import { UserStateContador } from './Componentes/UseStateContador';
import AlumnosList from './Componentes/AlumnosList';






const App = () => { 
  const lado = 5;

  return ( 
    <div className="mt-2"> 
      <h1>Actidad-Actonoma</h1> 
      {<AreaCuadrado lado={lado}/>}
      {<SumarArreglo/>}
      {<DividirArreglo/>}
      {<UserStateContador/>}
      {<AlumnosList/>}
      

      
    </div> 
  ); 
}; 

export default App;
