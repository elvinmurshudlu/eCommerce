import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/main/home/Home';


import './index.css';
import { Backet } from './components/main/Backet/Backet';
import { Bag } from './components/main/bagAside/Bag';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<App></App>}>
            <Route path='/' element={<><Home></Home><Bag></Bag></>}></Route>
            <Route path='/backet' element={<><Backet></Backet><Bag checkout={true}></Bag></>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

