import { useState, useEffect } from 'react';

import Card from '../ui/Card';
import BookItem from './book-item/BookItem';

import classes from './AvailableBooks.module.css';

const AvailableBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          'https://react-db-2fda0-default-rtdb.firebaseio.com/books.json',
        );

        if (!response.ok) {
          throw new error('failed to laod books. please try again later.');
        }

        const responseData = await response.json();

        const loadedBooks = [];

        for (const key in responseData) {
          loadedBooks.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }

        setBooks(loadedBooks);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchBooks();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.BooksLoading}>
        <p>Loading books...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.BooksError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const bookList = books.map((book) => (
    <BookItem
      id={book.id}
      key={book.id}
      name={book.name}
      description={book.description}
      price={book.price}
    />
  ));

  return (
    <section className={classes.books}>
      <Card>
        <ul>{bookList}</ul>
      </Card>
    </section>
  );
};

export default AvailableBooks;
