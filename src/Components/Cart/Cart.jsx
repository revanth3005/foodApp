import axios from "axios";
import React, { useState } from "react";
import "./cart.css";

const Cart = ({
  cartItems,
  addItemsToCart,
  removeItemsInCart,
  handleCardClearance,
  handleOrderSummary,
}) => {
  const [checkOutForm, setCheckoutForm] = useState(false);
  const [checkoutUser, setCheckoutUser] = useState({
    name: "",
    street: "",
    mobile: "",
    City: "",
  });
  const [displayModal, setDisplayModal] = useState(false);
  const onChangeHandler = (event) => {
    setCheckoutUser({
      ...checkoutUser,
      [event.target.name]: event.target.value,
    });
  };
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const orderHandler = (event) => {
    event.preventDefault();
    if (cartItems.length <= 0) {
      return alert("cart is empty");
    }
    setCheckoutForm(true);
  };
  const cancelCartHandler = (event) => {
    event.preventDefault();
    setCheckoutForm(false);
  };
  const confirmOrderHandler = async (event) => {
    event.preventDefault();
    console.log(checkoutUser);
    if (
      checkoutUser.City.trim() === "" ||
      checkoutUser.mobile.trim() === "" ||
      checkoutUser.name.trim() === "" ||
      checkoutUser.mobile.trim() === ""
    ) {
      alert("order details must not be Empty");
      return;
    }
    if (checkoutUser.mobile.trim().length < 10) {
      return alert("Enter a valid Number");
    }
    try {
      const sendOrder = await axios.post(
        "https://foodservice-6f06f-default-rtdb.asia-southeast1.firebasedatabase.app/orderUsers.json",
        JSON.stringify({
          user: checkoutUser,
          orderedItems: cartItems,
          price: totalPrice,
        }),
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (sendOrder.statusText === "OK") {
        setDisplayModal(true);
      }
      console.log(sendOrder);
      setCheckoutUser({
        name: "",
        street: "",
        mobile: "",
        City: "",
      });
      let text = "Your Order is Accepted";
      if (window.confirm(text)) {
        handleOrderSummary(true);
        setCheckoutForm(false);
        setTimeout(() => {
          alert("SR Meals started Preparing your Food 😊");
        }, 4000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const cancelOrder = () => {
    setCheckoutUser({
      name: "",
      street: "",
      mobile: "",
      City: "",
    });
    setCheckoutForm(false);
  };
  if (cartItems.length < 0) {
    setCheckoutForm(false);
    return;
  }
  console.log(displayModal);
  return (
    <div className="modal" id="myModalMD">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Cart Items
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div style={{ overflow: "auto" }}>
              <div>{cartItems.length === 0 && <h5>No Items</h5>}</div>
              <div>
                {cartItems.map((item) => {
                  return (
                    <div key={item.id}>
                      <div>
                        <h5>{item.name}</h5>
                        <div style={{ float: "right", marginTop: "-20px" }}>
                          <h5>
                            {item.quantity}&nbsp;*&nbsp;{item.price}
                          </h5>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <span
                          className="cartBt"
                          onClick={() => addItemsToCart(item)}
                        >
                          ➕
                        </span>
                        <span
                          className="cartBt"
                          onClick={() => removeItemsInCart(item)}
                        >
                          ➖
                        </span>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
            <strong style={{ float: "right" }}> TotalPrice:{totalPrice}</strong>
            <br />
            {checkOutForm && (
              <>
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingText"
                    placeholder="text"
                    name="name"
                    onChange={onChangeHandler}
                    value={checkoutUser.name}
                  />
                  <label htmlFor="floatingText">Name</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingText"
                    placeholder="text"
                    name="street"
                    onChange={onChangeHandler}
                    value={checkoutUser.street}
                  />
                  <label htmlFor="floatingText">Area/Street</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingText"
                    placeholder="text"
                    name="City"
                    onChange={onChangeHandler}
                    value={checkoutUser.City}
                  />
                  <label htmlFor="floatingText">City</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingText"
                    placeholder="text"
                    name="mobile"
                    onChange={onChangeHandler}
                    value={checkoutUser.mobile}
                  />
                  <label htmlFor="floatingText">Mobile</label>
                </div>
                <button
                  onClick={confirmOrderHandler}
                  className="btn btn-outline-success"
                  data-bs-dismiss={displayModal === true ? "modal" : "not"}
                >
                  Confirm
                </button>
                <button
                  onClick={cancelOrder}
                  className="btn btn-outline-danger"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
          <div className="modal-footer">
            {cartItems.length !== 0 && (
              <button
                className="btn btn-outline-danger"
                onClick={handleCardClearance}
                style={{ cursor: "pointer", float: "left" }}
              >
                clear-All
              </button>
            )}
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-dismiss="modal"
              onClick={cancelCartHandler}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={orderHandler}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
