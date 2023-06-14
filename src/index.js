import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import {store, persistor} from './state';
import { PersistGate } from 'redux-persist/integration/react'
import Layout from './pages/Layout';
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import Categories from './pages/Categories'
import Items from './pages/Items'
import NewCollection from './pages/NewCollection'
import Login from './pages/Login'
import Register from './pages/Register'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  errorElement: <ErrorPage/>,
  children: [
    {index: true, element: <Home/>},
    {path: 'new-collections', element: <NewCollection/>},
    {path: 'login', element: <Login/>},
    {path: 'register', element: <Register/>},
    {path: 'categories', element: <Categories/>},
    {path: 'categories/:prefix/items',
      element: <Items/>,
      loader: ({params}) =>{
        if(!isNaN(params.prefix)) {
          throw new Response("Not Found", {
          statusText: "Page Not Found",
          status: 404 });
        }
    }}
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router}/>
  </PersistGate>
</Provider>
);
