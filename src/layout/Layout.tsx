import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import App from "../App";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
                <App />
            </div>
            <Footer />
        </div>
    )
}