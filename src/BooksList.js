function BooksList ({books}) {
  const bookNames = books.map((book) => {
    return (
      <li>{book.title}</li>
    );
  })

  return (
    <div>
      <h2>Minu raamaturiiul</h2>
      <ul>{bookNames}</ul>
    </div>
  );
}

export default BooksList;
