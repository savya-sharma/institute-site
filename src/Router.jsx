import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Hero from './sections/Hero'
import OutletComponent from './OutletComponent/OutletComponent'
import Contact from './pages/Contact.jsx'
import Support from './pages/Support.jsx'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <OutletComponent />,
        children: [
            {
                path: '/',
                element: <Hero />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/support',
                element: <Support />
            }
        ],
    },
])

const Router = () => {

    return (
        <RouterProvider router={routes} />
    )
}

export default Router