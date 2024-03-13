import raamat1 from './img/raamat1.jpg';
import raamat2 from './img/raamat2.jpg';
import raamat3 from './img/raamat3.jpg';
import './Books.css';
import BooksList from './BooksList';
import Raamat from './Raamat';

const books = [
  {title: 'Tee mehe südamesse', author: 'Margus Vaher', image: raamat1},
  {title: 'MIDAGI TÕELIST', author: 'MARTIN ALGUS', image: raamat2},
  {title: 'KUU TEINE POOL', author: 'Urmas Vadi', image: raamat3},
]

function App() {
  return (

    <div className="container">
      <div className="books-list">
        <BooksList books={books} />
      </div>
      <div className="book-details">
        {books.map((book) => {
          return (
            <Raamat title={book.title} author={book.author} image={book.image} />
          );
        })
        }
      </div>
    </div>
  );
}

export default App;
