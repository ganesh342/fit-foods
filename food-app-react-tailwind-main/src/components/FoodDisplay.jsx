import React from "react";
import FoodCard from "./FoodCard";
import FoodList from "../backend/FoodList.json";
import NavBar from "./Navbar";
import { Link, useLocation } from 'react-router-dom'
function FoodData() {
  //const foods = food
  // Add more food items as needed

  const location = useLocation();

  return (
    <>
      <NavBar />
      <div className="flex flex-row justify-between item-center bg-gradient-to-r from-black to-gray-800">

        {/* {foods.map((food, index) => ( */}

        {
          location.state.found ? <div className="p-100 flex items-center m-100 ">

            <FoodCard food={location.state.item1} />
          </div>
            : 
            <div className="grid grid-cols-1 item-center py-10 px-10 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {
                FoodList.data.map((props, index) => {
                  return (
                    <FoodCard food={props} key={index} />
                  )
                })
              }
            </div>

        }


        {/* ))} */}

      </div>
    </>
  );
}

export default FoodData;