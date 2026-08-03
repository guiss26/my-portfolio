// import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import App from "../App";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
                {/* <Outlet /> */}
                <App />
            </div>
            <Footer />
        </div>
    )
}