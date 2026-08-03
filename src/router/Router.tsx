import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import App from "../App";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const routerPortfolio = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <App />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "projects",
            element: <Projects />
        },
        {
            path: "skills",
            element: <Skills />
        },
        {
            path: "contact",
            element: <Contact />
        }
    ]

}])

export default routerPortfolio
