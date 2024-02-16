import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../pages/Blog";
import PostDetails from "../pages/Blog/PostsDetails";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/Projects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:uid", element: <PostDetails /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:uid", element: <ProjectDetails /> },
    ],
  },
]);
