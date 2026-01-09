// a component is a function that has the same name as the filename
// a component must contain not-nulll return and an export line
//      * return can return only one, single tag => all return markup should be wrapped in a container (like <div> or empty <>)
// in fact, we are not writing HTML but JSX - javascript XML
//      * it allows us to write HTML in javascript
//      * anything in { } brackets is deemed as a javascript code

import Book from "./components/Book"

const App = () => {
    const books = [
    {
      id: 1,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
      title: "Harry Potter a Kámen mudrců"
    },
    {
      id: 2,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
      title: "Harry Potter a Tajemná komnata"
    },
    {
      id: 3,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
      title: "Harry Potter a Vězeň z Azkabanu"
    },
  ]

    return <>
        <h1>Our first component.</h1>
        <div className="all-books">
            <Book image={ books[0].image} title={books[0].title}/>
            <Book image={ books[1].image} title={books[1].title}/>
            <Book image={ books[2].image} title={books[2].title}/>
        </div>
    </>
}

export default App