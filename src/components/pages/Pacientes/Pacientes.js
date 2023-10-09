
import React from "react";

function Pacientes01 (){
    const pacientes = [
        { "nome": "Alice Vila", "numUtente": "7346158", "medicamento": "Ben-u-ron", "hora":"10:00", "via":"Oral", "dose":"1 Comp"},
        { "nome": "Bob Construtor", "numUtente": "6427815", "medicamento": "Ben-u-ron", "hora":"11:00", "via":"Oral", "dose":"1 Comp" },
        { "nome": "Carlos Almeida", "numUtente": "6977356", "medicamento": "Ben-u-ron", "hora":"12:00", "via":"Oral", "dose":"1 Comp" },
        { "nome": "Alice Vila", "numUtente": "7346158", "medicamento": "Ben-u-ron", "hora":"10:00", "via":"Oral", "dose":"1 Comp"},
        { "nome": "Bob Construtor", "numUtente": "6427815", "medicamento": "Ben-u-ron", "hora":"11:00", "via":"Oral", "dose":"1 Comp" },
    ]
        let result = []
   pacientes.forEach(paciente => {
            const name = paciente.nome
            const nbr = paciente.numUtente
            const htmlCode = `<div class="container-fluid row utente_lista">
    <div class="col nome-utente">${name}</div>
    <div class="col num-utente">Nº: ${nbr}</div>
    <div class="col-8 btns-utentes">
        <a class="col-2 btn btn-utentes" href="listaReceitas.html?name=${name}">Receitas</a>
        <a class="col-2 btn btn-utentes" href="#">Perfil</a>
        <a class="col-2 btn btn-utentes" href="#">Stock</a>
        <a class="col-2 btn btn-utentes" href="#">Histórico</a>
    </div>
</div>`
result.push(htmlCode)
return(result)
});

 return (<div dangerouslySetInnerHTML={{ __html: result }} />)
    }  

function Pacientes (){
    return (
        <div><div class="work_path">Pacientes</div>
        <listaUtentes id="lista_pacientes"></listaUtentes></div>
    )
}

export {Pacientes01}


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import { findListaUtentes } from './db';
// import OpenDbConnection  from './db';






// console.log(JSON.stringify(findListaUtentes))
// //Find all of the patients
// const findListaUtentes = async ()=>{
//   const db = await OpenDbConnection()
//     const colectUtentes = db.collection('patients')
//     const allUtentes = await colectUtentes.find({}).toArray()
//     console.log(allUtentes)
//     return allUtentes.json()
// }




// async function ShowData() {
// const pacientes = findListaUtentes
// console.log(pacientes)
// //   const conteudo = document.querySelector("#lista_pacientes");
// pacientes.forEach(paciente => {
//   const name = paciente.nome
//   const nbr = paciente.numUtente
//   const htmlCode = `
// <div class="container-fluid row utente_lista">
// <div class="col nome-utente">${name}</div>
// <div class="col num-utente">Nº: ${nbr}</div>
// <div class="col-8 btns-utentes">
//   <a class="col-2 btn btn-utentes" href="listaReceitas.html?name=${name}">Receitas</a>
//   <a class="col-2 btn btn-utentes" href="#">Perfil</a>
//   <a class="col-2 btn btn-utentes" href="#">Stock</a>
//   <a class="col-2 btn btn-utentes" href="#">Histórico</a>
// </div>
// </div>`;
// const containerHtml = document.createElement("div");
// containerHtml.innerHTML = htmlCode;

// conteudo.appendChild(containerHtml);
// });
// }

// const listaUtentesPresented = ShowData();




// export default ShowData

// const Pacientes = ShowData

// export {Pacientes}



