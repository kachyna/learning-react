// a component is a function that has the same name as the filename
// a component must contain not-nulll return and an export line
//      * return can return only one, single tag => all return markup should be wrapped in a container (like <div> or empty <>)
// in fact, we are not writing HTML but JSX - javascript XML
//      * it allows us to write HTML in javascript
//      * anything in { } brackets is deemed as a javascript code

import Book from "./components/Book"
import OrderButton from "./components/OrderButton";

const App = () => {

    return <>
        <h1>Our first component.</h1>
        <Book />
        <OrderButton />
    </>
}

export default App