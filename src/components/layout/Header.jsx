import booksImage from '../../assets/books.jpg';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Book Haven</h1>
        <button>Cart</button>
      </header>
      <div className={classes[`main-image`]}>
        <img src={booksImage} alt="A library full of books" />
      </div>
    </>
  );
};

export default Header;
