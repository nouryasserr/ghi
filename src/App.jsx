import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Solutions from "./pages/Solutions/Solutions";
import Technology from "./pages/Technology/Technology";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        {
          path: "/about",
          element: <About />,
        },
        { path: "/contact", element: <Contact /> },
        { path: "projects", element: <Projects /> },
        { path: "solutions", element: <Solutions /> },
        { path: "technology", element: <Technology /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
