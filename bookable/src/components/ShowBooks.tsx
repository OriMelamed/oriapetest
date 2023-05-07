interface Props {
  booksList: Books[];
}

interface Books {
  id: number;
  title: string;
  body: string;
}

export const ShowBooks = ({ booksList }: Props) => {
  return (
    <div>
      <h1>Api Books</h1>
      {booksList.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <h3>{book.body}</h3>
          </div>
        );
      })}
    </div>
  );
};
