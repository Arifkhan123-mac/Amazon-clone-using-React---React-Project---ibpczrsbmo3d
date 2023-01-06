import React from "react";
import "./css/Subtotal.css";
import Currencyformat from "react-currency-format"
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
function Subtotal(){

    const [{ basket,user }, dispatch] = useStateValue();    
    const total = getBasketTotal(basket);
    return(
        <div className="subtotal">
<Currencyformat 
  renderText={(value) => (
    <>
      <p>
        
        Subtotal ({basket.length} items): <strong>{value}</strong>
      </p>
      <small className="subtotal_left">
        <input type="checkbox" /> This order contains a gift
      </small>
    </>
  )}
  decimalScale={2}
  value={getBasketTotal(basket)} // Part of the homework
  displayType={"text"}
  thousandSeparator={true}
  prefix={"₹"}
/>
<button>pay with card</button>
        </div>
    )
}
export default Subtotal;
