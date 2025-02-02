import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        path: "/",
        errorElement: <div></div>,
        children: [
            {
                path: "",
                element: <>abcd</>
            }
        ]

    }
]);

export default router