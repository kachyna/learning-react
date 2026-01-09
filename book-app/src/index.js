import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Take the div with id "result" in index.html 
const container = document.getElementById('result')
// Creates root, a gateway between the React app and HTML
const root = createRoot(container)
// Renders whatever is in the application under tab "home", the default page
root.render(<App tab="home" />)