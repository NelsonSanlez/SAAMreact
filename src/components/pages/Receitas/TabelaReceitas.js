import React, { useState, useEffect, useRef } from "react";
import {Receitas} from "./Receitas";
import Masonry from "react-masonry-css";
import { ResponsiveMasonry } from "react-responsive-masonry";

// Define an object that specifies the number of columns to use at different breakpoints
const breakpointColumnsObj = {
    default: 2, // Default number of columns
    //700: 1 // If screen width is 700px or less, use 1 column
};

// Define a component that uses the Masonry layout to display a list of items
const MasonryComponent = () => {
    // Define state to keep track of the height of each column
    const [colHeights, setColHeights] = useState(new Array(breakpointColumnsObj.default).fill(0));

    // define a state to keep track of the items
    const [items, setItems] = useState([]);

    // Define a ref to keep track of the columns themselves
    const cols = useRef([]);

    //Fetch the items from the backend
    async function fetchMultipleRecipes(id) {
        try{
            const res = await fetch(`http://localhost:5000/pacientes/AllReceitas/${id}`);
            const data = await res.json();
          //  console.log(data);  //aqui já tenho os dados
            return data;
        } catch (error) {
            console.error(error);
        }


    }

    // Fetch the items from the backend when the component mounts
    useEffect(() => {
        async function fetchData() {
            const items = await fetchMultipleRecipes();
         //   console.log('Items:', items );
            setItems(items);
        }

        fetchData();
    }, []);


    // Reset the column heights when the component mounts
    useEffect(() => {
        setColHeights(new Array(breakpointColumnsObj.default).fill(0));
    }, []);

    // Reset the column heights and heights of the items when the window is resized
    const handleResize = () => {
        setColHeights(new Array(breakpointColumnsObj.default).fill(0));
        cols.current.forEach((col) => {
            col.style.height = "";
            console.log(col.style.height)
        });
    };

    // Add a resize event listener when the component mounts, and remove it when it unmounts
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Update the column heights and heights of the items when a new item is loaded
    const handleItemLoad = (index, height) => {
        const colIndex = index % breakpointColumnsObj.default;
        const colHeight = colHeights[colIndex];
        const newColHeight = colHeight + height;
        setColHeights((prevColHeights) => {
            const newColHeights = [...prevColHeights];
            newColHeights[colIndex] = newColHeight;
            return newColHeights;
        });
        cols.current[colIndex].style.height = `${newColHeight}px`;
       // console.log("breakpointCols:", breakpointColumnsObj);
        console.log("Number of items:", items.length);
        console.log("Column heights:", colHeights);
        console.log("hewwo2")
    };

    // Render the Masonry layout with the specified breakpoint columns and list of items
    return (
        <Masonry
        
            className="masonry  "
            columnClassName="masonry-column  "
            style={{ display: "flex" }}
            colSpan={2}
            cols={2}
        >
            {items.map((items, i) => (
                <Receitas
                    key={i}
                    item={items}
                    onLoad={(height) => handleItemLoad(i, height)}
                />
            ))}
        </Masonry>
    );
};

// Export the MasonryComponent for use in other components
export default MasonryComponent;
