import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const Layout = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>} style={{height: "calc(100hv - 200px)", backgroudColor: "blue"}}> 
                <Outlet/>
            </Suspense>
            <Footer />
        </>
    )
}

export default Layout