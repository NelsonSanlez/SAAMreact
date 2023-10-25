import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Receitas.css";
import MaisInfo from "./ModalMaisInfo";


function Receitas(props) {
  const [recipeData, setRecipeData] = useState({});
  const [horarios, setHorarios] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
     const receita= props.item
     

      // confirm that data is an object and has a property called Horários that is an array
      if (receita && receita.horarios && Array.isArray(receita.horarios)) {
        setRecipeData(receita);
        setHorarios(receita.horarios);
      } else {
        console.error("Data or horarios is missing or not an array:", props);
      }
    }  

    fetchData();
  }, [props.id]);

  return (
    <div>
      <div className="row  ">
        <div className="card row card-receitas  col-lg col-md-4 col-sm-12  ">
          <div className="row  m-0">
            <div className="col-5 d-flex align-items-center m-0">Nome</div>
            <div className="col  paddingBgCyan m-0 ">
                <div className="bgCyan rounded-4 ">
                    <div className=" paddingInputs ">
                        <p >{recipeData.medicamento} </p>
                    </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-5 d-flex align-items-center m-0">Dose</div>
            <div className="col  paddingBgCyan  ">
                <div className="bgCyan rounded-4 ">
                        <div className="  paddingInputs">
                    <p >{recipeData.dose} </p>
                    </div>
                </div>
              </div>
            </div>
          <div className="row">
            <div className="col ">Horários</div>
            <div className="col  bgCyan rounded-4 my-1 form-control border-0 ">
              {horarios.map((horarios, index) => (
                <input
                  className="transparent-input "
                  key={index}
                  type="text"
                  value={horarios.horario  }
                  disabled
                  readOnly
                />
              ))}
            </div>
          </div>
          <div className="row ">
            <div className="col "></div>
            <div className="col-7 m-0 p-0 " >
             
                <MaisInfo propValue={recipeData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export { Receitas };
