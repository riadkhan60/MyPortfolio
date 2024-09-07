import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./Pages/HomePage/HomePage";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import BlogOverView from "./Pages/BlogsPage/BlogOverView/BlogOverView";
import BlogsCreate from "./Pages/BlogsPage/BlogsCreate/BlogsCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "blogs/:id",
        element: <BlogOverView />,
      },
      {
        path: "blogs/create",
        element: <BlogsCreate />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
