import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { AddBook } from "./components/AddBook";
import { ShowBooks } from "./components/ShowBooks";

const API_URL = "/api/v1/books";

const getAPIData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

interface FormData {
  title: string;
  body: string;
}

function App() {
  const [books, setBooks] = useState([]);
  const [card, setCard] = useState<FormData>({ title: "", body: "" });
  const onSubmitHandler = (nbook) => {
    console.log(card);
    axios
      .post(API_URL, {
        title: nbook.title,
        body: nbook.body,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    getAPIData();
  };
  useEffect(() => {
    getAPIData().then((items) => {
      console.log(items);
      setBooks(items);
    });
  }, [card]);

  return (
    <>
      <div>
        <AddBook
          onSubmit={(nbook) => {
            setCard({ title: nbook.title, body: nbook.body });
            onSubmitHandler(nbook);
          }}
        />
        <ShowBooks booksList={books} />
      </div>
    </>
  );
}

export default App;
