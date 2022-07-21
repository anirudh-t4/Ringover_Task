import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import "./shoe.scss";
import bag from "../../images/bag.png"
 
function ButtonModal({ pro, setCart, cart }) {
  return (
    <div className="btn_container" onClick={() => setCart((curr) => [...curr, pro])}>
      <button>
        <img src={bag} className="addBtn" alt="addtocart" />
      </button>
    </div>
  );
  }

const Shoe = ({ pro, setCart, cart }) => {
  return (
    <div className='product'>
        <img className="productImg" src={pro.img} style={{width: '10rem'}} alt="" />
        <h3>{pro.name}</h3>
        <div >
        <span className="desc">
            <p>Rs. {pro.price}</p>
            <div style={{marginLeft: 'auto'}}>
                <BsStarFill style={{color: 'gold'}} />
                <BsStarFill style={{color: 'gold'}} />
                <BsStarFill style={{color: 'gold'}} />
                <BsStarFill style={{color: 'gold'}} />
                <BsStarHalf style={{color: 'gold'}} />
            </div>
            </span>
        </div>
        <ButtonModal key={pro.id} pro={pro} setCart={setCart} cart={cart}/>
    </div>
  )
}

export default Shoe