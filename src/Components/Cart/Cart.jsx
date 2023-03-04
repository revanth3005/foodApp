import React from "react";
import './cart.css'

const Cart = ({
  cartItems,
  addItemsToCart,
  removeItemsInCart,
  handleCardClereance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
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
              <div >
                {cartItems.map((item) => {
                  return (
                    <div key={item.id}>
                      <div>
                        <h5>{item.name}</h5>
                        <div style={{float:'right',marginTop:'-20px'}}>
                        <h5>{item.quantity}&nbsp;*&nbsp;{item.price}</h5>
                        </div>
                      </div>
                      <div style={{display:'flex',gap:'10px'}}>
                        <button className="btn btn-outline-primary" onClick={() => addItemsToCart(item)}>➕</button>
                        <button className="btn btn-outline-primary" onClick={() => removeItemsInCart(item)}>
                          ➖
                        </button>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
            <strong style={{float:'right'}}> TotalPrice:{totalPrice}</strong>
          </div>
          <div className="modal-footer">
            {cartItems.length != 0 && (
              <button
                className="btn btn-outline-danger"
                onClick={handleCardClereance}
                style={{ cursor: "pointer",float:'left' }}
              >
                clear-All
              </button>
            )}
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-dismiss="modal"
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