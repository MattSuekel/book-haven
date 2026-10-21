import Modal from '../ui/Modal';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'c1',
          name: 'The Great Gatsby',
          amount: 2,
          price: 14.99,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>$29.98</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes['button--alt']}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
