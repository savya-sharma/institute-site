import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './sections/About'
import Hero from './sections/Hero'
import OutletComponent from './OutletComponent/OutletComponent'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <OutletComponent />,
        children: [
            {
                path: '/',
                element: <Hero />
            },
        ],
    },
])

const Router = () => {

    return (
        <RouterProvider router={routes} />
    )
}

export default Router