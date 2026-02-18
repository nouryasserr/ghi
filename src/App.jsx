import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Solutions from "./pages/Solutions/Solutions";
import Technology from "./pages/Technology/Technology";
import Wallformwork from "./pages/Wallformwork/Wallformwork";
import Columnformwork from "./pages/Columnformwork/Columnformwork";
import Climbing from "./pages/Climbing/Climbing";
import Shoring from "./pages/shoring/shoring";
import Slab from "./pages/Slab/Slab";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/about",
          element: <About />,
        },
        { path: "/contact", element: <Contact /> },
        { path: "/projects", element: <Projects /> },
        { path: "/solutions", element: <Solutions /> },
        { path: "/technology", element: <Technology /> },
        { path: "/wallformwork", element: <Wallformwork /> },
        { path: "/columnformwork", element: <Columnformwork /> },
        { path: "/climbingsystems", element: <Climbing /> },
        { path: "/shoringsystems", element: <Shoring /> },
        { path: "/slabsupport", element: <Slab /> },
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
