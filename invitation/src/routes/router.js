import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Main from "../pages/main";

const router = createBrowserRouter([
    {
        element: <Layout />,
        path: "/",
        errorElement: <div></div>,
        children: [
            {
                path: "",
                element: <Main />
            }
        ]

    }
]);

export default router