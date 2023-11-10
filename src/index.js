import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './components/app/app';


// отримання набору даних
//  const coffeeService = new CoffeeService();
//  coffeeService.getAllProduct().then(res => console.log(res));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
