import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Receitas.css";
import MaisInfo from "./ModalMaisInfo";



async function OneRecipe(id) {
  try {
    const res = await fetch(`http://localhost:5000/pacientes/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function Receitas(props) {
  const [recipeData, setRecipeData] = useState({});
  const [horarios, setHorarios] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await OneRecipe(props.id);
      // confirm that data is an object and has a property called Horários that is an array
      if (data && data.Horarios && Array.isArray(data.Horarios)) {
        setRecipeData(data);
        setHorarios(data.Horarios);
      } else {
        console.error("Data or horarios is missing or not an array:", data);
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
                        <p >{recipeData.Nome} </p>
                    </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-5 d-flex align-items-center m-0">Dose</div>
            <div className="col  paddingBgCyan  ">
                <div className="bgCyan rounded-4 ">
                        <div className="  paddingInputs">
                    <p >{recipeData.Dose} </p>
                    </div>
                </div>
              </div>
            </div>
          <div className="row">
            <div className="col ">Horários</div>
            <div className="col  bgCyan rounded-4 my-1 form-control border-0 ">
              {horarios.map((Horários, index) => (
                <input
                  className="transparent-input "
                  key={index}
                  type="text"
                  value={Horários}
                  disabled
                  readOnly
                />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
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
