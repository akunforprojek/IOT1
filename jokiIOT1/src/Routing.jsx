import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import App from "./App";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    //   {
    //     path: "/login",
    //     element: <Login />,
    //   },
    //   {
    //     path: "/forgot-password",
    //     element: <ForgotPassword />,
    //   },
    //   {
    //     path: "/informasi-desa",
    //     element: <InformasiDesa />,
    //   },
    //   {
    //     path: "/kegiatan-program-desa",
    //     element: <KegiatanProgramDesa />,
    //   },
    //   {
    //     path: "/detail-kegiatan-desa",
    //     element: <DetailKegiatanDesa />,
    //   },
    ],
  },
]);

export default Routing;
