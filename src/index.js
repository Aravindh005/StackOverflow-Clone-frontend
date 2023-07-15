import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import authReducer from './reducers/auth';
import currentUserReducer from './reducers/currentUser';
import questionsReducer from './reducers/questions.js';
import userReducer from './reducers/users';
// import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
 
// Kommunicate.init("2c9ac41341aeec520614f04af4da85879")

// import usersReducer from './reducers/Users';

const store= configureStore({ 
  reducer: {
  auth: authReducer,
  currentUser: currentUserReducer,
  questionReducer: questionsReducer,
  userReducer: userReducer,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);




