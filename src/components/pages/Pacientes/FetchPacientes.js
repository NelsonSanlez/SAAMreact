import React, { useContext, useEffect, useState } from 'react';

export default async function FetchPacientes() {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const res = await fetch(`http://localhost:5000/listarUtentes`);
      const pacientes = await res.json();
      return(pacientes)
    } catch (error) {
      console.error(error);
    }
  }
  const dataget = getData()
  const dataget2 = await dataget
  console.log('minha data inside antes return: ' + dataget2);
  setData(dataget2)
}

