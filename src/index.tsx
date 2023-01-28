import './assets/global.css';
import App from './pages/app/App';
import ReactDOM from 'react-dom/client';
import { createElement } from 'react';
import reportWebVitals from './reportWebVitals';

export default function index() {
  return <App />;
}

const rootNode = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootNode);
root.render(createElement(App));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
