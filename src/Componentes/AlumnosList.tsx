import React, { useState } from 'react';

type Alumno = {
  name: string;
  edad: number;
  calificacion: number;
};

const AlumnosList = () => {
  const [alumnos] = useState<Alumno[]>([
    { name: 'Viviana', edad: 19, calificacion: 10 },
    { name: 'Wendy', edad: 20, calificacion: 8 },
    { name: 'Gerson', edad: 18, calificacion: 9 },
  ]);

  //calcular el promedio
  const calcularPromedio = (alumnos: Alumno[]): number => {
    const totalCalificaciones = alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);
    return totalCalificaciones / alumnos.length;
  };

  const promedio = calcularPromedio(alumnos);

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.name}>
            {alumno.name} - Edad: {alumno.edad} - Calificación: {alumno.calificacion}
          </li>
        ))}
      </ul>
      <p>Promedio de calificaciones: {promedio}</p>
    </div>
  );
};

export default AlumnosList;

