import React, { useState, useEffect, useRef, useContext, useMemo } from "react";
import { Receitas } from "./Receitas";
import Masonry from "react-masonry-css";
import { ResponsiveMasonry } from "react-responsive-masonry";
import { LoginContext } from "../../../context/LoginContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";


// Define a component that uses the Masonry layout to display a list of items
const PaginationMasonry = () => {
 
  // define a state to keep track of the items
  const [itemsOffset, setItemsOffset] = useState(); // numero de items anteriores
  const [currentItems, setCurrentItems] = useState([]); // items da pagina atual
  const [TotalItems, setTotalItems] = useState([]); // todos os items

  const itemsPerPage = 4; // items por pagina

  //controle de validação de Login
  const { login } = useContext(LoginContext);
  useEffect(() => {
    if (!login.id || !login.status) {
      <Navigate to='/'/>
    }
  });

  //Fetch the items from the backend
  async function fetchMultipleRecipes(id) {
    try {
      const res = await fetch(
        `http://localhost:5000/pacientes/AllReceitas/${id}`
      );

      const data = await res.json();
      if (res.ok) {
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Fetch the items from the backend when the component mounts
  useEffect(() => {
    const Fetch = async function fetchData() {
      const receita = await fetchMultipleRecipes();
      // set Totalitems and itemsOffset
      setTotalItems(receita);
      setItemsOffset(0);
    };
    //para apnas fazer o fetch da primeira vez
    if (TotalItems.length === 0) {
      Fetch();
    }
  }, []);


  // Use Effect to set the currentItems
  useEffect(() => {
    if (itemsOffset !== undefined) {
      setCurrentItems(
        TotalItems.slice(itemsOffset, itemsPerPage + itemsOffset)
      );      
    }
  }, [itemsOffset, TotalItems]);


  // Function to handle the page change
  const handlePageChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % TotalItems.length;
    setItemsOffset(newOffset);
  };
  console.log("TotalItems:",TotalItems)
  console.log("currentItems:",currentItems)

  function MasonryComponent(){
    return (
       <Masonry
        className="masonry  "
        columnClassName="masonry-column  "
        style={{ display: "flex" }}
        colSpan={2}
      >
        {currentItems.map((item, i) => (
          <Receitas
            key={i}
            item={item}
            
          />
        ))}
      </Masonry>
    )
  }

  return (
    <div>
     <div className="row  " style={{display:"flex",alignContent:"space-around" }}>
      <div className="col-10">
     <ReactPaginate
        previousLabel={"← Anterior"}
        nextLabel={"Próximo →"}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel={"..."}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={Math.ceil(TotalItems.length / itemsPerPage)} //n de paginas
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
      </div>
    <Link className="col-2 btn btn-primary mb-3" to={`/pacientes/receitas/inserirReceitas/:numUtente`}>Nova Receita</Link>
      </div>

      <MasonryComponent/>
      
    </div>
  );
};

export default PaginationMasonry;
