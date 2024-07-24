import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import FirstPage from "./components/pages/FirstPage/FirstPage";
// import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
// import PersonalArea from "./components/pages/PersonalArea/PersonalArea";
// import TestPage from "./components/pages/TestPage/TestPage";
// import TrainersPage from "./components/pages/TrainersPage/TrainersPage";
// import Leaderboard from "./components/pages/Leaderboard/Leaderboard";

const store = setupStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  // {
  //   path: "/lk",
  //   element: <PersonalArea />,
  // },
  // {
  //   path: "/trainers",
  //   element: <TrainersPage />,
  // },
  // {
  //   path: "/challenge/:testSlug",
  //   element: <TestPage />,
  // },
  // {
  //   path: "/challenge/:testSlug/leaderboard",
  //   element: <Leaderboard />,
  // },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
