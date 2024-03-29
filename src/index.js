import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import PostObject from './components/PostObject';
import Second from './components/Second';
import Posts from './components/Posts';
import reportWebVitals from './reportWebVitals'; 

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="object" element={<PostObject />} />
      <Route path="second" element={<Second />} />
      <Route path="posts" element={<Posts />}>
        <Route path=":id" element={<PostObject />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
