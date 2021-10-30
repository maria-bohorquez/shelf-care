import React, { useState, useEffect } from "react";
import BooksContainer from "./components/BooksContainer";
import { GlobalStyle } from "./styles";
import Header from "./components/Header";
import DetailPanel from "./components/DetailPanel";
import { Transition } from "react-transition-group";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPanel, setShowPanel] = useState(false);

  console.log("This message will render every time the component renders.");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://book-club-json.herokuapp.com/books"
        );
        console.log(`Here's what our fetch request returns`, response);

        const books = await response.json();
        console.log(`Our json-ified response :`, books);
        setBooks(books);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book);
    setShowPanel(true);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  console.log(`The books array in our state:`, books);
  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer
        books={books}
        pickBook={pickBook}
        isPanelOpen={showPanel}
      />

      <Transition in={showPanel} timeout={300}>
        {(state) => (
          <DetailPanel
            book={selectedBook}
            closePanel={closePanel}
            state={state}
          />
        )}
      </Transition>
    </>
  );
};
export default App;
