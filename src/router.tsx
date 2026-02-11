import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  //   {
  //     element: <RootLayout />,
  //     children: [
  //       {
  //         path: "/404",
  //         element: <NotFound />,
  //       },
  //       {
  //         path: "/wip",
  //         element: <UnderDevelopment />,
  //       },
  //       {
  //         path: "*",
  //         element: <Navigate to="/404" replace />,
  //       },
  //       {
  //         path: "/majors",
  //         element: <MajorsLayout />,
  //         children: [
  //           {
  //             index: true,
  //             element: <Majors />,
  //           },
  //           {
  //             path: "it",
  //             element: <UnderDevelopment title="IT Major" />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
]);
