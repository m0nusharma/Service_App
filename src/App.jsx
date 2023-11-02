import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Notification from "./Pages/Notification";
import Massage from "./Pages/Massage";
import Scanner from "./Pages/Scanner";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/scanner",
      element: <Scanner />,
    },
    {
      path: "/massage",
      element: <Massage />,
    },
    {
      path: "/notification",
      element: <Notification />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
