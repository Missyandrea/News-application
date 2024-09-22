import { RouteObject } from "react-router-dom";
import App from "../App";
import { AllArticlesPage, ErrorPage, TopHeadlinesPage } from "../pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/all",
        element: <AllArticlesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/top_headlines",
        element: <TopHeadlinesPage />,
        errorElement: <ErrorPage />,
      },
      {
        index:true,
        element: <TopHeadlinesPage />,
      },
    ],
  },
];

export default routes;
