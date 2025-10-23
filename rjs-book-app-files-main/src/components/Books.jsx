import { books } from "../constants/mockData";
import BookCrad from "./BookCrad";

function Books() {
  return (
    <div>
      <div>
        {books.map((book) => (
         <BookCrad key={book.id} data={book}/>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Books;
