import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
var tot=0

const Cart = ({ cart, setCart }) => {

    const Filled = () => {
        tot=0
        return (
            <>
                {cart.map((pro) => {
                    
                    tot+=pro.price
                    return (
                        <div className="cart__item" key={pro.id}>
                            <img src={pro.img} alt="" style={{width: '8rem', marginLeft: 0, height: '6rem'}} />
                            <div className="cart__item__info">
                                <h3>{pro.name}</h3>
                                <p>{pro.price} points</p>
                            </div>
                            <button className="no-style" onClick={() => setCart(cart.filter((item) => {
                                return item.id !== pro.id
                            }))}><AiOutlineDelete /></button>
                        </div>
                    )
                })}
                <br/><br/><br/>
                <div>
                <h3>{tot} points</h3>
                </div>
                </>
                
        )
    }

  return (
  <div className="cart">
    {
        cart.length ? <Filled /> : <p>What's stopping you, saver?</p>
    }
  </div>
  );
};

export default Cart;
