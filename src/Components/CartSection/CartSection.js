import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartCard.css";
import Empty from "../EmptyCard/Empty";
 import { Link } from "react-router-dom";
const CartSection = () => {
  const products = useSelector((state) => state.custom);





  const total = (totalprice) => {
    if (totalprice > 250) {
      return totalprice;
    }
    if (totalprice < 250) {
      return totalprice + 100;
    }
  };

  const ShipingCharge = (total) => {
    if (total < 250) {
      return 100;
    } else {
      return 0;
    }
  };

  const dispatch = useDispatch();

  const increase = (id) => {
    dispatch({
      type: "addcart",
      payload: { id },
    });
  };

  const decrease = (id) => {
    dispatch({
      type: "decrease",
      payload: id,
    });
  };

  const removecart = (props) => {
    dispatch({
      type: "removecart",
      payload: props,
    });
  };

  return (
    <>
      {products.length === 0 ? (
        <Empty />
      ) : (
        <>
          <div className="cart-wapper">
            <div className="cart-section">
              {products.map((product, i) => {
                return (
                  <div className="cart-lists" key={i}>
                    <div className="cart-product">
                      <div className="image-section">
                        <img src={product.image} alt={"loading..."} />
                      </div>
                      <div className="product-title-quantity-detaile">
                        <div className="titles">{product.title}</div>
                        <div className="price">₹ {product.price}</div>

                        <button
                          className="increase"
                          onClick={() => decrease(product.id)}
                        >
                          -
                        </button>

                        <div className="quantity">{product.quantity}</div>

                        <button
                          className="decrease"
                          onClick={() => increase(product.id)}
                        >
                          +
                        </button>

                        <button
                          className="remove-btn"
                          onClick={() => removecart(product.id)}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="Place-order-section">
              <button className="place-order-btn">Place Order</button>
              <div className="billing-detailes-section">
                <div className="biling-detaile-title">Billing details</div>
                <div className="total-billing-detaile">
                  <div className="cart-total">
                    <div className="cart-total-title">cart total</div>
                    <div className="cart-total-price">
                      {products
                        .reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </div>
                  </div>
                  <div className="shipping-charge">
                    <div className="shiping-charge-title">shipping charge</div>
                    <div className="shiping-charge-price">
                      {ShipingCharge(
                        products.reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        )
                      )}
                    </div>
                  </div>
                  <div className="total-payble">
                    <div className="total-payble-title">
                      total payble{" "}
                      <span className="texes">(incl.of all taxes )</span>
                    </div>
                    <div className="total-payble-price">
                      {total(
                        products.reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        )
                      ).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
              <Link to={'/Shippinginfo'} >   
              <button className="place-order-btn">Place Order</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartSection;
