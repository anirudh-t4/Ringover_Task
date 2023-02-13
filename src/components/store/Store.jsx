import React from "react";
import { IoFunnelOutline } from "react-icons/io5";
import "./store.scss";
import { FiSearch } from "react-icons/fi";
import Shoe from "./Shoe";
import { FiShoppingBag } from 'react-icons/fi'
import Cart from "./Cart";
import "./filter.scss";
import filter from "../../images/filter.png"
const Store = ({ prod, setCart, cart, setFilter1, setFilter2, setFilter3, filter1, filter2, filter3, setSneakers, setLoafers, sneakers, loafers }) => {
  
  return (
    <div className="store_container">
      <div className="filter">
      <span className="heading">
        <h1>FILTERS</h1>
        <img className="filterImg" src={filter} alt="filter" />
      </span>
        <div className="responsiveDiv">
        <span className="cost">
          <h3>Reward points</h3>
          <label>
            <input
              type="checkbox"
              id="50-100"
              name="50-100"
              className="CheckBox" onChange={
            () => {
              setFilter1(!filter1)
          }}
            />
            &nbsp; 50-100
          </label>
          <label>
            <input
              type="checkbox"
              id="101-200"
              name="101-200"
              className="CheckBox" onChange={
            () => {
              setFilter2(!filter2)
          }}
            />
            &nbsp; 101-200
          </label>
          <label>
            <input
              type="checkbox"
              id="200+"
              name="200+"
              className="CheckBox" onChange={
            () => {
              setFilter3(!filter3)
          }}
            />
            &nbsp; 200+
          </label>
          <br />
          </span>
        </div>
        <br />
        <div className="type">
          <h3>Type</h3>
          <input type="checkbox" name="" id="sneakers" value="sneakers" onChange={
            () => {
                setSneakers(!sneakers)
            }
          } />
          <label htmlFor="sneakers"> Housekeeping</label>
          <br />
          <input type="checkbox" name="" id="loafers" value="loafers" onChange={
            () => {
                setLoafers(!loafers)
            }
          } />
          <label htmlFor="loafers"> Breakfast</label>
          <br />
        </div>
        <button className="btn">
        Apply
      </button>
      </div>

      <div className="filter">
        <div className="heading">
          <h2>Complimentary Services</h2>
          
        </div>
        <div className="shoes__array">
          {prod.map((pro) => (
           <Shoe key={pro.id} pro={pro} setCart={setCart} cart={cart} />
          ))}
        </div>
      </div>
      <div className="filter">
        <div className="cart__header">
            <h2>Confirm</h2>
            <FiShoppingBag size={24} style={{marginLeft: 'auto'}} />
            </div>
            <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default Store;
