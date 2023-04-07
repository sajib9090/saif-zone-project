import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Books from "./Components/Books/Books";
import BookDetails from "./Components/BookDetails/BookDetails";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "./Components/ErrorPage/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,   
      },
      {
        path: "books",
        element: <Books/>, 
        loader: () => fetch(`https://api.itbook.store/1.0/new`)
      },
      {
        path: "book/:id",
        element: <BookDetails/>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
