import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import HomeComponent from "./components/Home/HomeComponent.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";
// import AboutMe from "./components/AboutMe/Aboutme.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/projectpage",
    element: <ProjectPage />,
  },
  // children: [
  //   {
  //     path: "/about",
  //     element: <AboutMe />,
  //   },
  // ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
