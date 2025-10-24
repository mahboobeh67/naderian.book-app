import { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookCrad from "./BookCrad";
import CardSide from "./CardSide";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox";
function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikeList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };
  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCrad
              key={book.id}
              data={book}
              handleLikeList={handleLikeList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorite</h4>{" "}
            {liked.map((book) => (
              <CardSide key={book.id} data={book} />
            ))}{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
