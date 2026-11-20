import { createBrowserRouter } from "react-router";
import home from "../pages/home/home";
import about from "../pages/about/about";
import publiclayout from "../layouts/publiclayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component : publiclayout,
        children: [
            {
                index: true,
                lazy: async() => {
                    const module = await import("../pages/home/home")

                    return {
                        component: module.default
                    }
                }
            },
            {
                index: true,
                lazy: async() => {
                    const module = await import("../pages/about/about")

                    return {
                        component: module.default
                    }
                }
            }
        ] 
    },
])

export default router